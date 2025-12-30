import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const services = [
  { title: "Income Tax & ITR Filing", href: "/services/income-tax" },
  { title: "GST & Indirect Tax", href: "/services/gst" },
  { title: "Audit & Assurance", href: "/services/audit" },
  { title: "Accounting & Bookkeeping", href: "/services/accounting" },
  { title: "Business Registration & Compliance", href: "/services/registration" },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Team", href: "/team" },
  { name: "Blog", href: "/blog" },
  { name: "FAQs", href: "/faqs" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex justify-between items-center py-2 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">+91 98765 43210</span>
            </a>
            <a href="mailto:info@ypsca.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">info@ypsca.com</span>
            </a>
          </div>
          <div className="text-xs opacity-80">
            ICAI Registered Firm
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-sm flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-lg">YPS</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-heading font-semibold text-lg text-primary leading-tight">
              Yagya Prakash Sharda & Co.
            </p>
            <p className="text-xs text-muted-foreground">Chartered Accountants</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item) =>
                item.hasDropdown ? (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger
                      className={cn(
                        "text-sm font-medium transition-colors bg-transparent",
                        isActive(item.href) && "text-accent"
                      )}
                    >
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[280px] gap-1 p-3">
                        <li>
                          <NavigationMenuLink asChild>
                            <Link
                              to="/services"
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent font-medium"
                            >
                              All Services
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        {services.map((service) => (
                          <li key={service.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={service.href}
                                className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent text-sm"
                              >
                                {service.title}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.name}>
                    <Link
                      to={item.href}
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-accent focus:outline-none",
                        isActive(item.href) && "text-accent"
                      )}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="accent" asChild>
            <Link to="/contact">Book Consultation</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <div className="container py-4 space-y-2">
            {navigation.map((item) =>
              item.hasDropdown ? (
                <div key={item.name}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={cn(
                      "flex items-center justify-between w-full py-3 text-left font-medium",
                      isActive(item.href) && "text-accent"
                    )}
                  >
                    {item.name}
                    <ChevronDown className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")} />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 space-y-2 pb-2">
                      <Link
                        to="/services"
                        className="block py-2 text-sm text-muted-foreground hover:text-accent"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        All Services
                      </Link>
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          className="block py-2 text-sm text-muted-foreground hover:text-accent"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block py-3 font-medium",
                    isActive(item.href) && "text-accent"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="pt-4 border-t border-border">
              <Button variant="accent" className="w-full" asChild>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Book Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
