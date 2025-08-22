import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "#", icon: Facebook, label: "Facebook" },
    { href: "#", icon: Twitter, label: "Twitter" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
    { href: "#", icon: Github, label: "GitHub" },
  ];

  const serviceLinks = [
    { href: "#", label: "Web Development" },
    { href: "#", label: "UI/UX Design" },
    { href: "#", label: "Mobile App Development" },
    { href: "#", label: "Digital Marketing" },
    { href: "#", label: "E-commerce Solutions" },
  ];

  const companyLinks = [
    { href: "#", label: "About Us" },
    { href: "#", label: "Our Work" },
    { href: "#", label: "Careers" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Contact Us" },
  ];

  const contactDetails = [
    { icon: MapPin, text: "Kolkata, West Bengal, India" },
    { icon: Mail, text: "pritam@bohurupi.com" },
  ];

  return (
    <footer className="bg-muted/30 border-t pt-16 pb-8 rounded-t-xl md:rounded-t-2xl">
      <div className="container mx-auto px-4 text-center sm:text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start">
            <a href="#" className="text-3xl font-bold text-primary flex items-center space-x-2 mb-5">
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">Bohurupi</span>
              <span className="text-slate-800 dark:text-slate-200">Dev</span>
            </a>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed max-w-xs text-center sm:text-left">
              We craft digital experiences that captivate and inspire. Our dedicated team of experts is committed to transforming your vision into reality with innovative solutions.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map(link => (
                <a 
                  key={link.label}
                  href={link.href} 
                  aria-label={link.label}
                  className="text-muted-foreground hover:text-primary p-2.5 rounded-full bg-background hover:bg-muted transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-110"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile: 2 cols, Tablet up: 1 col each for Services and Company */}
          <div className="grid grid-cols-2 gap-x-8 sm:col-span-2 lg:col-span-2 lg:grid-cols-2">
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-md font-semibold mb-5 uppercase tracking-wider text-slate-700 dark:text-slate-300">Services</h3>
              <ul className="space-y-3 text-center sm:text-left">
                {serviceLinks.map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-primary hover:underline underline-offset-4 transition-colors duration-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-md font-semibold mb-5 uppercase tracking-wider text-slate-700 dark:text-slate-300">Company</h3>
              <ul className="space-y-3 text-center sm:text-left">
                {companyLinks.map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-primary hover:underline underline-offset-4 transition-colors duration-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start sm:col-span-2 lg:col-span-1">
            <h3 className="text-md font-semibold mb-5 uppercase tracking-wider text-slate-700 dark:text-slate-300">Contact Us</h3>
            <ul className="space-y-4 text-center sm:text-left">
              {contactDetails.map(detail => (
                <li key={detail.text} className="flex items-start space-x-3 justify-center sm:justify-start">
                  <detail.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground leading-snug">{detail.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-border/50" />

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground mb-4 sm:mb-0">
            &copy; {currentYear} Bohurupi Shopping & Servies. All rights reserved. Crafted with passion.
          </p>
          <div className="flex space-x-4 sm:space-x-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            {/* <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}