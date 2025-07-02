"use client"

import { motion } from "framer-motion"
import { Instagram, Youtube, MessageCircle, Music, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    icon: <Instagram className="w-6 h-6" />,
    href: "https://instagram.com/alexmorgan",
    label: "Instagram",
    color: "hover:text-pink-500"
  },
  {
    icon: <Youtube className="w-6 h-6" />,
    href: "https://youtube.com/@alexmorgan",
    label: "YouTube",
    color: "hover:text-red-500"
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    href: "https://tiktok.com/@alexmorgan",
    label: "TikTok",
    color: "hover:text-black dark:hover:text-white"
  },
  {
    icon: <Music className="w-6 h-6" />,
    href: "https://open.spotify.com/user/alexmorgan",
    label: "Spotify",
    color: "hover:text-green-500"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    href: "mailto:hello@alexmorgan.com",
    label: "Email",
    color: "hover:text-blue-500"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    href: "/thanks",
    label: "Book a Call",
    color: "hover:text-purple-500"
  }
]

export function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="flex flex-wrap justify-center gap-4"
    >
      {socialLinks.map((link, index) => (
        <motion.div
          key={link.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="ghost"
            size="icon"
            className={`w-14 h-14 rounded-full bg-muted/50 hover:bg-muted transition-all duration-300 ${link.color}`}
            asChild
          >
            <a
              href={link.href}
              target={link.href.startsWith('http') ? "_blank" : "_self"}
              rel={link.href.startsWith('http') ? "noopener noreferrer" : ""}
              aria-label={link.label}
            >
              {link.icon}
            </a>
          </Button>
        </motion.div>
      ))}
    </motion.div>
  )
}