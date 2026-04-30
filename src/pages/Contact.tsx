import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(647) 562-8211",
    href: "tel:+16475628211",
  },
  {
    icon: Mail,
    label: "Email",
    value: "onesydee@gmail.com",
    href: "mailto:onesydee@gmail.com",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Scarborough and London",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Fri: 10am-8pm, Sat-Sun: 9am-5pm",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    carType: "",
    package: "",
    message: "",
  });

  // Replace this with your actual Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxZIB2FIyZICcDll6KxcNuCS1lTmKo3wLvkSHaGuAp-pU4dmYG8xhqtyLE8Wq_EM_en/exec";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scriptURL = "https://script.google.com/macros/s/AKfycbxZIB2FIyZICcDll6KxcNuCS1lTmKo3wLvkSHaGuAp-pU4dmYG8xhqtyLE8Wq_EM_en/exec";
    
    try {
      // Send the data as a stringified JSON object to match your Apps Script
      await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formData),
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      });

      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        vehicle: "",
        carType: "",
        package: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error submitting form",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to book a detail or have questions? Send us a message and we'll get back to you quickly.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <h2 className="text-2xl font-bold mb-6">Request a Free Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(647) 562-8211"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vehicle">Vehicle (Year, Make, Model)</Label>
                    <Input
                      id="vehicle"
                      name="vehicle"
                      value={formData.vehicle}
                      onChange={handleChange}
                      placeholder="e.g. 2022 Honda Civic"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="carType">Vehicle Type</Label>
                      <select
                        id="carType"
                        name="carType"
                        value={formData.carType}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select vehicle type...</option>
                        <option value="Sedan">Sedan</option>
                        <option value="SUV">SUV</option>
                        <option value="Van/Truck">Van/Truck</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="package">Package / Service</Label>
                      <select
                        id="package"
                        name="package"
                        value={formData.package}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select a package...</option>
                        <option value="Silver Package">Silver Package</option>
                        <option value="Gold Package">Gold Package</option>
                        <option value="Diamond Package">Diamond Package</option>
                        <option value="Standalone Service">Other / Standalone Service</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your car and what service you're interested in..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We typically respond within 24 hours.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-medium hover:text-accent transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-secondary rounded-xl p-6">
                <h3 className="font-semibold mb-3">Quick Response Guarantee</h3>
                <p className="text-sm text-muted-foreground">
                  We know your time is valuable. When you reach out, expect a friendly response within 24 hours—usually much sooner.
                </p>
              </div>

              <div className="bg-secondary rounded-xl p-6">
                <h3 className="font-semibold mb-3">Prefer to Call?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Give us a ring and we'll help you book the right service for your vehicle.
                </p>
                <a
                  href="tel:+16475628211"
                  className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  (647) 562-8211
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
