"use server";
import { config } from "@/config";

export const subscribeToHomeNewsletter = async (email: string) => {
  try {
    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${config.kit.homeFormId}/subscribe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: config.kit.apiKey,
          email,
        }),
      }
    );

    const jsonResponse = await response.json();

    if (jsonResponse.error) {
      throw new Error(jsonResponse.error);
    }
    return { success: true };
  } catch (error: unknown) {
    return { success: false, error: (error as any).message };
  }
};
