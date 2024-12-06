import { z } from "zod";

const env = z
  .object({
    APP_DOMAIN: z.string(),
    GOOGLE_KEY: z.string(),
    KIT_API_KEY: z.string(),
    KIT_API_SECRET: z.string(),
    STRIPE_PK: z.string(),
    STRIPE_SK: z.string(),
    STRIPE_PRICE_ID: z.string(),
    STRIPE_COUPON_ID: z.string(),
  })
  .parse(process.env);

export default env;
