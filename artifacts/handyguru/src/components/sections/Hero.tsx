import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

import heroBg from "@assets/generated_images/hero-toolbelt.jpg"

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-primary">
      {/* Background Image overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Professional toolbelt" 
          className="w-full h-full object-cover opacity-20 object-center mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent mb-6 border border-accent/30 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm font-bold tracking-wide uppercase">Available for new projects</span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
            The neighborhood expert you can <span className="text-accent relative inline-block">
              actually trust.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
              </svg>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-10 leading-relaxed max-w-2xl font-medium">
            Skilled, dependable, and done right. Stop the contractor runaround and get your punch-list finished today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 text-lg h-14 px-8 group" asChild>
              <a href="#estimate">
                Get a Free Estimate
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg h-14 px-8" asChild>
              <a href="tel:5551234567">
                <Phone className="ml-2 h-5 w-5 mr-2" />
                (555) 123-4567
              </a>
            </Button>
          </div>
          
          <div className="mt-12 flex items-center gap-6 text-primary-foreground/60">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-secondary border-2 border-primary flex items-center justify-center text-xs font-bold text-white shadow-sm">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-sm font-medium">
              <div className="flex text-accent text-lg">★★★★★</div>
              <span className="text-white">4.9/5</span> average rating from 200+ locals
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
