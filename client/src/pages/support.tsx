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
import { useRef, useState, useEffect } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";

const GAS_URL =
  "https://script.google.com/macros/s/AKfycbzy5DMlThFlcnLCjWWoy_gis0BHB_pugxpH4GvOycRvWWG1bbLICQqC2PvSJ2jFJ0KIdQ/exec";

const AGENTS = ["Sales", "TechSupport", "RMA", "Other"];

const formSchema = z.object({
  email: z.string().email(),
  phone: z.string().min(8),
  subject: z.string().min(1),
  product: z.string().optional(),
  message: z.string().min(10),
  website: z.string().optional()
});

type Ticket = {
  ticket: string;
  email: string;
  subject: string;
  product: string;
  message: string;
  status: string;
  assignedTo?: string;
};

export default function Support() {
  const { toast } = useToast();
  const loadTime = useRef(Date.now());

  const [view, setView] = useState<"support" | "login" | "admin">("support");
  const [isLogin, setIsLogin] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [search, setSearch] = useState("");

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

  const fetchTickets = async () => {
    try {
      const res = await fetch(GAS_URL);
      const data = await res.json();
      setTickets(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (view === "admin" && isLogin) fetchTickets();
  }, [view, isLogin]);

  // LOGIN SIMPLE
  const handleLogin = () => {
    if (username === "thenet" && password === "thenet") {
      setIsLogin(true);
      setView("admin");
    } else {
      toast({
        title: "Login gagal",
        description: "Username / password salah",
        variant: "destructive"
      });
    }
  };

  // CLOSE TICKET
  const closeTicket = async (ticketId: string) => {
    await fetch(GAS_URL, {
      method: "POST",
      body: new URLSearchParams({
        action: "close",
        ticket: ticketId
      })
    });

    fetchTickets();
  };

  // ASSIGN TICKET
  const assignTicket = async (ticketId: string, name: string) => {
    await fetch(GAS_URL, {
      method: "POST",
      body: new URLSearchParams({
        action: "assign",
        ticket: ticketId,
        assignedTo: name
      })
    });

    fetchTickets();
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (values.website) return;

    if (Date.now() - loadTime.current < 3000) {
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

      const data = await response.json();

      if (data.status === "success") {
        toast({
          title: "Ticket Created",
          description: `Your Ticket ID: ${data.ticketId}`
        });

        form.reset();
        loadTime.current = Date.now();
      } else {
        throw new Error();
      }
    } catch {
      toast({
        title: "Error",
        description: "Failed to send message",
        variant: "destructive"
      });
    }
  };

  const filtered = tickets.filter(
    (t) =>
      t.email?.toLowerCase().includes(search.toLowerCase()) ||
      t.subject?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <div className="container mx-auto py-16 px-4">

        {/* TOGGLE */}
        <div className="flex gap-3 mb-8 justify-center">
          <Button onClick={() => setView("support")}>Support</Button>
          <Button variant="outline" onClick={() => setView("login")}>
            Admin Dashboard
          </Button>
        </div>

        {/* LOGIN */}
        {view === "login" && (
          <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 p-6 rounded-xl shadow border">
            <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <Input type="password" placeholder="Password" className="mt-3" onChange={(e) => setPassword(e.target.value)} />
            <Button className="mt-4 w-full" onClick={handleLogin}>
              Login
            </Button>
          </div>
        )}

        {/* SUPPORT */}
        {view === "support" && (
          <>
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Contact Support
              </h1>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Need help? Our team is ready to assist you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">

              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Enter your email" />
                        </FormControl>
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="phone" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="+62"/>
                        </FormControl>
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="subject" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Subject" />
                          </SelectTrigger>
                          <SelectContent className="bg-white dark:bg-gray-900 border shadow-lg rounded-md">
                            <SelectItem value="Sales">Sales</SelectItem>
                            <SelectItem value="Technical Support">Technical Support</SelectItem>
                            <SelectItem value="RMA">RMA</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="product" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Product</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Product" />
                          </SelectTrigger>
                          <SelectContent className="bg-white dark:bg-gray-900 border shadow-lg rounded-md">
                            <SelectItem value="Cloud Gateways">Cloud Gateways</SelectItem>
                            <SelectItem value="Switching">Switching</SelectItem>
                            <SelectItem value="WiFi">WiFi</SelectItem>
                            <SelectItem value="Camera Security">Camera Security</SelectItem>
                            <SelectItem value="Door Access">Door Access</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="message" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea {...field} placeholder="Enter your message here..." />
                        </FormControl>
                      </FormItem>
                    )} />

                    <input type="hidden" {...form.register("website")} />

                    <Button className="w-full">Submit Request</Button>

                  </form>
                </Form>
              </div>

              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border">
                  <h2 className="text-xl font-semibold mb-4">FAQ</h2>
                  <Accordion type="single" collapsible className="space-y-2">

  <AccordionItem value="1">
    <AccordionTrigger>Response time?</AccordionTrigger>
    <AccordionContent>24 hours</AccordionContent>
  </AccordionItem>

  <AccordionItem value="2">
    <AccordionTrigger>How to track my ticket?</AccordionTrigger>
    <AccordionContent>You will receive updates via email</AccordionContent>
  </AccordionItem>

  <AccordionItem value="3">
    <AccordionTrigger>Do you provide on-site support?</AccordionTrigger>
    <AccordionContent>Yes, depends on the case</AccordionContent>
  </AccordionItem>

  <AccordionItem value="4">
    <AccordionTrigger>What products are supported?</AccordionTrigger>
    <AccordionContent>Cloud Gateways, WiFi, Switching, CCTV, Door Access</AccordionContent>
  </AccordionItem>

  <AccordionItem value="5">
    <AccordionTrigger>Is support free?</AccordionTrigger>
    <AccordionContent>Yes for existing customers</AccordionContent>
  </AccordionItem>

</Accordion>
                </div>
              </div>

            </div>
          </>
        )}

       {/* ADMIN */}
       
        {view === "admin" && isLogin && (
          <div>

            <div className="flex gap-3 mb-6">
              <Input
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button onClick={fetchTickets}>Refresh</Button>
            </div>

            <table className="w-full border">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="p-3">Ticket</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Subject</th>
                  <th className="p-3">Message</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Assigned</th>
                 
                </tr>
              </thead>

              <tbody>
                {filtered.map((t, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-3">{t.ticket}</td>
                    <td className="p-3">{t.email}</td>
                    <td className="p-3">{t.subject}</td>
                    <td className="p-3">{t.message}</td>

                    <td className="p-3">
                      <span className={
                        t.status === "OPEN"
                          ? "text-red-500 font-semibold"
                          : "text-green-500 font-semibold"
                      }>
                        {t.status}
                      </span>
                    </td>

                    {/* ASSIGNED */}
                    <td className="p-3 ">
                      {t.status === "OPEN" && (
                        <Select onValueChange={(value) => assignTicket(t.ticket, value)}>
                          <SelectTrigger className="w-[140px] ">
                            
                            <SelectValue placeholder="Assign " />
                          </SelectTrigger>
                          <SelectContent className="bg-white dark:bg-gray-900 border shadow-lg rounded-md">
                            {AGENTS.map((a) => (
                              <SelectItem key={a} value={a}>
                                {a}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )} 

      </div>
    </Layout>
  );
}