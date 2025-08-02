import React from 'react';
import { ExternalLink, Wallet, Globe, Droplets, Brain } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/Card';
import { Button } from './ui/Button';

interface AppCardProps {
  title: string;
  description: string;
  url: string;
  icon: 'wallet' | 'globe' | 'droplets' | 'brain';
  accent: string;
}

const iconMap = {
  wallet: Wallet,
  globe: Globe,
  droplets: Droplets,
  brain: Brain,
};

export function AppCard({ title, description, url, icon, accent }: AppCardProps) {
  const IconComponent = iconMap[icon];

  return (
    <Card className="relative overflow-hidden transition-all duration-200 hover:shadow-lg group">
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none`} />
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg bg-gradient-to-br ${accent} shadow-sm`}>
            <IconComponent className="h-5 w-5 text-white" />
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
        <CardDescription className="mt-2 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="relative z-10">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-10 px-4 py-2 w-full cursor-pointer no-underline bg-gradient-to-r ${accent} text-white hover:opacity-90 shadow-sm`}
        >
          Launch App
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </CardFooter>
    </Card>
  );
}
