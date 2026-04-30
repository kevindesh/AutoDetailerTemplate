import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Car, Sparkles, Shield, Droplets, Brush } from "lucide-react";

const services = [
  {
    id: "silver",
    icon: Car,
    title: "Silver Package",
    tagline: "Essential care for your vehicle",
    description:
      "A complete refresh inside and out. Includes interior vacuuming, surface cleaning, and a thorough exterior wash.",
    includes: [
      "Complete interior vacuum",
      "Clean door panels, console, cup holders, dashboard, vents",
      "Door jambs & interior windows",
      "Exterior hand wash & dry",
      "Rim & wheel well cleaning",
      "Tire dressing/shine",
    ],
    result: "A clean and refreshed vehicle ready for the road.",
    price: "From $100",
    time: "1-2 hours",
  },
  {
    id: "gold",
    icon: Sparkles,
    title: "Gold Package",
    tagline: "Enhanced cleaning and protection",
    description:
      "Take your detail to the next level with shampooing, leather dressing, and an exterior hand polish for extra shine.",
    includes: [
      "Everything in Silver Package",
      "Leather/vinyl dressing",
      "Shampoo carpets, mats & seats",
      "Headliner cleaning",
      "Exterior hand polish",
    ],
    result: "A deeply cleaned interior and a glowing exterior.",
    price: "From $150",
    time: "2-4 hours",
  },
  {
    id: "diamond",
    icon: Shield,
    title: "Diamond Package",
    tagline: "The ultimate premium experience",
    description:
      "Our most comprehensive package. Includes paint correction steps, ceramic wax, and intense interior revitalization.",
    includes: [
      "Everything in Gold Package",
      "Interior deodorizing/steaming",
      "Exterior claybar treatment",
      "High-speed buff/polish",
      "Ceramic wax application",
      "Engine bay shampoo/dressing",
    ],
    result: "Showroom-quality finish and long-lasting protection.",
    price: "From $250",
    time: "4-6 hours",
  },
];

const standaloneServices = [
  "Paint Correction (Full Multi-Stage)",
  "Complete Interior Only",
  "Exterior Hand Wash & Windows",
  "Engine Bay Shampoo & Dressing",
  "Dog Hair Removal",
  "Headlamp Restoration",
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
            From comprehensive detailing packages to specific individual services, we have the right option for your car and your budget.
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

      {/* Standalone Services Section */}
      <section className="section-padding bg-secondary">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold mb-6">Individual & Standalone Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
            Need something specific? We offer specialized individual services that can be booked on their own or combined for a customized detail.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
            {standaloneServices.map((service, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-soft font-semibold text-foreground border border-border/50">
                {service}
              </div>
            ))}
          </div>
          <Button variant="accent" size="lg" asChild>
            <Link to="/pricing">View Pricing Options</Link>
          </Button>
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
