import { APP_CONFIG } from '@/config/app.config'
import { Link } from 'react-router-dom'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-card border-t border-border py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <span className="text-primary-foreground font-bold text-lg">E</span>
                            </div>
                            <span className="text-xl font-bold text-foreground">{APP_CONFIG.name}</span>
                        </Link>
                        <p className="text-muted-foreground max-w-xs transition-colors hover:text-foreground">
                            {APP_CONFIG.tagline}
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/properties" className="hover:text-primary transition-colors">Properties</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-foreground mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link to={APP_CONFIG.privacyPolicy} className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link to={APP_CONFIG.termsOfService} className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link to={APP_CONFIG.cookiePolicy} className="hover:text-primary transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {currentYear} {APP_CONFIG.name}. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href={APP_CONFIG.facebook} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Facebook</a>
                        <a href={APP_CONFIG.twitter} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Twitter</a>
                        <a href={APP_CONFIG.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
