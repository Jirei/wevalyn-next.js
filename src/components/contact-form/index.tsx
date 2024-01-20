"use client";
import { checkCaptchaActionOnClient, logClientError } from "@/lib/client";
import { WrappingError, cn } from "@/lib/common";
import { useEffect, useState } from "react";
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
import { ContactFormDictionary } from "@/internationalization/dictionaries/types";

export function ContactForm({
  dictionary,
}: {
  dictionary: ContactFormDictionary;
}) {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isValid: formIsValid,
      isSubmitted,
      isSubmitSuccessful,
    },
    watch,
    reset,
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
  const isFormSubmitButtonDisabled =
    isSubmitting || (!formIsValid && isSubmitted);
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
  useEffect(() => {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful, reset]);
  const numberOfCharactersInMessage = watch("message")?.length;
  return (
    <section
      className={cn(
        "bg-primary dark:bg-primary-very-dark-dark-theme text-white transition-all duration-1000 rounded-xl overflow-hidden w-11/12 max-w-[40rem] m-auto border border-primary dark:border-primary-dark-theme"
      )}
    >
      <form
        // needed because playwright getByRole() has a bug
        data-testid="form"
        className="flex flex-col p-5 py-10 gap-y-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-white m-auto text-3xl">{dictionary.ContactForm}</h2>
        <ul className="flex flex-col gap-y-5">
          {/* First Name Input */}
          <li>
            <div className="flex flex-col gap-y-2">
              <div className="flex flex-col gap-y-2">
                <label className="text-white text-lg" htmlFor="first-name">
                  {dictionary.FirstName} *
                </label>
                <input
                  id="first-name"
                  {...register("firstName")}
                  required
                  className={cn(
                    "p-2 font-roboto text-primary dark:text-white dark:bg-gray-800  border border-primary dark:border-transparent rounded",
                    isSubmitted &&
                      errors.firstName &&
                      "!border-red-500 border-2",
                    isSubmitted && !errors.firstName && "!border-green-500"
                  )}
                  type="text"
                  placeholder="John"
                  aria-invalid={errors.firstName ? "true" : "false"}
                  aria-errormessage="first-name-error"
                />
              </div>
              <p
                aria-hidden={errors.firstName ? "false" : "true"}
                className="flex items-center gap-x-2 text-red-100"
              >
                {errors.firstName?.message && (
                  <>
                    <MdError size="2em" className="text-red-500" />
                    <span aria-live="polite" id="first-name-error">
                      {errors.firstName?.message}
                    </span>
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
                  {dictionary.LastName} ({dictionary.NotRequired})
                </label>
                <input
                  id="last-name"
                  {...register("lastName")}
                  className={cn(
                    "p-2 font-roboto text-primary dark:text-white dark:bg-gray-800 border border-primary dark:border-transparent rounded",
                    isSubmitted &&
                      errors.lastName &&
                      "!border-red-500 border-2",
                    isSubmitted && !errors.lastName && "!border-green-500"
                  )}
                  type="text"
                  placeholder="Doe"
                  aria-invalid={errors.lastName ? "true" : "false"}
                  aria-errormessage="last-name-error"
                />
              </div>
              <p
                aria-hidden={errors.lastName ? "false" : "true"}
                className="flex items-center gap-x-2 text-red-100"
              >
                {errors.lastName?.message && (
                  <>
                    <MdError size="2em" className="text-red-500" />
                    <span aria-live="polite" id="last-name-error">
                      {errors.lastName?.message}
                    </span>
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
                  {dictionary.Email} *
                </label>
                <input
                  id="email"
                  {...register("email")}
                  required
                  type="email"
                  className={cn(
                    "p-2 font-roboto text-primary dark:text-white dark:bg-gray-800 border border-primary dark:border-transparent rounded",
                    isSubmitted && errors.email && "!border-red-500 border-2",
                    isSubmitted && !errors.email && "!border-green-500"
                  )}
                  placeholder="johndoe@example.com"
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-errormessage="email-error"
                />
              </div>

              <p
                aria-hidden={errors.email ? "false" : "true"}
                className="flex items-center gap-x-1 text-red-100"
              >
                {errors.email?.message && (
                  <>
                    <MdError size="1.7em" className="text-red-500" />
                    <span aria-live="polite" id="email-error">
                      {errors.email?.message}
                    </span>
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
                  {dictionary.Message} *
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  required
                  className={cn(
                    "p-2 font-roboto text-primary dark:text-white dark:bg-gray-800 border border-primary dark:border-transparent rounded",
                    isSubmitted && errors.message && "!border-red-500 border-2",
                    isSubmitted && !errors.message && "!border-green-500"
                  )}
                  placeholder="Hello, I would like a landing page for my new project..."
                  rows={7}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-errormessage="message-error"
                />
              </div>
              <p
                aria-hidden={errors.message ? "false" : "true"}
                className="flex items-center gap-x-2 text-red-100"
              >
                {errors.message?.message && (
                  <>
                    <MdError size="2em" className="text-red-500" />
                    <span aria-live="polite" id="message-error">
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
            "uppercase  text-primary text-xl font-bold font-roboto w-fit self-center py-1.5 gap-y-1 px-20 rounded",
            !isFormSubmitButtonDisabled && "hover:scale-105",
            isFormSubmitButtonDisabled
              ? "bg-gray-300 dark:bg-slate-900 hover:cursor-not-allowed"
              : "bg-white dark:bg-primary-dark-dark-theme"
          )}
          disabled={isFormSubmitButtonDisabled}
          type="submit"
        >
          <div className="relative flex gap-x-4 items-center">
            <span
              className={cn(
                "ml-8",
                "dark:text-white",
                isFormSubmitButtonDisabled &&
                  !isSubmitting &&
                  "dark:text-gray-300"
              )}
            >
              {dictionary.Submit}
            </span>
            <span
              className={cn(
                "w-fit h-fit",
                isSubmitting && "!stroke-[rgb(0,105,181)] dark:!stroke-white",
                isFormSubmitButtonDisabled
                  ? "stroke-transparent"
                  : "stroke-white dark:stroke-primary-dark-dark-theme"
              )}
            >
              <RotatingLines
                ariaLabel="Loading Icon"
                strokeColor="inherit"
                strokeWidth="5"
                animationDuration="0.75"
                width="1.2em"
                visible={true}
                aria-hidden={isSubmitting ? "false" : "true"}
              />
            </span>
          </div>
        </button>
        {!!formResponse.message && !isSubmitting && (
          <>
            <p
              aria-live="polite"
              className="flex items-center gap-x-2 font-bold text-lg"
            >
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
