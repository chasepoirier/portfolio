"use client";
import { subscribeToHomeNewsletter } from "@/services/kit";
import { usePlausible } from "next-plausible";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
};

const NewsletterForm = () => {
  const plausible = usePlausible();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    plausible("newsletter-submit", { props: { email: data.email } });
    await subscribeToHomeNewsletter(data.email);
  };

  const { register, handleSubmit, formState } = useForm<Inputs>();

  return formState.isSubmitted ? (
    <div className="px-8 py-2 border rounded border-gray-200 mt-12 max-w-screen-sm w-full">
      <p className="font-semibold">You&apos;re In!</p>
      <p className="text-sm text-gray-400">
        Check your inbox for a confirmation email
      </p>
    </div>
  ) : (
    <form
      action="#"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-wrap md:flex-nowrap gap-2 md:p-2 md:border rounded-full w-full max-w-xl mt-12"
    >
      <input
        {...register("email", { required: true })}
        type="email"
        placeholder="Your email address"
        className="px-6 py-2 outline-none text-lg w-full md:border-none border rounded-full mb-2 md:mb-0"
      />
      {formState.errors.email && <span>This field is required</span>}

      <button className="button text-lg md:w-auto w-full" type="submit">
        {formState.isSubmitting ? "Submitting..." : "Subscribe"}
      </button>
    </form>
  );
};

export default NewsletterForm;
