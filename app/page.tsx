"use client"

import { motion } from "framer-motion"
import { ProfileHeader } from "@/components/profile-header"
import { LinkButton } from "@/components/link-button"
import { SocialLinks } from "@/components/social-links"
import { FeaturedHighlight } from "@/components/featured-highlight"
import { FloatingAction } from "@/components/floating-action"
import { ThemeToggle } from "@/components/theme-toggle"
import { 
  Youtube, 
  Instagram, 
  ShoppingBag, 
  BookOpen, 
  Camera, 
  Heart,
  Zap,
  Gift
} from "lucide-react"

const mainLinks = [
  {
    icon: <Youtube className="w-6 h-6 text-red-500" />,
    title: "Latest YouTube Video",
    description: "Bali Travel Vlog - Episode 3",
    href: "https://youtube.com/watch?v=latest",
    variant: "gradient" as const
  },
  {
    icon: <Instagram className="w-6 h-6 text-pink-500" />,
    title: "Follow on Instagram",
    description: "Daily stories & behind the scenes",
    href: "https://instagram.com/alexmorgan",
    variant: "default" as const
  },
  {
    icon: <ShoppingBag className="w-6 h-6 text-green-500" />,
    title: "Shop My Favorites",
    description: "Curated lifestyle & travel essentials",
    href: "https://shop.alexmorgan.com",
    variant: "default" as const
  },
  {
    icon: <BookOpen className="w-6 h-6 text-blue-500" />,
    title: "Free Travel Guide",
    description: "My Ultimate Bali Travel Guide PDF",
    href: "/thanks",
    variant: "secondary" as const
  },
  {
    icon: <Camera className="w-6 h-6 text-purple-500" />,
    title: "Photography Presets",
    description: "Get my signature Lightroom presets",
    href: "https://presets.alexmorgan.com",
    variant: "default" as const
  },
  {
    icon: <Heart className="w-6 h-6 text-red-400" />,
    title: "Wellness Course",
    description: "30-day mindfulness & self-care journey",
    href: "https://course.alexmorgan.com",
    variant: "default" as const
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    title: "1:1 Coaching",
    description: "Personal brand & content strategy",
    href: "/thanks",
    variant: "secondary" as const
  },
  {
    icon: <Gift className="w-6 h-6 text-emerald-500" />,
    title: "Monthly Giveaway",
    description: "Win a $500 travel voucher",
    href: "/thanks",
    variant: "gradient" as const
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      {/* Theme Toggle */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed top-6 right-6 z-40"
      >
        <ThemeToggle />
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-lg">
        <div className="space-y-12">
          {/* Profile Header */}
          <ProfileHeader />

          {/* Featured Highlight */}
          <FeaturedHighlight />

          {/* Main Links */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {mainLinks.map((link, index) => (
              <LinkButton
                key={link.title}
                {...link}
                delay={0.7 + index * 0.1}
              />
            ))}
          </motion.div>

          {/* Social Links */}
          <SocialLinks />

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="text-center text-sm text-muted-foreground py-8"
          >
            <p>© 2024 Alex Morgan. All rights reserved.</p>
            <p className="mt-2">Made with ❤️ for my amazing community</p>
          </motion.div>
        </div>
      </div>

      {/* Floating Action Button */}
      <FloatingAction />

      {/* Background Decorations */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  )
}