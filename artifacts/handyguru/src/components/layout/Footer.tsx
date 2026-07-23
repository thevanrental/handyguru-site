import { Hammer, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-accent text-accent-foreground p-2 rounded-lg">
                <Hammer size={24} strokeWidth={2.5} />
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight text-white">
                Handy<span className="text-accent">Guru</span>
              </span>
            </div>
            <p className="text-primary-foreground/70 max-w-sm mb-6 text-lg">
              The trustworthy neighborhood expert. Skilled, dependable, and done right the first time.
            </p>
            <div className="flex flex-col gap-3 text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <span className="font-medium">(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <span>hello@handyguru.us</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-accent" />
                <span>Serving the Greater Metro Area</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#home" className="text-primary-foreground/70 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#services" className="text-primary-foreground/70 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#about" className="text-primary-foreground/70 hover:text-accent transition-colors">Why Us</a></li>
              <li><a href="#process" className="text-primary-foreground/70 hover:text-accent transition-colors">How It Works</a></li>
              <li><a href="#estimate" className="text-primary-foreground/70 hover:text-accent transition-colors">Get an Estimate</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Services</h4>
            <ul className="flex flex-col gap-3">
              <li className="text-primary-foreground/70">General Repairs</li>
              <li className="text-primary-foreground/70">Mounting & Installation</li>
              <li className="text-primary-foreground/70">Furniture Assembly</li>
              <li className="text-primary-foreground/70">Drywall & Painting</li>
              <li className="text-primary-foreground/70">Fixture Replacement</li>
              <li className="text-primary-foreground/70">Property Maintenance</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} HandyGuru Services. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
