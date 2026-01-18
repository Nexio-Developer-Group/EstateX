import { APP_CONFIG } from '@/config/app.config'

const About = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-primary py-16 px-4 md:px-6 lg:px-8">
                <div className="container-custom">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">About {APP_CONFIG.name}</h1>
                    <p className="text-primary-foreground/80 text-lg max-w-2xl">
                        Your trusted platform for land, growth, and stability. Professional real estate management made simple.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 px-4 md:px-6 lg:px-8">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <h2 className="text-2xl font-bold mb-6">Our Vision</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p className="text-lg">
                                {APP_CONFIG.name} is your trusted platform for real estate management,
                                built on principles of trust, land, growth, stability, and professionalism.
                            </p>
                            <p className="text-lg">
                                Our platform represents our commitment to sustainable
                                growth and environmental responsibility in the real estate sector.
                            </p>
                            <p className="text-lg">
                                We leverage modern technology to provide transparent deals and verified listings,
                                ensuring that every family finds their dream home with absolute peace of mind.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
