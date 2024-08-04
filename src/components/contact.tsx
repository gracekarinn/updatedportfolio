"use client";
import React, { useState, useEffect } from "react";
import { FormData } from "@/lib/data";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { useTheme } from "./theme-switch";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    emailjs.init(process.env.EMAILJS_PUBLIC_KEY!);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const result = await emailjs.send(
        process.env.EMAILJS_SERVICE_ID!,
        process.env.EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );
      console.log(result.text);
      alert("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="flex justify-center items-center p-4">
      <div className="flex w-full max-w-4xl rounded-lg shadow-lg overflow-hidden dark:shadow-gray-700/50">
        <div className="flex-1 p-8 dark:bg-gray-800/30">
          <h1 className="text-2xl font-bold text-black dark:text-white mb-6">
            Get in touch
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-purple-400"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-purple-400"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-purple-400"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {submitError && (
              <p className="text-red-500 dark:text-red-400 mb-4">
                {submitError}
              </p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-red-400 dark:bg-violet-800 text-white px-4 py-2 rounded-md hover:bg-red-500 transition duration-300 ease-in-out disabled:opacity-50 dark:hover:bg-red-700"
            >
              {isSubmitting ? "Sending..." : "Submit →"}
            </button>
          </form>
        </div>
        <div className="hidden md:flex md:w-1/2 relative items-center justify-center bg-gray-100 dark:bg-gray-700 p-4">
          <div className="relative w-full h-0 pb-[100%]">
            <Image
              src={theme === "dark" ? "/email-darkmode.png" : "/email.png"}
              alt="email"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "contain" }}
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
