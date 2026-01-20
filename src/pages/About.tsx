import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Heart, Target, Users, Shield } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Quality First",
    description:
      "We never cut corners. Every detail matters because your car deserves the best care.",
  },
  {
    icon: Target,
    title: "Honest Pricing",
    description:
      "What you see is what you pay. No hidden fees, no surprise upsells, no pressure.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description:
      "We listen to what you need and deliver results that exceed your expectations.",
  },
  {
    icon: Shield,
    title: "Trusted Service",
    description:
      "We treat every vehicle like it's our own—with care, respect, and attention to detail.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Car Care Without the Confusion
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We started GrowthPilot Auto Detailing because we believe getting your car cleaned shouldn't be complicated, expensive, or stressful.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Like a lot of car owners, we got frustrated with confusing packages, hidden fees, and inconsistent results from other detailing services.
                </p>
                <p>
                  We wanted something simple: honest pricing, quality work, and friendly service. When we couldn't find it, we decided to build it ourselves.
                </p>
                <p>
                  Today, GrowthPilot Auto Detailing serves drivers across the Greater Toronto Area who want their cars to look great without the hassle. We're not the cheapest option, but we're the one you can trust.
                </p>
              </div>
            </div>
            <div className="bg-secondary rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">What Makes Us Different</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">1.</span>
                  <span>We show you exactly what you're paying for—before you book.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">2.</span>
                  <span>We use premium products that are safe for your car and the environment.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">3.</span>
                  <span>We communicate clearly and respect your time.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">4.</span>
                  <span>We stand behind our work with a satisfaction guarantee.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Stand For</h2>
            <p className="text-muted-foreground">
              Simple values that guide everything we do.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-soft text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To make professional car detailing accessible, transparent, and hassle-free for everyday drivers who just want their car to look and feel great.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="section-container text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Get Your Car Looking Great</h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
            No pressure, no gimmicks—just quality detailing you can count on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
