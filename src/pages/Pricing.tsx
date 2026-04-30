import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Silver Package",
    description: "Essential care for your vehicle's interior and exterior",
    price: "$100",
    prices: { sedan: "$100", suv: "$120", truck: "$140" },
    features: [
      "Complete interior vacuum",
      "Clean door panels, console, cup holders, dashboard, vents",
      "Door jambs & interior windows",
      "Exterior hand wash & dry",
      "Rim & wheel well cleaning",
      "Tire dressing/shine",
    ],
    cta: "Book Silver",
  },
  {
    name: "Gold Package",
    description: "Enhanced cleaning with polish and shampoo",
    price: "$150",
    prices: { sedan: "$150", suv: "$170", truck: "$190" },
    features: [
      "Everything in Silver",
      "Leather/vinyl dressing",
      "Shampoo carpets, mats & seats",
      "Headliner cleaning",
      "Exterior hand polish",
    ],
    cta: "Book Gold",
  },
  {
    name: "Diamond Package",
    description: "The ultimate premium detailing experience",
    price: "$250",
    prices: { sedan: "$250", suv: "$300", truck: "$350" },
    popular: true,
    features: [
      "Everything in Gold",
      "Interior deodorizing/steaming",
      "Exterior claybar treatment",
      "High-speed buff/polish",
      "Ceramic wax application",
      "Engine bay shampoo/dressing",
    ],
    cta: "Book Diamond",
  },
];

const addOns = [
  { name: "Paint Correction (Full Multi-Stage)", price: "$350" },
  { name: "Complete Interior Only", price: "$100" },
  { name: "Exterior Hand Wash & Windows", price: "$80" },
  { name: "Engine Bay Shampoo & Dressing", price: "$60" },
  { name: "Dog Hair Removal", price: "$60" },
  { name: "Headlamp Restoration", price: "$50" },
];

export default function Pricing() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="section-container text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            No hidden fees. No surprises. Choose the package that fits your needs and budget.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-2xl p-8 shadow-soft flex flex-col ${
                  pkg.popular ? "ring-2 ring-accent shadow-accent" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-sm font-semibold px-4 py-1.5 rounded-full">
                    Premium Option
                  </div>
                )}

                <div className="mb-6">
                  <h2 className="text-xl font-bold mb-1">{pkg.name}</h2>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </div>

                <div className="mb-6 border-b pb-4">
                  <div className="text-sm text-muted-foreground mb-2">Starting at</div>
                  <div className="text-4xl font-bold mb-4">
                    {pkg.price}
                    <span className="text-lg font-normal text-muted-foreground">+</span>
                  </div>
                  <div className="space-y-1.5 flex flex-col pt-2 border-t">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Sedan:</span>
                      <span className="font-medium text-foreground">{pkg.prices.sedan}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">SUV:</span>
                      <span className="font-medium text-foreground">{pkg.prices.suv}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Van/Truck:</span>
                      <span className="font-medium text-foreground">{pkg.prices.truck}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={pkg.popular ? "accent" : "outline"}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <Link to="/contact">{pkg.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-padding bg-secondary">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Individual & Standalone Services</h2>
            <p className="text-muted-foreground">
              Book these specialized services on their own or combine them for a customized detail.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-card rounded-xl p-4 shadow-soft"
              >
                <span className="font-medium">{addon.name}</span>
                <span className="text-accent font-semibold">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ-style note */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-3xl">
          <div className="bg-secondary rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">A Few Things to Know</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                Prices may vary based on vehicle size and condition.
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                We use only premium, eco-friendly products.
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                All services include a satisfaction guarantee.
              </li>
              <li className="flex gap-3">
                <span className="text-accent">•</span>
                Fleet and recurring service discounts available.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
            Book your detail today and experience the King Judah difference.
          </p>
          <Button variant="accent" size="xl" asChild>
            <Link to="/contact">Book Now</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
