import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const services = [
  { name: "Income Tax & ITR Filing", href: "/services/income-tax" },
  { name: "GST & Indirect Tax", href: "/services/gst" },
  { name: "Audit & Assurance", href: "/services/audit" },
  { name: "Accounting & Bookkeeping", href: "/services/accounting" },
  { name: "Business Registration", href: "/services/registration" },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/team" },
  { name: "Blog & Resources", href: "/blog" },
  { name: "FAQs", href: "/faqs" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "/contact" },
];

const legal = [
  { name: "Legal Disclaimer", href: "/legal" },
  { name: "Privacy Policy", href: "/legal#privacy" },
  { name: "Terms of Service", href: "/legal#terms" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Firm Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center">
                  <span className="text-accent-foreground font-heading font-bold">YPS</span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-lg leading-tight">
                    Yagya Prakash Sharda & Co.
                  </p>
                  <p className="text-xs opacity-80">Chartered Accountants</p>
                </div>
              </div>
              <p className="text-sm opacity-80 leading-relaxed">
                A professionally managed Chartered Accountancy firm providing comprehensive 
                financial and compliance services with integrity and excellence.
              </p>
            </div>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <span className="opacity-80">123 Business District, Sector 18, Noida, UP - 201301</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href="tel:+919876543210" className="opacity-80 hover:opacity-100 transition-opacity">
                  +91 98765 43210
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href="mailto:info@ypsca.com" className="opacity-80 hover:opacity-100 transition-opacity">
                  info@ypsca.com
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-accent" />
                <span className="opacity-80">Mon - Sat: 10:00 AM - 7:00 PM</span>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Registration */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Legal</h3>
            <ul className="space-y-3 mb-8">
              {legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="p-4 bg-primary-foreground/10 rounded-md">
              <p className="text-xs font-medium mb-2">Firm Registration</p>
              <p className="text-xs opacity-80">FRN: 123456N</p>
              <p className="text-xs opacity-80">ICAI Registered</p>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-primary-foreground/20">
        <div className="container py-6">
          <div className="bg-primary-foreground/5 rounded-md p-4 mb-6">
            <p className="text-xs opacity-80 leading-relaxed">
              <strong>Disclaimer:</strong> The information contained on this website is for general guidance 
              and informational purposes only. It does not constitute professional advice. The contents 
              should not be relied upon as a substitute for specific professional guidance. Before making 
              any decisions or taking any action, you should consult with qualified professionals. 
              Yagya Prakash Sharda & Co. shall not be liable for any loss or damage arising from reliance 
              on the information provided on this website. This website is published in compliance with 
              the guidelines issued by the Institute of Chartered Accountants of India (ICAI).
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs opacity-80">
            <p>© {new Date().getFullYear()} Yagya Prakash Sharda & Co. All rights reserved.</p>
            <p>Website in compliance with ICAI Advisory on Website Guidelines</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
