import React from 'react';
import { ExternalLink, Wallet, Globe, Droplets } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/Card';
import { Button } from './ui/Button';

interface AppCardProps {
  title: string;
  description: string;
  url: string;
  icon: 'wallet' | 'globe' | 'droplets';
  gradient: string;
}

const iconMap = {
  wallet: Wallet,
  globe: Globe,
  droplets: Droplets,
};

export function AppCard({ title, description, url, icon, gradient }: AppCardProps) {
  const IconComponent = iconMap[icon];

  return (
    <Card className={`border-0 bg-gradient-to-br ${gradient} text-white`}>
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <IconComponent className="h-6 w-6" />
          </div>
          <CardTitle className="text-white">{title}</CardTitle>
        </div>
        <CardDescription className="text-white/80 mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button
          asChild
          variant="secondary"
          className="w-full bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm"
        >
          <a href={url} target="_blank" rel="noopener noreferrer">
            Launch App
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}