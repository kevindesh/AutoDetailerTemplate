import { Link } from "react-router-dom";

const navigation = {
  services: [
    { name: "Interior Detailing", href: "/services#interior" },
    { name: "Exterior Detailing", href: "/services#exterior" },
    { name: "Full Detail", href: "/services#full" },
    { name: "Maintenance Wash", href: "/services#maintenance" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">GP</span>
              </div>
              <span className="font-semibold text-lg">GrowthPilot</span>
            </Link>
            <p className="text-primary-foreground/70 max-w-sm text-sm leading-relaxed">
              Professional auto detailing that brings your car back to life. 
              Reliable service, honest pricing, real results.
            </p>
            <div className="mt-6 space-y-1 text-sm text-primary-foreground/70">
              <p>📍 Serving the Greater Toronto Area</p>
              <p>📞 (416) 555-0123</p>
              <p>✉️ hello@growthpilot.ca</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="text-sm text-primary-foreground/50 text-center">
            © {new Date().getFullYear()} GrowthPilot Auto Detailing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
