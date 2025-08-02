import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { AppCard } from './components/AppCard';
import { Gamepad2 } from 'lucide-react';

const apps = [
  {
    title: 'Octra Wallet',
    description: 'Un-Official Octra Wallet for secure transactions and account management',
    url: 'https://github.com/m-tq/Octra-Extension',
    icon: 'wallet' as const,
    accent: 'from-blue-500 to-blue-600',
  },
  {
    title: 'OCS01-TEST',
    description: 'OCS01 - TEST. DApp for Testing Contract interaction on Octra Blockchain',
    url: 'https://ocs01.xme.my.id',
    icon: 'globe' as const,
    accent: 'from-emerald-500 to-emerald-600',
  },
  // {
  //   title: 'ONS (Octra Name Service)',
  //   description: 'Un-Official decentralized naming service for the Octra ecosystem',
  //   url: 'https://ons.xme.my.id',
  //   icon: 'globe' as const,
  //   accent: 'from-emerald-500 to-emerald-600',
  // },
  {
    title: 'Octra Faucet',
    description: 'Un-Official faucet to get test tokens for Octra development',
    url: 'https://oct-faucet.xme.my.id',
    icon: 'droplets' as const,
    accent: 'from-orange-500 to-orange-600',
  },
];

function AppContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary rounded-lg">
              <Gamepad2 className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="text-lg font-semibold">
              Octra Playground
            </h1>
          </div>
          <div className="flex flex-1 items-center justify-end">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center space-y-4 py-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Octra Playground
            </span>
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Explore the ecosystem of Octra applications. Wallet management, dApp Contract Testing and Faucet. Everything you need for your Octra journey.
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 py-8">
          {apps.map((app) => (
            <AppCard
              key={app.title}
              title={app.title}
              description={app.description}
              url={app.url}
              icon={app.icon}
              accent={app.accent}
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="border-t py-6 mt-12">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Built with ❤️ for the Octra community
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="octra-playground-theme">
      <AppContent />
    </ThemeProvider>
  );
}

export default App;