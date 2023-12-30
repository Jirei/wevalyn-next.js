"use client";
import { checkCaptchaActionOnClient, logClientError } from "@/lib/client";
import { WrappingError, cn } from "@/lib/common";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleContactFormSubmit } from "./server-action";
import {
  ContactFormData,
  FormResponse,
  contactFormSchema,
} from "./schemas-and-types";
import { MdError } from "react-icons/md";
import { RotatingLines } from "react-loader-spinner";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ContactFormData>({
    mode: "onSubmit",
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      captchaToken: "placeholder",
    },
  });
  const [formResponse, setFormResponse] = useState<FormResponse>({
    hasError: null,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const {
        token,
        hasError,
        error = undefined,
      } = await checkCaptchaActionOnClient(window?.grecaptcha, "contact");
      if (hasError) {
        throw new WrappingError(
          "grecaptcha client token request failed",
          error
        );
      }
      const dataHydratedWithCaptchaToken = { ...data, captchaToken: token };
      const formResponse = await handleContactFormSubmit(
        dataHydratedWithCaptchaToken
      );
      setFormResponse(formResponse);
    } catch (e) {
      logClientError(e);
      setFormResponse({
        hasError: true,
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const numberOfCharactersInMessage = watch("message")?.length;
  return (
    <section
      className={cn(
        "bg-primary text-white transition-all duration-1000 rounded-xl overflow-hidden w-11/12 max-w-[40rem] m-auto border border-primary"
      )}
    >
      <form
        // needed because playwright getByRole() has a bug
        data-testid="form"
        className="flex flex-col p-5 py-10 gap-y-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-white m-auto text-3xl">Contact Form</h2>
        <ul className="flex flex-col gap-y-5">
          {/* First Name Input */}
          <li>
            <div className="flex flex-col gap-y-2">
              <div className="flex flex-col gap-y-2">
                <label className="text-white text-lg" htmlFor="first-name">
                  First name *
                </label>
                <input
                  id="first-name"
                  {...register("firstName")}
                  required
                  className={cn(
                    "p-2 font-roboto text-primary border border-primary rounded [&:not(:placeholder-shown)]:valid:border-green-500 [&:not(:placeholder-shown)]invalid:border-red-500 invalid:border-2"
                  )}
                  type="text"
                  placeholder="John"
                  aria-invalid={errors.firstName ? "true" : "false"}
                />
              </div>
              <p className="flex items-center gap-x-2 text-red-100">
                {errors.firstName?.message && (
                  <>
                    <MdError size="2em" className="text-red-500" />
                    <span>{errors.firstName?.message}</span>
                  </>
                )}
              </p>
            </div>
          </li>
          {/* Last Name Input */}
          <li>
            <div className="flex flex-col gap-y-2">
              <div className="flex flex-col gap-y-2">
                <label className="text-white text-lg" htmlFor="last-name">
                  Last name (not required)
                </label>
                <input
                  id="last-name"
                  {...register("lastName")}
                  className="p-2 font-roboto text-primary border border-primary rounded [&:not(:placeholder-shown)]:valid:border-green-500 [&:not(:placeholder-shown)]invalid:border-red-500 invalid:border-2"
                  type="text"
                  placeholder="Doe"
                  aria-invalid={errors.lastName ? "true" : "false"}
                />
              </div>
              <p className="flex items-center gap-x-2 text-red-100">
                {errors.lastName?.message && (
                  <>
                    <MdError size="2em" className="text-red-500" />
                    <span>{errors.lastName?.message}</span>
                  </>
                )}
              </p>
            </div>
          </li>
          {/* Email Input */}
          <li>
            <div className="flex flex-col gap-y-2">
              <div className="flex flex-col gap-y-2">
                <label className="text-white text-lg" htmlFor="email">
                  Email *
                </label>
                <input
                  id="email"
                  {...register("email")}
                  required
                  type="email"
                  className="p-2 font-roboto text-primary border border-primary rounded [&:not(:placeholder-shown)]:valid:border-green-500 [&:not(:placeholder-shown)]invalid:border-red-500 invalid:border-2"
                  placeholder="johndoe@example.com"
                  aria-invalid={errors.email ? "true" : "false"}
                />
              </div>
              <p className="flex items-center gap-x-1 text-red-100">
                {errors.email?.message && (
                  <>
                    <MdError size="1.7em" className="text-red-500" />
                    <span>{errors.email?.message}</span>
                  </>
                )}
              </p>
            </div>
          </li>
          {/* Message Input */}
          <li>
            <div className="flex flex-col gap-y-2">
              <div className="flex flex-col gap-y-2">
                <label className="text-white text-lg" htmlFor="message">
                  Message *
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  required
                  className="p-2 font-roboto text-primary border border-primary rounded [&:not(:placeholder-shown)]:valid:border-green-500 [&:not(:placeholder-shown)]invalid:border-red-500 invalid:border-2"
                  placeholder="Hello, I would like a landing page for my new project..."
                  rows={7}
                  aria-invalid={errors.message ? "true" : "false"}
                />
              </div>
              <p className="flex items-center gap-x-2 text-red-100">
                {errors.message?.message && (
                  <>
                    <MdError size="2em" className="text-red-500" />
                    <span>
                      {errors.message?.message} There are currently{" "}
                      {numberOfCharactersInMessage} characters.
                    </span>
                  </>
                )}
              </p>
            </div>
          </li>
        </ul>
        <button
          className={cn(
            " uppercase bg-white text-primary text-xl font-bold font-roboto w-fit self-center py-1.5 gap-y-1 px-20 rounded",
            !isSubmitting && "hover:scale-105",
            isSubmitting && "bg-gray-300"
          )}
          disabled={isSubmitting}
          type="submit"
        >
          <div className="relative flex gap-x-4">
            <span className={cn("ml-8")}>Submit</span>
            <RotatingLines
              strokeColor={isSubmitting ? "rgb(0,105,181)" : "rgb(255,255,255)"}
              strokeWidth="5"
              animationDuration="0.75"
              width="1.2em"
              visible={true}
              aria-hidden={isSubmitting ? "false" : "true"}
            />
          </div>
        </button>
        {!!formResponse.message && !isSubmitting && (
          <>
            <p className="flex items-center gap-x-2 font-bold text-lg">
              {formResponse.hasError && (
                <MdError size="2em" className="text-red-500" />
              )}
              <span data-testid="form-feedback-message">
                {formResponse.message}
              </span>
            </p>
          </>
        )}
      </form>
    </section>
  );
}
