import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wrench, Monitor, Sofa, PaintRoller, Lightbulb, Home } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "General Repairs",
    description: "Doors that stick, squeaky hinges, broken cabinet hardware, trim repairs, drywall patches. The everyday fixes every home needs.",
  },
  {
    icon: Monitor,
    title: "Mounting & Installation",
    description: "TV mounting (all sizes), shelving, mirrors, curtain rods, artwork, wall-mounted fixtures. Done cleanly and level.",
  },
  {
    icon: Sofa,
    title: "Furniture Assembly",
    description: "IKEA, Wayfair, Amazon furniture, storage systems, exercise equipment, outdoor furniture. No frustration, done fast.",
  },
  {
    icon: PaintRoller,
    title: "Drywall & Painting",
    description: "Nail holes, screw pops, water-damaged patches, corner bead repairs, interior painting and touch-ups.",
  },
  {
    icon: Lightbulb,
    title: "Fixture Replacement",
    description: "Faucets, shower heads, garbage disposals, light fixtures, ceiling fans, outlets and switches.",
  },
  {
    icon: Home,
    title: "Property Maintenance",
    description: "Recurring punch-list support for homeowners, landlords, and rental properties. Reliable, professional, consistent.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
            Expertise across the board
          </h2>
          <p className="text-lg text-muted-foreground">
            From minor tweaks to major installations, we handle the jobs that keep your home running smoothly. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-border/60 hover:border-accent hover:shadow-md transition-all duration-300 group overflow-hidden bg-card">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-secondary group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
