import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Check, Sparkles, Clock, Shield, ThumbsUp, Droplets } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

// Hero Section
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="section-container py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Professional Auto Detailing & Steaming That Brings Your Car{" "}
              <span className="text-accent">Back to Life</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              We provide reliable, high-quality car detailing and steam cleaning that leaves your vehicle clean, protected, and refreshed. No gimmicks, no upsells—just professional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/pricing">View Packages</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img
                src={heroImage}
                alt="Professional car detailing - clean shiny vehicle"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Trust Section
const trustPoints = [
  { icon: Sparkles, text: "Professional results" },
  { icon: ThumbsUp, text: "Honest pricing" },
  { icon: Shield, text: "High-Quality Service", className: "hidden md:flex" },
  { icon: Droplets, text: "Mobile-friendly booking", className: "col-span-2 md:w-auto" },
];

function TrustSection() {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid grid-cols-2 gap-8 md:flex md:flex-wrap md:justify-center md:gap-8 lg:gap-16">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center md:flex-row md:text-left gap-3 text-muted-foreground ${point.className || ""}`}
            >
              <point.icon className="w-6 h-6 md:w-5 md:h-5 text-accent" />
              <span className="font-medium">{point.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Services Overview
const services = [
  {
    title: "Interior Detailing",
    description: "Deep clean your cabin for a fresh, comfortable ride.",
  },
  {
    title: "Exterior Detailing",
    description: "Restore your paint's shine and protect it from the elements.",
  },
  {
    title: "Full Detail Packages",
    description: "Complete inside and out refresh for maximum impact.",
  },
  {
    title: "Maintenance Washes",
    description: "Regular care to keep your car looking its best.",
  },
  {
    title: "Interior Steaming",
    description: "Deep steam cleaning to sanitize and remove stubborn stains.",
  },
  {
    title: "Paint Protection",
    description: "Long-lasting protection against scratches and UV damage.",
  },
];

function ServicesSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything your car needs to look and feel brand new.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow"
            >
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button variant="accent" size="lg" asChild>
            <Link to="/services">See All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

// How It Works
const steps = [
  {
    number: "1",
    title: "Choose Your Service",
    description: "Pick the package that fits your needs and budget.",
  },
  {
    number: "2",
    title: "We Detail Your Vehicle",
    description: "Our team works their magic with premium products.",
  },
  {
    number: "3",
    title: "Drive Away Clean",
    description: "Enjoy your refreshed, protected vehicle.",
  },
];

function HowItWorksSection() {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground">Simple process, professional results.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Preview
const packages = [
  {
    name: "Starter Detail",
    price: "$79",
    features: ["Exterior wash", "Interior vacuum", "Quick wipe-down"],
  },
  {
    name: "Standard Detail",
    price: "$149",
    popular: true,
    features: ["Full interior clean", "Exterior wash & wax", "Tire & wheel cleaning"],
  },
  {
    name: "Premium Detail",
    price: "$249",
    features: ["Deep interior detailing", "Paint protection", "Full inside & out refresh"],
  },
];

function PricingPreviewSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            No hidden fees. No surprises. Just honest pricing for quality work.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-xl p-6 shadow-soft ${
                pkg.popular ? "ring-2 ring-accent shadow-accent" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="font-semibold text-lg mb-2">{pkg.name}</h3>
              <div className="text-3xl font-bold mb-4">
                {pkg.price}
                <span className="text-sm font-normal text-muted-foreground">+</span>
              </div>
              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant={pkg.popular ? "accent" : "outline"}
                className="w-full"
                asChild
              >
                <Link to="/contact">Book Now</Link>
              </Button>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/pricing" className="text-accent hover:underline font-medium">
            View full pricing details →
          </Link>
        </div>
      </div>
    </section>
  );
}

// Final CTA
function FinalCTASection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="section-container text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready for a Cleaner Car?
        </h2>
        <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
          Book your detail today. Clean car. Zero hassle.
        </p>
        <Button variant="accent" size="xl" asChild>
          <Link to="/contact">Get Your Free Quote</Link>
        </Button>
      </div>
    </section>
  );
}

// Main Index Page
export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <HowItWorksSection />
      <PricingPreviewSection />
      <FinalCTASection />
    </Layout>
  );
}
