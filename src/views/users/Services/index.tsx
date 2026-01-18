import { Link } from 'react-router-dom';
import { ArrowRight, Users, Home, Tag, Key, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import serviceAgents from '@/assets/service-agents.png';
import serviceBuy from '@/assets/service-buy.png';
import property3 from '@/assets/property-3.png';
import property5 from '@/assets/property-5.png';

const Services = () => {
    const services = [
        {
            title: 'Expert Real Estate Agents',
            description: 'Connect with our top-rated certified agents who understand the local market nuances. They negotiate on your behalf to get you the best deal possible, ensuring a smooth and transparent transaction.',
            image: serviceAgents,
            icon: Users,
            link: '/contact',
            linkText: 'Find an Agent',
        },
        {
            title: 'Buying Property',
            description: 'Access the largest database of verified plots, villas, and apartments. Our legal team checks every document so you can buy with 100% confidence. We guide you from search to registration.',
            image: serviceBuy,
            icon: Home,
            link: '/properties',
            linkText: 'Explore Listings',
        },
        {
            title: 'Sell Property',
            description: 'Get the best market value for your asset. We provide professional photography, valuation services, and premium listing visibility to attract serious buyers quickly.',
            image: property3,
            icon: Tag,
            link: '/contact',
            linkText: 'Post Your Property',
        },
        {
            title: 'Rental Property',
            description: "Whether you're looking for a tenant or a home to rent, we simplify the process. We handle agreements, background checks, and rent collection setup for a hassle-free experience.",
            image: property5,
            icon: Key,
            link: '/properties',
            linkText: 'Browse Rentals',
        },
    ];

    const benefits = [
        'Free property valuation',
        'Legal consultation support',
        'Investment portfolio analysis',
    ];

    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero */}
            <section className="bg-primary py-16 px-4 md:px-6 lg:px-8">
                <div className="container-custom text-center">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground max-w-4xl mx-auto leading-tight">
                        "Real estate cannot be lost or stolen, nor can it be carried away."
                    </h1>
                    <p className="text-primary-foreground/80 mt-6 max-w-2xl mx-auto text-lg">
                        Manage it with reasonable care, and it is about the safest investment in the world. We are here to help you every step of the way.
                    </p>
                    <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="mt-8 border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10"
                    >
                        <Link to="/contact">
                            Book a Consultation
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>
            </section>

            {/* Services Grid */}
            <main className="flex-1 py-16 px-4 md:px-6 lg:px-8 bg-background">
                <div className="container-custom mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {services.map((service) => (
                            <Card key={service.title} className="overflow-hidden border-border shadow-sm group">
                                <div className="overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <CardContent className="p-8">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                        <service.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                                    <p className="text-muted-foreground text-base leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                    <Link
                                        to={service.link}
                                        className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all underline underline-offset-4"
                                    >
                                        {service.linkText}
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>

            {/* Callback CTA */}
            <section className="bg-primary py-20 px-4 md:px-6 lg:px-8">
                <div className="container-custom mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="text-primary-foreground">
                            <h2 className="text-3xl md:text-4xl font-bold">Need Personalized Advice?</h2>
                            <p className="mt-6 text-lg opacity-80 leading-relaxed">
                                Not sure where to start? Our experts are here to help you navigate the complex world of real estate with ease.
                            </p>
                            <ul className="mt-10 space-y-4">
                                {benefits.map((benefit) => (
                                    <li key={benefit} className="flex items-center gap-3 text-lg font-medium">
                                        <CheckCircle className="w-6 h-6 text-primary-foreground/60" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Card className="bg-background border-none shadow-2xl">
                            <CardContent className="p-8 md:p-10">
                                <h3 className="text-2xl font-bold text-foreground mb-6">Request a Call Back</h3>
                                <form className="space-y-6">
                                    <div>
                                        <label className="text-sm font-bold text-muted-foreground uppercase tracking-widest block mb-2">Full Name</label>
                                        <Input placeholder="Enter your name" className="h-12" />
                                    </div>
                                    <div>
                                        <label className="text-sm font-bold text-muted-foreground uppercase tracking-widest block mb-2">Phone Number</label>
                                        <Input placeholder="Enter 10 digit mobile number" type="tel" className="h-12" />
                                    </div>
                                    <div>
                                        <label className="text-sm font-bold text-muted-foreground uppercase tracking-widest block mb-2">Interested In</label>
                                        <Select>
                                            <SelectTrigger className="h-12">
                                                <SelectValue placeholder="Select interest" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="buying">Buying Property</SelectItem>
                                                <SelectItem value="selling">Selling Property</SelectItem>
                                                <SelectItem value="renting">Renting Property</SelectItem>
                                                <SelectItem value="investment">Investment Advice</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <Button className="w-full h-12 text-sm font-bold uppercase tracking-widest">Submit Request</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Services;
