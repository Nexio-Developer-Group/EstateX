import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { APP_CONFIG } from '@/config/app.config';

const Contact = () => {
  const interests = ['Buying Property', 'Selling Property', 'General Enquiry'];

  return (
    <div className="min-h-screen flex flex-col">

      {/* Hero */}
      <section className="bg-primary py-16 px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">Get in Touch</h1>
          <p className="text-primary-foreground/80 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Have questions about buying or selling property? Our team of experts is here to assist you with transparent and reliable solutions.
          </p>
        </div>
      </section>

      <main className="flex-1 py-16 px-4 md:px-6 lg:px-8 bg-background">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <Card className="border-border shadow-sm h-fit">
              <CardContent className="p-8 space-y-10">
                {/* Head Office */}
                <div>
                  <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Head Office</h3>
                  <p className="font-semibold text-foreground text-lg leading-relaxed">
                    {APP_CONFIG.contactAddressShort}
                  </p>
                  <a href="#" className="text-primary text-sm font-bold mt-4 inline-flex items-center gap-2 hover:gap-3 transition-all">
                    Get Directions
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Contact Details */}
                <div>
                  <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Contact Details</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-tighter mb-1">Sales & Enquiry</p>
                      <a href={`tel:${APP_CONFIG.contactNumber}`} className="text-primary font-bold text-2xl hover:underline">
                        {APP_CONFIG.contactNumber}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-tighter mb-1">Support Email</p>
                      <a href={`mailto:${APP_CONFIG.contactEmail}`} className="text-primary font-bold text-lg hover:underline">
                        {APP_CONFIG.contactEmail}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div>
                  <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">Business Hours</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center border-b border-border/50 pb-2">
                      <span className="text-muted-foreground font-medium">Monday - Saturday</span>
                      <span className="text-foreground font-bold">9:30 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground font-medium">Sunday</span>
                      <span className="text-foreground font-bold">By Appointment</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="border-border shadow-sm">
              <CardContent>
                <h2 className="text-2xl font-bold text-primary mb-3">Send us a Message</h2>
                <p className="text-muted-foreground mb-10 text-base">
                  Fill out the form below and our property advisor will get back to you within 24 hours.
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-2">Full Name</label>
                      <Input placeholder="Enter your name" className="h-12" />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-2">Email Address</label>
                      <Input placeholder="example@mail.com" type="email" className="h-12" />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-2">Phone Number</label>
                    <Input placeholder="+91" type="tel" className="h-12" />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-2">I am interested in</label>
                    <div className="flex flex-wrap gap-3 mt-3">
                      {interests.map((interest, index) => (
                        <Button
                          key={interest}
                          type="button"
                          variant={index === 0 ? 'default' : 'outline'}
                          className={`h-10 px-6 font-bold uppercase tracking-widest text-[10px] ${index !== 0 ? 'border-primary/20 hover:bg-primary/5' : ''}`}
                        >
                          {interest}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest block mb-2">Message</label>
                    <Textarea
                      placeholder="Tell us what you are looking for..."
                      rows={5}
                      className="resize-none"
                    />
                  </div>

                  <Button className="w-full h-12 text-sm font-bold uppercase tracking-widest">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Map Placeholder */}
          <div className="mt-16 max-w-6xl mx-auto px-4 lg:px-0">
            <div className="bg-muted rounded-2xl h-96 flex items-center justify-center relative overflow-hidden shadow-inner group">
              <div className="absolute inset-0 bg-linear-to-b from-muted to-muted/50 transition-opacity group-hover:opacity-70" />
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <p className="font-bold text-foreground text-xl mb-1">Our Location</p>
                <p className="text-muted-foreground font-medium">{APP_CONFIG.contactAddressShort}</p>
              </div>
              <Button variant="secondary" className="absolute bottom-6 right-6 font-bold uppercase tracking-widest shadow-lg">
                View Larger Map
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* CTA */}
      <section className="bg-primary py-16 px-4 md:px-6 lg:px-8">
        <div className="container-custom mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-primary-foreground text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to find your dream property?</h2>
              <p className="text-primary-foreground/70 mt-3 text-lg">Explore our verified listings and find the perfect plot or home for your future.</p>
            </div>
            <Button asChild variant="secondary" size="lg" className="h-14 px-10 font-bold uppercase tracking-widest text-sm shadow-xl hover:bg-white shrink-0">
              <Link to="/properties">Explore Listings</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
