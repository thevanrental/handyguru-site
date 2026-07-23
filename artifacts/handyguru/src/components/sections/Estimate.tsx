import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calculator, ArrowRight } from "lucide-react"

const serviceOptions = [
  "General Repairs",
  "Mounting & Installation",
  "Furniture Assembly",
  "Drywall & Painting",
  "Fixture Replacement",
  "Property Maintenance"
]

const sizeOptions = [
  { id: "small", label: "Small (1-2 hrs)", desc: "Quick fixes, single items" },
  { id: "medium", label: "Medium (Half Day)", desc: "Multiple items, moderate repairs" },
  { id: "large", label: "Large (Full Day+)", desc: "Room updates, extensive lists" },
]

const pricingRanges: Record<string, Record<string, string>> = {
  "General Repairs": { small: "$85 – $150", medium: "$180 – $350", large: "$400 – $750+" },
  "Mounting & Installation": { small: "$95 – $125", medium: "$150 – $275", large: "$350 – $600+" },
  "Furniture Assembly": { small: "$75 – $120", medium: "$160 – $250", large: "$300 – $500+" },
  "Drywall & Painting": { small: "$150 – $250", medium: "$300 – $550", large: "Custom Quote" },
  "Fixture Replacement": { small: "$95 – $160", medium: "$200 – $350", large: "$450 – $800+" },
  "Property Maintenance": { small: "$150/mo", medium: "$300/mo", large: "Custom Quote" },
}

export function Estimate() {
  const [serviceType, setServiceType] = useState<string>("General Repairs")
  const [jobSize, setJobSize] = useState<string>("small")

  const estimate = pricingRanges[serviceType]?.[jobSize] || "Custom Quote"

  return (
    <section id="estimate" className="py-24 bg-primary text-primary-foreground relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 text-accent mb-6">
            <Calculator size={32} />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Instant Estimate Calculator
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Select your service and job size to get a rough idea of what to expect. No hidden fees.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-none shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <CardContent className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-border">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <Label className="text-lg font-bold text-primary block">1. What do you need help with?</Label>
                    <RadioGroup 
                      value={serviceType} 
                      onValueChange={setServiceType}
                      className="grid grid-cols-1 gap-3"
                    >
                      {serviceOptions.map((s) => (
                        <div key={s} className="flex items-center space-x-3 bg-muted/30 p-3 rounded-lg border border-transparent hover:border-primary/20 transition-colors">
                          <RadioGroupItem value={s} id={s} className="text-primary border-primary" />
                          <Label htmlFor={s} className="flex-1 cursor-pointer font-medium text-base">{s}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-lg font-bold text-primary block">2. How big is the job?</Label>
                    <RadioGroup 
                      value={jobSize} 
                      onValueChange={setJobSize}
                      className="grid grid-cols-1 gap-3"
                    >
                      {sizeOptions.map((sz) => (
                        <div key={sz.id} className="flex items-start space-x-3 bg-muted/30 p-3 rounded-lg border border-transparent hover:border-primary/20 transition-colors">
                          <RadioGroupItem value={sz.id} id={sz.id} className="mt-1 text-primary border-primary" />
                          <Label htmlFor={sz.id} className="flex-1 cursor-pointer">
                            <span className="block font-bold text-base text-primary mb-1">{sz.label}</span>
                            <span className="block text-sm text-muted-foreground font-normal">{sz.desc}</span>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              </CardContent>
              
              <div className="bg-muted/10 p-8 md:p-10 flex flex-col items-center justify-center text-center">
                <p className="font-bold text-muted-foreground uppercase tracking-widest text-sm mb-4">Estimated Range</p>
                <div className="text-5xl md:text-6xl font-heading font-black text-primary mb-2 tracking-tight">
                  {estimate}
                </div>
                <p className="text-muted-foreground mb-10 max-w-[250px]">
                  *This is a rough estimate. Final price depends on specific materials and site conditions.
                </p>
                
                <Button size="lg" className="w-full bg-accent text-primary hover:bg-accent/90 text-lg h-14" asChild>
                  <a href="#contact">
                    Book This Service <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
