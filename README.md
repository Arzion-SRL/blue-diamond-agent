This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Environment Variables

Before running the application, you need to set up the following environment variables:

Create a `.env.local` file in the root directory and add:

```bash
OPENROUTER_API_KEY=your_openrouter_api_key_here
OPENAI_API_KEY=your_openai_api_key_here
NEXT_PUBLIC_HYPERFUNNEL_API_URL=your_api_url_here
```

**API Keys Setup:**

**OpenRouter API Key (for chat functionality):**
1. Visit [OpenRouter](https://openrouter.ai/)
2. Sign up or log in to your account
3. Navigate to the API Keys section
4. Generate a new API key
5. Copy the key and paste it in your `.env.local` file

**OpenAI API Key (for text-to-speech functionality):**
1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign up or log in to your account
3. Navigate to the API Keys section
4. Generate a new API key
5. Copy the key and paste it in your `.env.local` file

> **Note:** While OpenRouter provides access to many AI models, text-to-speech functionality currently requires a direct OpenAI API key. The chat functionality will use OpenRouter, while TTS will use OpenAI directly.

The `NEXT_PUBLIC_HYPERFUNNEL_API_URL` should be set to your backend API endpoint URL. For example:
- Development: `http://localhost:8000`
- Production: `https://your-api-domain.com`

> **Note:** The `NEXT_PUBLIC_` prefix is required for environment variables that need to be accessible in client-side code (browser). This is a Next.js security feature.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
