'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({ senderEmail: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  const socialIconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i: any) => ({
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        delay: i * 0.1,
      },
    }),
  };

  const formContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const inputVariants = {
    focused: { scale: 1.02, boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)' },
    unfocused: { scale: 1, boxShadow: '0 0 0px rgba(59, 130, 246, 0)' },
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!formData.senderEmail || !formData.message) {
      toast.error('Please fill out all fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({ senderEmail: '', message: '' });
      } else {
        toast.error('Failed to send message.');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername', index: 0 },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', index: 1 },
    { icon: Mail, href: 'mailto:imubashirahmad@gmail.com', index: 2 },
  ];

  return (
    <motion.section
      className="min-h-screen w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.h2
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-[#ffa781]"
              animate={{
                backgroundPosition: ['0%', '100%'],
                transition: {
                  duration: 8,
                  repeat: Infinity,
                  repeatType: 'reverse',
                },
              }}
            >
              Let's Connect
            </motion.h2>
            <motion.p
              className="mx-auto max-w-[700px] text-gray-600 dark:text-white text-lg"
              variants={itemVariants}
            >
              Have a project in mind? Let's collaborate and create something
              amazing together.
            </motion.p>
          </motion.div>

          <motion.div className="flex space-x-8">
            {socialLinks.map(({ icon: Icon, href, index }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl dark:shadow-gray-800/50 transition-shadow"
                custom={index}
                variants={socialIconVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: 15,
                  transition: { type: 'spring', stiffness: 300 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-6 h-6 text-[#ffa781]" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="w-full max-w-md"
            variants={formContainerVariants}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl dark:shadow-gray-800/50"
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <AnimatePresence>
                <motion.div className="space-y-2">
                  <motion.input
                    name="senderEmail"
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={formData.senderEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, senderEmail: e.target.value })
                    }
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 bg-transparent dark:bg-gray-800 transition-all duration-300 dark:placeholder-gray-400"
                    variants={inputVariants}
                    animate={focusedField === 'email' ? 'focused' : 'unfocused'}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  />
                </motion.div>
                <motion.div className="space-y-2">
                  <motion.textarea
                    name="message"
                    placeholder="Your message..."
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700
                             focus:outline-none focus:border-blue-500 dark:focus:border-blue-400
                             bg-transparent dark:bg-gray-800 transition-all duration-300
                             dark:placeholder-gray-400 min-h-[150px] resize-none"
                    variants={inputVariants}
                    animate={
                      focusedField === 'message' ? 'focused' : 'unfocused'
                    }
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg text-white font-medium bg-gradient-to-r from-[#ffa781] to-purple-500 hover:from-[#ffa781] hover:to-purple-600 transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {isSubmitting ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex justify-center space-x-2"
                    >
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </motion.div>
                  ) : (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Send Message
                    </motion.span>
                  )}
                </motion.button>
              </AnimatePresence>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
