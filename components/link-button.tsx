"use client"

import { motion } from "framer-motion"
import { ExternalLink, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ReactNode } from "react"

interface LinkButtonProps {
  href: string
  icon: ReactNode
  title: string
  description?: string
  variant?: "default" | "secondary" | "gradient"
  delay?: number
}

export function LinkButton({ 
  href, 
  icon, 
  title, 
  description, 
  variant = "default",
  delay = 0 
}: LinkButtonProps) {
  const baseClasses = "w-full h-auto p-6 group relative overflow-hidden"
  
  const variantClasses = {
    default: "border-2 hover:border-primary/50 bg-card hover:bg-primary/5",
    secondary: "bg-secondary hover:bg-secondary/80",
    gradient: "bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 border-2 border-primary/30 hover:border-primary/60"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Button
        variant="ghost"
        className={`${baseClasses} ${variantClasses[variant]}`}
        asChild
      >
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-between transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors"
            >
              {icon}
            </motion.div>
            <div className="text-left">
              <div className="font-semibold text-base text-foreground group-hover:text-primary transition-colors">
                {title}
              </div>
              {description && (
                <div className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors">
                  {description}
                </div>
              )}
            </div>
          </div>
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
            className="flex-shrink-0"
          >
            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.div>
        </a>
      </Button>
    </motion.div>
  )
}