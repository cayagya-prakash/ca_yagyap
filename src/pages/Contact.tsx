import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Message Sent", description: "We will get back to you shortly." });
      setLoading(false);
    }, 1000);
  };

  return (
    <Layout>
      <PageHeader title="Contact Us" description="Get in touch with our team for professional assistance." breadcrumbs={[{ label: "Contact" }]} />
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-2xl font-semibold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" required />
                  <Input type="email" placeholder="Email Address" required />
                </div>
                <Input placeholder="Phone Number" />
                <Input placeholder="Subject" required />
                <Textarea placeholder="Your Message" rows={5} required />
                <Button type="submit" variant="accent" disabled={loading}>{loading ? "Sending..." : "Send Message"}</Button>
              </form>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6 mb-8">
                <div className="flex gap-4"><MapPin className="h-5 w-5 text-accent shrink-0" /><div><p className="font-medium">Office Address</p><p className="text-sm text-muted-foreground">123 Business District, Sector 18, Noida, UP - 201301</p></div></div>
                <div className="flex gap-4"><Phone className="h-5 w-5 text-accent shrink-0" /><div><p className="font-medium">Phone</p><a href="tel:+919876543210" className="text-sm text-muted-foreground hover:text-accent">+91 98765 43210</a></div></div>
                <div className="flex gap-4"><Mail className="h-5 w-5 text-accent shrink-0" /><div><p className="font-medium">Email</p><a href="mailto:info@ypsca.com" className="text-sm text-muted-foreground hover:text-accent">info@ypsca.com</a></div></div>
                <div className="flex gap-4"><Clock className="h-5 w-5 text-accent shrink-0" /><div><p className="font-medium">Office Hours</p><p className="text-sm text-muted-foreground">Mon - Sat: 10:00 AM - 7:00 PM</p></div></div>
              </div>
              <div className="bg-surface rounded-lg p-4 h-64 flex items-center justify-center text-muted-foreground">[Google Map Embed]</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
