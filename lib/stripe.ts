"use server";
import Stripe from "stripe";
import env from "@/lib/env";
import { revalidatePath } from "next/cache";

const stripe = new Stripe(env.STRIPE_SK);

export const createSession = async (email?: string) => {
  const session = await stripe.checkout.sessions.create({
    customer_email: email,
    success_url: `${env.APP_DOMAIN}/submission/{CHECKOUT_SESSION_ID}`,
    mode: "payment",
    discounts: [{ coupon: env.STRIPE_COUPON_ID }],
    line_items: [
      {
        price: env.STRIPE_PRICE_ID,
        quantity: 1,
      },
    ],
  });

  return session.url;
};

export const getSession = async (sessionId: string) => {
  const session = await stripe.checkout.sessions.retrieve(sessionId);

  if (!session) {
    return null;
  }

  return session;
};

export const getCouponUsage = async () => {
  try {
    // List all promotion codes that reference the coupon
    const coupon = await stripe.coupons.retrieve(env.STRIPE_COUPON_ID);

    revalidatePath("/", "layout");
    return coupon.times_redeemed;
  } catch (error) {
    console.error("Error fetching coupon usage:", error);
  }
};
