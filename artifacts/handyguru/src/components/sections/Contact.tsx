import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useSubmitContact } from "@workspace/api-client-react"
import { CheckCircle2, Loader2, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent } from "@/components/ui/card"

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required").optional().or(z.literal("")),
  serviceType: z.string().min(1, "Please select a service type"),
  jobSize: z.string().min(1, "Please select a job size"),
  preferredContact: z.enum(["phone", "email"]),
  message: z.string().min(10, "Please briefly describe the issue or project"),
})

type ContactFormValues = z.infer<typeof contactSchema>

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const submitMutation = useSubmitContact()

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      serviceType: "",
      jobSize: "",
      preferredContact: "phone",
      message: "",
    },
  })

  function onSubmit(data: ContactFormValues) {
    submitMutation.mutate(
      { data },
      {
        onSuccess: () => {
          setIsSubmitted(true)
          form.reset()
        },
      }
    )
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
              Let's get it fixed.
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Fill out the form with a few details about your project. We'll review it and reach out within 24 hours to schedule your service.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
                  <span className="font-bold text-lg">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-primary mb-1">Tell us what's broken</h4>
                  <p className="text-muted-foreground">Or what needs installing, assembling, or maintaining.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
                  <span className="font-bold text-lg">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-primary mb-1">We lock in a time</h4>
                  <p className="text-muted-foreground">No vague 4-hour windows. We give you a hard arrival time.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary shrink-0">
                  <span className="font-bold text-lg">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-primary mb-1">We knock it out</h4>
                  <p className="text-muted-foreground">Fast, professional, and clean. Your punch-list, gone.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Card className="shadow-xl border-border/50 bg-card overflow-hidden">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center h-[500px]">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-primary mb-4">Request Received!</h3>
                    <p className="text-lg text-muted-foreground max-w-sm">
                      We've got your details. We'll be in touch shortly via your preferred contact method to confirm scheduling.
                    </p>
                    <Button 
                      className="mt-8 bg-primary text-white" 
                      onClick={() => setIsSubmitted(false)}
                    >
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="(555) 123-4567" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address (Optional)</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="serviceType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Service Type</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a service" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="General Repairs">General Repairs</SelectItem>
                                  <SelectItem value="Mounting & Installation">Mounting & Installation</SelectItem>
                                  <SelectItem value="Furniture Assembly">Furniture Assembly</SelectItem>
                                  <SelectItem value="Drywall & Painting">Drywall & Painting</SelectItem>
                                  <SelectItem value="Fixture Replacement">Fixture Replacement</SelectItem>
                                  <SelectItem value="Property Maintenance">Property Maintenance</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="jobSize"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Job Size</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select job size" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="small">Small (1-2 hours)</SelectItem>
                                  <SelectItem value="medium">Medium (Half Day)</SelectItem>
                                  <SelectItem value="large">Large (Full Day+)</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="preferredContact"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel>Preferred Contact Method</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-row space-x-4"
                              >
                                <FormItem className="flex items-center space-x-2 space-y-0 cursor-pointer">
                                  <FormControl>
                                    <RadioGroupItem value="phone" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer text-base">Phone Call</FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-2 space-y-0 cursor-pointer">
                                  <FormControl>
                                    <RadioGroupItem value="email" />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer text-base">Email</FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Details</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Describe what you need help with. E.g. 'I need two TVs mounted and a bathroom faucet replaced.'"
                                className="resize-none min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full h-14 text-lg bg-accent text-primary hover:bg-accent/90"
                        disabled={submitMutation.isPending}
                      >
                        {submitMutation.isPending ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Sending Request...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Request Service
                          </>
                        )}
                      </Button>
                      
                      {submitMutation.isError && (
                        <p className="text-destructive text-sm text-center font-bold">
                          There was an error submitting your request. Please try again.
                        </p>
                      )}
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
