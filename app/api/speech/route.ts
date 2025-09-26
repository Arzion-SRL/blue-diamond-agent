import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// First try OpenRouter, fallback to OpenAI if needed
const getOpenAIClient = () => {
  // If we have an OpenAI key, use it directly
  if (process.env.OPENAI_API_KEY) {
    return new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  // Otherwise try OpenRouter (though TTS might not be supported)
  if (process.env.OPENROUTER_API_KEY) {
    return new OpenAI({
      apiKey: process.env.OPENROUTER_API_KEY,
      baseURL: 'https://openrouter.ai/api/v1',
    });
  }

  throw new Error('No API key configured. Please set OPENAI_API_KEY or OPENROUTER_API_KEY');
};

export const maxDuration = 30;

export async function POST(req: NextRequest) {
  try {
    const { text, voice = 'alloy' } = await req.json();

    if (!text) {
      return NextResponse.json(
        { error: 'Text is required' },
        { status: 400 }
      );
    }

    // Validate voice option
    const validVoices = ['alloy', 'echo', 'fable', 'onyx', 'nova', 'shimmer'];
    if (!validVoices.includes(voice)) {
      return NextResponse.json(
        { error: `Invalid voice. Must be one of: ${validVoices.join(', ')}` },
        { status: 400 }
      );
    }

    // Get OpenAI client at runtime, not at module load time
    const openai = getOpenAIClient();

    let speechResponse;
    try {
      speechResponse = await openai.audio.speech.create({
        model: 'tts-1',
        input: text,
        voice: voice as any,
      });
    } catch (error: any) {
      // If using OpenRouter and TTS fails, provide a helpful error message
      if (error?.status === 405 && process.env.OPENROUTER_API_KEY && !process.env.OPENAI_API_KEY) {
        return NextResponse.json(
          {
            error: 'Text-to-Speech is not currently supported through OpenRouter. Please add an OPENAI_API_KEY to your environment variables to use this feature.',
            details: 'You can get an OpenAI API key from https://platform.openai.com/api-keys'
          },
          { status: 503 }
        );
      }
      throw error;
    }

    // Convert the response to a buffer
    const audioBuffer = Buffer.from(await speechResponse.arrayBuffer());

    return new NextResponse(audioBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Length': audioBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error('Speech generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate speech' },
      { status: 500 }
    );
  }
}
