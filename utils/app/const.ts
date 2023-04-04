export const DEFAULT_SYSTEM_PROMPT =
  process.env.DEFAULT_SYSTEM_PROMPT || "You are ChatGPT, a large language model trained by OpenAI. Follow the user's instructions carefully. Respond using markdown.";

export const OPENAI_API_HOST =
  process.env.OPENAI_API_HOST || 'https://api.openai.com';

export function checkAccessCode(code: string): boolean {
  const codes = getAccessCodes();
  return codes.has(code);
}

function getAccessCodes(): Set<string> {
    const code = process.env.ACCESS_CODE;

    try {
      const codes = (code?.split(",") ?? [])
        .filter((v) => !!v)
        .map((v) => v.trim());
      return new Set(codes);
    } catch (e) {
      return new Set();
    }
  }