import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Phone, MessageSquare, Mail, Search, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { APP_CONFIG } from '@/config/app.config';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { 
      label: 'Find Property', 
      path: '/find-property',
      dropdown: true,
      items: [
        { label: 'Search Properties', path: '/find-property' },
        { label: 'View All Listings', path: '/properties' },
      ]
    },
    { label: 'Our Services', path: '/services' },
    { label: 'Area Converter', path: '/area-converter' },
    { label: 'EMI Calculator', path: '/emi-calculator' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card shadow-sm border-b border-border">
      {/* Top bar */}
      <div className="bg-card px-8 py-4 border-b border-border">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">{APP_CONFIG.name.charAt(0)}</span>
            </div>
            <span className="font-semibold text-lg text-foreground">{APP_CONFIG.name}</span>
          </Link>

        <div className="flex items-center gap-4">

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{APP_CONFIG.contactAddressShort}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>{APP_CONFIG.contactNumber}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="default" className="hidden lg:flex text-primary gap-1">
              <MessageSquare className="w-4 h-4 text-primary" />
              SMS
            </Button>
            <Button size="default" className="gap-1">
              <Mail className="w-4 h-4" />
              Email
            </Button>
          </div>
        </div>
        
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-card px-8">
        <div className="container-custom flex items-center justify-between py-3">
          {/* Nav Links - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => (
              link.dropdown ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger asChild>
                    <button 
                      className={`px-2 py-2 text-sm font-medium flex items-center gap-1 transition-colors ${
                        isActive(link.path) 
                          ? 'text-primary' 
                          : 'text-foreground hover:text-primary hover:bg-accent'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {link.items?.map((item) => (
                      <DropdownMenuItem key={item.path} asChild>
                        <Link to={item.path}>{item.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`px-2 py-2 text-sm font-medium transition-colors ${
                    isActive(link.path) 
                      ? 'text-primary border-b-2 border-primary' 
                      : 'text-foreground hover:text-primary hover:bg-accent'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Search Button */}
          <Button variant="ghost" size="icon" className="hidden lg:flex">
            <Search className="w-5 h-5" />
          </Button>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="container-custom py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(link.path) 
                      ? 'text-primary bg-accent' 
                      : 'text-foreground hover:text-primary hover:bg-accent'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;