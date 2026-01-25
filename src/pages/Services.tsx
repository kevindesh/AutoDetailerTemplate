import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Car, Sparkles, Shield, Droplets, Brush } from "lucide-react";

const services = [
  {
    id: "interior",
    icon: Sparkles,
    title: "Interior Detailing",
    tagline: "A fresh, clean cabin you'll love",
    description:
      "Perfect for daily drivers who want a fresh, clean interior. We deep clean every surface so your car feels comfortable and inviting again.",
    includes: [
      "Complete vacuuming of seats, carpets, and mats",
      "Dashboard, console, and door panel wipe-down",
      "Window and mirror cleaning",
      "Air vent dusting",
      "Door jamb cleaning",
      "Light stain removal",
    ],
    result: "Step into a cabin that looks and smells like new.",
    price: "From $89",
    time: "1-2 hours",
  },
  {
    id: "exterior",
    icon: Droplets,
    title: "Exterior Detailing",
    tagline: "Restore your car's showroom shine",
    description:
      "Bring back that deep, glossy finish. We carefully wash, clay, and protect your paint so it looks stunning and stays protected.",
    includes: [
      "Hand wash with premium soap",
      "Clay bar treatment",
      "Paint polish and wax",
      "Tire and wheel cleaning",
      "Trim restoration",
      "Window cleaning",
    ],
    result: "A head-turning shine that lasts for weeks.",
    price: "From $99",
    time: "2-3 hours",
  },
  {
    id: "full",
    icon: Car,
    title: "Full Detail Package",
    tagline: "The complete transformation",
    description:
      "Our most popular service. Get the best of both worlds with a comprehensive interior and exterior detail that refreshes your entire vehicle.",
    includes: [
      "Everything in Interior Detailing",
      "Everything in Exterior Detailing",
      "Engine bay cleaning",
      "Leather conditioning (if applicable)",
      "Odor elimination",
      "Final inspection and touch-ups",
    ],
    result: "Your car, completely refreshed inside and out.",
    price: "From $199",
    time: "4-5 hours",
  },
  {
    id: "maintenance",
    icon: Brush,
    title: "Maintenance Wash",
    tagline: "Keep your car looking great between details",
    description:
      "Quick and affordable regular care to maintain your vehicle's appearance. Perfect for busy people who want consistent cleanliness.",
    includes: [
      "Exterior hand wash",
      "Interior quick vacuum",
      "Dashboard wipe-down",
      "Window cleaning",
      "Tire dressing",
    ],
    result: "A consistently clean car without the full detail price.",
    price: "From $49",
    time: "45 minutes",
  },
  {
    id: "steaming",
    icon: Droplets,
    title: "Eco Steam Cleaning",
    tagline: "Deep sanitize with the power of steam",
    description:
      "Our chemical-free steam cleaning penetrates pores in upholstery and hard surfaces, killing bacteria and removing stubborn stains without harsh chemicals.",
    includes: [
      "Steam cleaning of seats and carpets",
      "Sterilization of vents and cup holders",
      "Stain removal",
      "Odor elimination",
      "Chemical-free cleaning",
    ],
    result: "A sanitized, fresh environment safe for kids and pets.",
    price: "From $129",
    time: "2-3 hours",
  },
  {
    id: "protection",
    icon: Shield,
    title: "Paint Protection & Wax",
    tagline: "Long-lasting defense for your paint",
    description:
      "Protect your investment with premium sealants and waxes that guard against UV rays, road grime, and minor scratches.",
    includes: [
      "Paint decontamination",
      "Clay bar treatment",
      "Paint correction (minor)",
      "Premium sealant application",
      "Carnauba wax finish",
      "6-month protection guarantee",
    ],
    result: "Peace of mind knowing your paint is protected.",
    price: "From $149",
    time: "3-4 hours",
  },
];

function ServiceCard({
  service,
}: {
  service: (typeof services)[0];
}) {
  const Icon = service.icon;

  return (
    <div id={service.id} className="bg-card rounded-2xl p-8 shadow-soft scroll-mt-24">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">{service.title}</h2>
          <p className="text-accent font-medium">{service.tagline}</p>
        </div>
      </div>

      <p className="text-muted-foreground mb-6 leading-relaxed">
        {service.description}
      </p>

      <div className="mb-6">
        <h3 className="font-semibold mb-3">What's Included:</h3>
        <ul className="grid sm:grid-cols-2 gap-2">
          {service.includes.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-accent mt-1">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-secondary rounded-xl p-4 mb-6">
        <p className="text-sm text-muted-foreground mb-1">Result:</p>
        <p className="font-medium">{service.result}</p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-6">
          <div>
            <p className="text-sm text-muted-foreground">Starting at</p>
            <p className="text-2xl font-bold">{service.price}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Duration</p>
            <p className="font-semibold">{service.time}</p>
          </div>
        </div>
        <Button variant="accent" asChild>
          <Link to="/contact">Book This Service</Link>
        </Button>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From quick maintenance washes to complete transformations, we have the right service for your car and your budget.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="space-y-8 max-w-4xl mx-auto">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
            Contact us and we'll help you choose the right package for your vehicle.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
