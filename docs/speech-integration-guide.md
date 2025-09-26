# Speech Integration Guide

## Overview

The travel assistant chat now includes integrated text-to-speech functionality that allows users to:

- **Auto-play responses**: Toggle automatic speech generation for all assistant responses
- **Manual playback**: Click individual play buttons on assistant messages
- **Voice selection**: Choose from 6 different AI voices
- **Smart text processing**: Automatically cleans markdown and special characters

## Features

### 🔊 Auto Speech Toggle
- Located in the chat header next to the debug button
- When enabled, automatically converts assistant responses to speech
- Visual indicators show current state (ON/OFF) and selected voice

### 🎵 Individual Message Controls
- Each assistant message has a play button (appears on hover)
- Users can replay any previous assistant response
- Stop functionality to interrupt current playback

### 🎚️ Voice Selection
- 6 OpenAI voices available: Alloy, Echo, Fable, Onyx, Nova, Shimmer
- Each voice has a distinct personality and tone
- Settings accessible via hover card in speech controls

### 🧹 Smart Text Processing
- Automatically removes markdown formatting
- Cleans special characters and formatting
- Preserves natural speech flow

## Technical Implementation

### Components Added

1. **`useChatSpeech` Hook** (`/hooks/use-chat-speech.tsx`)
   - Manages speech state and functionality
   - Handles auto-play logic for new messages
   - Provides voice selection and error handling

2. **`SpeechControls` Component** (`/components/ai-elements/speech-controls.tsx`)
   - Main toggle button with voice selection
   - Compact and full display modes
   - Error display and settings panel

3. **`MessageSpeechButton` Component**
   - Individual play buttons for messages
   - Integrated into message content
   - Hover-to-show functionality

### Integration Points

- **Chat Header**: Speech toggle button with status indicators
- **Message Components**: Individual play buttons for assistant messages
- **Auto-Detection**: Automatic speech generation for new assistant responses
- **Voice Settings**: Hover card with voice selection dropdown

## Usage

### For Users

1. **Enable Auto Speech**:
   - Click the speech toggle button in chat header
   - When ON, all new assistant responses will be spoken automatically

2. **Manual Playback**:
   - Hover over any assistant message
   - Click the play button that appears
   - Audio will play immediately

3. **Change Voice**:
   - Click the settings icon when speech is enabled
   - Select from available voices in the dropdown
   - New voice applies to all future speech generation

4. **Stop Audio**:
   - Click the stop button when audio is playing
   - Or toggle off auto speech to stop and disable

### For Developers

```tsx
// Using the speech hook
const {
  isSpeechEnabled,
  isPlaying,
  toggleSpeech,
  playMessageSpeech,
  changeVoice
} = useChatSpeech({ voice: "alloy" });

// Manual speech generation
await playMessageSpeech("Hello, this will be spoken!");

// Auto-detect new assistant messages
useEffect(() => {
  if (isSpeechEnabled && newAssistantMessage) {
    handleMessageSpeech(messageText, true);
  }
}, [messages, isSpeechEnabled]);
```

## API Requirements

- Requires either `OPENAI_API_KEY` or `OPENROUTER_API_KEY` environment variable
- Uses `/api/speech` endpoint for text-to-speech generation
- Supports all OpenAI TTS voices and settings

## Error Handling

- Graceful fallback when no API key is configured
- Informative error messages for users
- Automatic cleanup of audio resources
- Network error recovery

## Performance Considerations

- Audio generation happens asynchronously
- Only one audio can play at a time
- Automatic cleanup prevents memory leaks
- Text preprocessing reduces API calls
