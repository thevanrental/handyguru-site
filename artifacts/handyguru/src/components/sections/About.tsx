import { ShieldCheck, Clock, CheckCircle } from "lucide-react"

const reasons = [
  {
    icon: ShieldCheck,
    title: "Fully Insured & Vetted",
    description: "Your home is your sanctuary. We are fully insured, background-checked, and treat your property with the absolute highest respect."
  },
  {
    icon: Clock,
    title: "On Time, Every Time",
    description: "No more waiting around for a 4-hour window. We give exact arrival times and we actually show up when we say we will."
  },
  {
    icon: CheckCircle,
    title: "Done Right Guarantee",
    description: "We don't cut corners. If a repair doesn't hold up to our standards, we come back and fix it on our dime. Simple as that."
  }
]

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
              The contractor alternative.
            </h2>
            <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 leading-relaxed">
              Finding someone to fix a door hinge shouldn't require three quotes and a week of unreturned phone calls. 
              We built HandyGuru to bring professionalism, transparency, and craft back to the everyday home repair.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-1 bg-accent rounded-full"></div>
              <span className="font-bold text-accent tracking-widest uppercase text-sm">Founded on Trust</span>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-12">
            <div className="flex flex-col gap-8">
              {reasons.map((reason, i) => {
                const Icon = reason.icon;
                return (
                  <div key={i} className="flex gap-6 bg-secondary-foreground/5 p-6 rounded-2xl border border-secondary-foreground/10 hover:bg-secondary-foreground/10 transition-colors">
                    <div className="shrink-0 w-14 h-14 bg-accent rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-heading mb-2 text-white">{reason.title}</h3>
                      <p className="text-secondary-foreground/80 text-lg leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
