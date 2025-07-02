"use client"

import { motion } from "framer-motion"
import { Sparkles, ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function FeaturedHighlight() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="w-full max-w-md mx-auto"
    >
      <Card className="relative overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <CardContent className="relative p-6 text-center space-y-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
          >
            <Sparkles className="w-4 h-4" />
            New Drop Alert
          </motion.div>
          
          <h3 className="text-xl font-bold text-foreground">
            "10 Days in Bali" Vlog Series
          </h3>
          
          <p className="text-muted-foreground">
            Join me on my incredible journey through Bali's hidden gems, local culture, and unforgettable experiences.
          </p>
          
          <div className="flex gap-3 justify-center">
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
              asChild
            >
              <a href="https://youtube.com/watch?v=bali-series" target="_blank" rel="noopener noreferrer">
                <Play className="w-4 h-4 mr-2" />
                Watch Now
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/thanks">
                <ArrowRight className="w-4 h-4 mr-2" />
                Get Notified
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}