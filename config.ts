import z from "zod";

const configSchema = z.object({
  google: z.object({
    apiKey: z.string(),
  }),
  kit: z.object({
    apiKey: z.string(),
    apiSecret: z.string(),
    homeFormId: z.string(),
  }),
  urls: z.object({
    introCall: z.string(),
  }),
});

type Config = z.infer<typeof configSchema>;

export const config: Config = configSchema.parse({
  google: {
    apiKey: process.env.GOOGLE_KEY,
  },
  kit: {
    apiKey: process.env.KIT_API_KEY,
    apiSecret: process.env.KIT_API_SECRET,
    homeFormId: "6906860",
  },
  urls: {
    introCall: "https://calendly.com/chase-p2xn/30min",
  },
});
