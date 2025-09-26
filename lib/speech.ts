export type VoiceType = 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer';

export interface SpeechOptions {
  text: string;
  voice?: VoiceType;
}

/**
 * Generate speech audio from text using OpenAI's TTS API
 * @param options - Speech generation options
 * @returns Promise<Blob> - Audio blob that can be played or downloaded
 */
export async function generateSpeech({ text, voice = 'alloy' }: SpeechOptions): Promise<Blob> {
  const response = await fetch('/api/speech', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text, voice }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to generate speech');
  }

  return response.blob();
}

/**
 * Generate and play speech audio from text
 * @param options - Speech generation options
 * @returns Promise<HTMLAudioElement> - Audio element that's playing
 */
export async function generateAndPlaySpeech({ text, voice = 'alloy' }: SpeechOptions): Promise<HTMLAudioElement> {
  const audioBlob = await generateSpeech({ text, voice });
  const audioUrl = URL.createObjectURL(audioBlob);

  const audio = new Audio(audioUrl);
  audio.play();

  // Clean up the URL when audio ends
  audio.addEventListener('ended', () => {
    URL.revokeObjectURL(audioUrl);
  });

  return audio;
}

/**
 * Generate speech and return a downloadable URL
 * @param options - Speech generation options
 * @returns Promise<string> - Object URL for the audio blob
 */
export async function generateSpeechUrl({ text, voice = 'alloy' }: SpeechOptions): Promise<string> {
  const audioBlob = await generateSpeech({ text, voice });
  return URL.createObjectURL(audioBlob);
}
