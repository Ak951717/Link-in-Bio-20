"use client"

import { motion } from "framer-motion"
import { CheckCircle, MapPin, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge" 
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function ProfileHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center space-y-6"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative inline-block"
      >
        <Avatar className="w-32 h-32 mx-auto ring-4 ring-primary/20 shadow-2xl">
          <AvatarImage
            src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Alex Morgan"
            className="object-cover"
          />
          <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-primary to-purple-600 text-primary-foreground">
            AM
          </AvatarFallback>
        </Avatar>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2 shadow-lg"
        >
          <CheckCircle className="w-6 h-6" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="space-y-3"
      >
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Alex Morgan
          </h1>
          <CheckCircle className="w-6 h-6 text-blue-500 fill-current" />
        </div>
        
        <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
          Content Creator • Lifestyle Blogger • Digital Entrepreneur
        </p>

        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            Los Angeles, CA
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            Since 2020
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-base text-foreground/80 max-w-lg mx-auto px-4"
        >
          🌟 Inspiring authentic living through daily content
          <br />
          📱 1M+ followers across platforms
          <br />
          ✨ Building community one story at a time
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex flex-wrap justify-center gap-2"
      >
        <Badge variant="secondary" className="px-3 py-1">
          #Lifestyle
        </Badge>
        <Badge variant="secondary" className="px-3 py-1">
          #Travel
        </Badge>``
        <Badge variant="secondary" className="px-3 py-1">
          #Wellness
        </Badge>
        <Badge variant="secondary" className="px-3 py-1">
          #Fashion
        </Badge>
      </motion.div>
    </motion.div>
  )
}