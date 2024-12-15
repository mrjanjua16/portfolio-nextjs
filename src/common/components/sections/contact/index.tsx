"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/common/lib/hooks";
import SubmitBtn from "./_components/submit-btn";
import SectionHeading from "@/common/components/shared/section-heading";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("contact");
  const [formData, setFormData] = useState({ senderEmail: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!formData.senderEmail || !formData.message) {
      toast.error("Please fill out all fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Email sent successfully!");
        setFormData({ senderEmail: "", message: "" });
      } else {
        toast.error(result.error || "Something went wrong.");
      }
    } catch (error) {
      toast.error("Failed to send email. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="flex w-full scroll-mt-12 flex-col items-center py-20 pb-44 text-center dark:bg-darkBg dark:text-white"
      initial={{ opacity: 0.8 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Hit me up!</SectionHeading>
      <div className="w-[min(100%,38rem)] px-4">
        <p className="mb-20 mt-6 text-gray-700 dark:text-white/80">
          Please contact me directly at{" "}
          <a className="underline" href="mailto:imubashirahmad@gmail.com">
            imubashirahmad@gmail.com
          </a>{" "}
          or through this form.
        </p>

        <form className="mt-10 flex flex-col dark:text-black" onSubmit={handleSubmit}>
          <input
            className="h-14 rounded-lg border bg-gray-50 px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:placeholder:text-darkBg dark:focus:bg-opacity-100"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
            value={formData.senderEmail}
            onChange={handleChange}
          />
          <textarea
            className="my-3 h-52 resize-none rounded-lg border bg-gray-50 p-4 transition-all dark:bg-opacity-80 dark:outline-none dark:placeholder:text-darkBg dark:focus:bg-opacity-100"
            name="message"
            placeholder="Your message 👋"
            required
            maxLength={5000}
            value={formData.message}
            onChange={handleChange}
          />
          <div className="flex justify-center">
            <SubmitBtn isSubmitting={isSubmitting} />
          </div>
        </form>
      </div>
    </motion.section>
  );
}
