import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useRef } from "react";

const GAS_URL =
  "https://script.google.com/macros/s/AKfycbyraLF9OjCFAe-Rk8h5XPaPg23XQEm10TLdCTig5YMtvW8ni6GkkAXC_SGqDn1-Qi1PEw/exec";

const formSchema = z.object({
  email: z.string().email(),
  phone: z.string().min(8),
  subject: z.string().min(1),
  product: z.string().optional(),
  message: z.string().min(10),
  website: z.string().optional()
});

export default function Support() {
  const { toast } = useToast();
  const loadTime = useRef(Date.now());

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phone: "",
      subject: "",
      product: "",
      message: "",
      website: ""
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Honeypot check
    if (values.website) return;

    // Time-based spam check (minimum 3 seconds)
    const elapsed = Date.now() - loadTime.current;
    if (elapsed < 3000) {
      toast({
        title: "Please wait",
        description: "Please wait a moment before submitting.",
        variant: "destructive"
      });
      return;
    }

    try {
      const formData = new URLSearchParams();
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("subject", values.subject);
      formData.append("product", values.product ?? "");
      formData.append("message", values.message);

      const response = await fetch(GAS_URL, {
        method: "POST",
        body: formData
      });

      const text = await response.text();
      const data = JSON.parse(text);

      if (data.status === "success") {
        toast({
          title: "Ticket Created",
          description: `Your Ticket ID: ${data.ticketId}`
        });
        form.reset();
        loadTime.current = Date.now();
      } else {
        throw new Error(data.message || "Unknown error");
      }
    } catch {
      toast({
        title: "Error",
        description: "Failed to send message",
        variant: "destructive"
      });
    }
  };

  return (
    <Layout>
      <div className="container mx-auto max-w-xl py-16">
        <h1 className="text-3xl font-bold mb-10">Contact Support</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="product"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Honeypot - hidden from real users */}
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              style={{ display: "none" }}
              {...form.register("website")}
            />

            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="w-full"
            >
              {form.formState.isSubmitting ? "Sending..." : "Submit Request"}
            </Button>

          </form>
        </Form>
      </div>
    </Layout>
  );
}
