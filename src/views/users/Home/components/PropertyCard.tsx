import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Maximize2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { formatPriceShort } from '@/services/propertyApi';
import type { Property } from '@/services/propertyApi';

interface PropertyCardProps {
  property: Property;
  variant?: 'default' | 'compact';
}

const badgeStyles: Record<string, string> = {
  'For Sale': 'bg-primary',
  'New Launch': 'bg-primary',
  'Verified': 'bg-amber-500',
  'Luxury': 'bg-purple-600',
  'Commercial': 'bg-blue-500',
  'Investment': 'bg-primary',
  'Ready to Move': 'bg-primary',
};

const PropertyCard = ({ property, variant = 'default' }: PropertyCardProps) => {
  const isCompact = variant === 'compact';

  return (
    <Card className="overflow-hidden card-hover border border-border">
      <div className="relative">
        <img
          src={property.images[0]}
          alt={property.title}
          className={`w-full object-cover ${isCompact ? 'h-40' : 'h-48'}`}
        />
        {property.badge && (
          <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-medium text-primary-foreground rounded-md ${badgeStyles[property.badge] || 'bg-primary'}`}>
            {property.badge}
          </span>
        )}
        <button className="absolute top-3 right-3 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors">
          <Heart className="w-4 h-4 text-foreground" />
        </button>
      </div>
      <CardContent className={isCompact ? 'p-3' : 'p-4'}>
        <p className="text-price font-semibold text-lg">
          {formatPriceShort(property.price)}
        </p>
        <h3 className={`font-medium text-foreground mt-1 line-clamp-1 ${isCompact ? 'text-sm' : 'text-base'}`}>
          {property.title}
        </h3>
        <div className="flex items-center gap-1 text-muted-foreground text-sm mt-1">
          <MapPin className="w-3 h-3 shrink-0" />
          <span className="line-clamp-1">{property.location}, {property.city}</span>
        </div>
        
        {!isCompact && property.bedrooms > 0 && (
          <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Bed className="w-4 h-4" />
              <span>{property.bedrooms} BHK</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="w-4 h-4" />
              <span>{property.bathrooms} Bath</span>
            </div>
            <div className="flex items-center gap-1">
              <Maximize2 className="w-4 h-4" />
              <span>{property.area} {property.areaUnit}</span>
            </div>
          </div>
        )}
        
        {!isCompact && (
          <div className="flex gap-2 mt-4">
            <Button asChild className="flex-1">
              <Link to={`/property/${property.id}`}>View Details</Link>
            </Button>
            <Button variant="outline" className="flex-1">
              Contact
            </Button>
          </div>
        )}
        
        {isCompact && (
          <Button asChild variant="outline" size="sm" className="w-full mt-3">
            <Link to={`/property/${property.id}`}>View Details</Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
