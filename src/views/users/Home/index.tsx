import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Tag, Key, Users, Building2, Quote, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import PropertyCard from './components/PropertyCard';
import { fetchFeaturedProperties } from '@/services/propertyApi';
import type { Property } from '@/services/propertyApi';
import heroImage from '@/assets/hero-villa.png';
import { Textarea } from '@/components/ui/textarea';
import { APP_CONFIG } from '@/config/app.config';

const LandingPage = () => {
    const [featuredProperties, setFeaturedProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProperties = async () => {
            const properties = await fetchFeaturedProperties();
            setFeaturedProperties(properties);
            setLoading(false);
        };
        loadProperties();
    }, []);


    const localities = [
        { name: 'Whitefield', location: 'Bangalore', properties: '200+ Listings' },
        { name: 'Sarjapur Road', location: 'Bangalore', properties: '80+ Villas & Plots' },
        { name: 'Electronic City', location: 'Bangalore', properties: '60+ Commercial Options' },
        { name: 'Nandi Hills', location: 'Farmlands', properties: '40+ Farm Plots' },
        { name: 'Baner', location: 'Pune', properties: '75+ Properties' },
        { name: 'Thane West', location: 'Mumbai', properties: '50+ Projects' },
        { name: 'Gachibowli', location: 'Hyderabad', properties: '55+ Developments' },
        { name: 'New Town', location: 'Kolkata', properties: '30+ New Projects' },
    ];

    const services = [
        { title: 'Real Estate Agent', description: 'Dedicated property advisors to help you find the perfect deal.', icon: Users },
        { title: 'Buying Property', description: 'From search to registration, we guide you through every step.', icon: Home },
        { title: 'Sell Property', description: 'Market your property with professional photography and listings.', icon: Tag },
        { title: 'Rental Property', description: 'Find quality tenants or rent a home with complete support.', icon: Key },
    ];

    const testimonials = [
        { quote: 'Excellent transparency and delivery. We were kept informed at every step. Highly recommend for anyone buying in Whitefield.', name: 'Priya Sharma', location: 'Home Buyer, Bangalore' },
        { quote: "They understood our investment goals and suggested land parcels with great appreciation potential in Nandi Hills.", name: 'Rahul Mehta', location: 'Investor, Hyderabad' },
        { quote: 'Listing my commercial property was quick and hassle-free. The platform is intuitive and the qualified leads were within days.', name: 'Amit Verma', location: 'Commercial Owner, Bangalore' },
    ];

    return (
        <div className="min-h-screen flex flex-col">

            {/* Hero Section */}
            <section className="relative h-[500px] md:h-[600px] overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={heroImage}
                        alt="Luxury villa with pool"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-primary/90 to-primary/60" />
                </div>
                <div className="relative px-4 md:px-6 lg:px-8 container-custom h-full flex flex-col justify-center">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-background/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm mb-4 w-fit">
                        <Shield className="w-4 h-4" />
                        RERA Registered
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground max-w-xl leading-tight">
                        Find Verified Plots & Properties
                    </h1>
                    <p className="text-primary-foreground/80 mt-4 max-w-lg text-lg">
                        Trusted land & property listings with transparent deals across prime locations in India. Your gateway to premium real estate investments.
                    </p>
                    <div className="flex gap-3 mt-8">
                        <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                            <Link to="/properties">
                                Explore Listings
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10">
                            <Link to="/contact">Book Consultation</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Featured Properties */}
            <section className="py-16 px-4 md:px-6 lg:px-8">
                <div className="container-custom">
                    <div className="flex items-end justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-bold">Featured Properties</h2>
                            <p className="mt-2 text-sm text-muted-foreground">Handpicked premium listings for you</p>
                        </div>
                        <Link to="/properties" className="text-primary  text-sm flex items-center gap-1 hover:underline">
                            View All Properties
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {loading ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="bg-muted animate-pulse rounded-lg h-72" />
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {featuredProperties.map((property) => (
                                <PropertyCard key={property.id} property={property} variant="compact" />
                            ))}
                        </div>
                    )}
                </div>
            </section>


            {/* Popular Localities */}
            <section className="py-16 px-4 md:px-6 lg:px-8 bg-card">
                <div>
                    <h2 className="text-2xl font-bold">Popular Localities</h2>
                    <p className="mt-2 text-sm text-muted-foreground">Explore high demand areas for buying and investing</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                        {localities.map((locality) => (
                            <Link
                                key={locality.name}
                                to={`/properties?location=${locality.name}`}
                                className="p-4 bg-card col-span-1 w-full border border-border rounded-lg hover:border-primary hover:shadow-md transition-all"
                            >
                                <h3 className="font-semibold text-foreground">{locality.name}</h3>
                                <p className="text-sm text-muted-foreground">{locality.location} • {locality.properties}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-16 px-4 md:px-6 lg:px-8">
                <div>
                    <h2 className="text-2xl font-bold">Services We Offer</h2>
                    <p className="mt-2 text-sm text-muted-foreground">End-to-end real estate support for every need</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                        {services.map((service) => (
                            <Card key={service.title} className="p-0  border-border">
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-foreground">{service.title}</h3>
                                    <p className="text-sm text-muted-foreground mt-2">{service.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 px-4 md:px-6 lg:px-8 bg-card">
                <div>
                    <h2 className="text-2xl font-bold">Testimonials</h2>
                    <p className="mt-2 text-sm text-muted-foreground">Hear what our clients say about working with us</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="bg-background border-border">
                                <CardContent className="p-6">
                                    <Quote className="w-8 h-8 text-primary/20 mb-4" />
                                    <p className="text-muted-foreground text-sm italic">"{testimonial.quote}"</p>
                                    <div className="mt-4 pt-4 border-t border-border">
                                        <p className="font-medium text-foreground">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Enquiry */}
            <section className="py-16 px-4 md:px-6 lg:px-8">
                <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold">Quick Enquiry</h2>
                            <p className="mt-2 text-sm text-muted-foreground">Share your requirement and our team will connect with you.</p>

                            <div className="mt-8 space-y-4 bg-card p-6 border border-border rounded-lg">
                                <div className="flex items-start gap-3">
                                    <Building2 className="w-5 h-5 text-primary mt-0.5" />
                                    <div>
                                        <p className="font-medium text-foreground">Bangalore Office</p>
                                        <p className="text-sm text-muted-foreground">#42, 2nd Floor, 100 Feet Road, Indiranagar</p>
                                        <p className="text-sm text-muted-foreground">Tel: +91 98765 43210</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Building2 className="w-5 h-5 text-primary mt-0.5" />
                                    <div>
                                        <p className="font-medium text-foreground">Pune Office</p>
                                        <p className="text-sm text-muted-foreground">Tower 3, Viman Nagar</p>
                                        <p className="text-sm text-muted-foreground">Tel: +91 87654 32109</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card border border-border rounded-lg">
                            <CardContent className="p-6">
                                <form className="space-y-4">
                                    <Input placeholder="Name" />
                                    <Input placeholder="Phone Number" type="tel" />
                                    <div className="flex items-center gap-4">
                                        <Input placeholder="Email" type="email" />
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Requirement" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="buy">Buy Property</SelectItem>
                                            <SelectItem value="sell">Sell Property</SelectItem>
                                            <SelectItem value="rent">Rent Property</SelectItem>
                                            <SelectItem value="invest">Investment Advice</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    </div>
                                    <Textarea className="h-24" placeholder="Message" />
                                    <Button className="w-full">Submit Enquiry</Button>
                                </form>
                            </CardContent>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 px-4 md:px-6 lg:px-8 bg-card">
                <div>
                    <h2 className="text-2xl font-bold text-foreground">About {APP_CONFIG.name}</h2>
                    <p className="text-muted-foreground mt-4 max-w-3xl">
                        {APP_CONFIG.defaultDescription}
                    </p>
                </div>
            </section>

        </div>
    );
};

export default LandingPage;
