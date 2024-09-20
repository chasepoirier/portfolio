import z from "zod";

const configSchema = z.object({
  urls: z.object({
    introCall: z.string(),
  }),
});

type Config = z.infer<typeof configSchema>;

export const clientConfig: Config = configSchema.parse({
  urls: {
    introCall: "https://calendly.com/chase-p2xn/30min",
  },
});
