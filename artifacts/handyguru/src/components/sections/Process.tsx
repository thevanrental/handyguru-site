import processBg from "@assets/generated_images/handyman-process.jpg"

const steps = [
  {
    num: "01",
    title: "Get an Estimate",
    description: "Use our interactive tool below to see instant pricing ranges for your specific job size."
  },
  {
    num: "02",
    title: "Schedule the Work",
    description: "Submit the quick form and we'll reach out to lock in a hard time that works for your schedule."
  },
  {
    num: "03",
    title: "Done & Dusted",
    description: "We show up on time, knock out the punch-list, clean up our mess, and leave you with a finished space."
  }
]

export function Process() {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 rounded-3xl"></div>
            <img 
              src={processBg} 
              alt="Handyman installing shelf" 
              className="relative z-10 rounded-3xl w-full h-auto object-cover aspect-[4/5] shadow-xl border-4 border-background"
            />
          </div>

          <div>
            <div className="mb-12">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
                No surprises. Just results.
              </h2>
              <p className="text-lg text-muted-foreground">
                We've simplified the entire process so you can stop stressing about home repairs and start enjoying your home again.
              </p>
            </div>

            <div className="flex flex-col gap-10">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 relative group">
                  {/* Connecting line */}
                  {i !== steps.length - 1 && (
                    <div className="absolute left-7 top-14 bottom-[-40px] w-0.5 bg-border group-hover:bg-accent transition-colors"></div>
                  )}
                  
                  <div className="shrink-0 w-14 h-14 bg-card border-2 border-border text-primary font-heading font-extrabold text-xl rounded-full flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors relative z-10">
                    {step.num}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl font-bold font-heading mb-2 text-primary">{step.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
