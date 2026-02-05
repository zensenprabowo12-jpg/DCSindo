import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { products } from "@/lib/data";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  email: z.string().email(),
  phone: z.string().min(5),
  subject: z.string().min(1),
  product: z.string().optional(),
  message: z.string().min(10),
});

export default function Support() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "question",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Support Request Sent",
      description: "We've received your message and will get back to you shortly.",
    });
    console.log(values);
  }

  return (
    <Layout>
      <div className="bg-secondary/30 border-b border-border py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">DCS Support</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We're here to help. Find answers to common questions or get in touch with our team.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left: Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Contact Us</h2>
          <div className="bg-white border border-border p-8 shadow-sm">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="you@company.com" {...field} className="rounded-none bg-gray-50" />
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
                        <Input placeholder="+1 (555) 000-0000" {...field} className="rounded-none bg-gray-50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-none bg-gray-50">
                              <SelectValue placeholder="Select a topic" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="question">General Question</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                            <SelectItem value="sales">Sales Inquiry</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="product"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Related Product</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="rounded-none bg-gray-50">
                              <SelectValue placeholder="Select product" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="none">None / General</SelectItem>
                            {products.map(p => (
                              <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we help you?" 
                          className="min-h-[150px] rounded-none bg-gray-50 resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full rounded-none h-12 text-lg font-bold">
                  Submit Request
                </Button>
              </form>
            </Form>
          </div>
        </div>

        {/* Right: FAQ & Info */}
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is the warranty period?</AccordionTrigger>
                <AccordionContent>
                  All DCS hardware products come with a standard 2-year warranty covering manufacturing defects.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Do you offer bulk pricing?</AccordionTrigger>
                <AccordionContent>
                  Yes, for enterprise orders exceeding 50 units, please contact our sales team using the form for a custom quote.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How do I reset my device?</AccordionTrigger>
                <AccordionContent>
                  Most DCS devices can be factory reset by holding the reset button for 10 seconds while the device is powered on.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Service Operations</h2>
            <div className="bg-gray-50 p-6 border border-border space-y-4">
              <div>
                <h3 className="font-bold">Office Hours</h3>
                <p className="text-gray-500">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                <p className="text-gray-500">Saturday: 10:00 AM - 2:00 PM EST</p>
              </div>
              <Separator />
              <div>
                <h3 className="font-bold">Technical Support</h3>
                <p className="text-gray-500">Available 24/7 via Email</p>
                <p className="text-gray-500">Phone support during business hours</p>
              </div>
              <Separator />
              <div>
                <h3 className="font-bold">Headquarters</h3>
                <p className="text-gray-500">100 Tech Park Drive</p>
                <p className="text-gray-500">San Jose, CA 95110</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}