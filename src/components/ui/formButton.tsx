"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

// 1. Updated Type
interface SendButtonProps {
  status: "idle" | "sending" | "success" | "error";
  disabled?: boolean;
}

export default function SendButton({ status, disabled }: SendButtonProps) {
  // Animation variants for the "Shake" effect on error
  const shakeVariants = {
    error: {
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.button
      type="submit"
      disabled={disabled || status === "sending"}
      animate={status === "error" ? "error" : ""}
      variants={shakeVariants}
      className={`relative flex items-center justify-center gap-2 overflow-hidden rounded-lg px-6 py-3 font-medium text-white transition-colors 
        ${
          status === "error"
            ? "bg-red-500"
            : "bg-[#155dfc] hover:bg-transparent hover:border border-[#3f3f3f]"
        } 
        ${
          status === "success"
            ? "bg-green-500"
            : "bg-[#155dfc] hover:bg-transparent hover:border border-[#3f3f3f]"
        }
        disabled:bg-[#155dfc]`}
    >
      <AnimatePresence mode="wait">
        {status === "idle" && (
          <motion.div
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            <span>Send Message</span>
            <Send size={18} />
          </motion.div>
        )}

        {status === "sending" && (
          <motion.div
            key="sending"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            <span>Sending...</span>
            <motion.div
              animate={{ x: [0, 25], y: [0, -25], opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            >
              <Send size={18} />
            </motion.div>
          </motion.div>
        )}

        {status === "success" && (
          <motion.div
            key="success"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex items-center gap-2"
          >
            <span>Sent!</span>
            <CheckCircle2 size={18} />
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <span>Failed</span>
            <AlertCircle size={18} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
