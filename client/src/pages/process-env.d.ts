declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      GEMINI_KEY: string;
      // add more environment variables and their types here
    }
  }
}

export {};
