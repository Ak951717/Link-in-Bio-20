"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingAction() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.4 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          boxShadow: [
            "0 4px 14px 0 rgba(0, 0, 0, 0.1)",
            "0 6px 20px 0 rgba(0, 0, 0, 0.15)",
            "0 4px 14px 0 rgba(0, 0, 0, 0.1)"
          ]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Button
          size="lg"
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-2xl"
          asChild
        >
          <a 
            href="https://m.me/alexmorgan" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Send message"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
        </Button>
      </motion.div>
    </motion.div>
  )
}