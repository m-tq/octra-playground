import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';
import { AppCard } from './components/AppCard';
import { Gamepad2, Github, Twitter } from 'lucide-react';

const apps = [
  {
    title: 'Web Wallet',
    description: 'Un-Official Octra Web Wallet for secure transactions and account management',
    url: 'https://oct.xme.my.id',
    icon: 'wallet' as const,
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    title: 'ONS (Octra Name Service)',
    description: 'Decentralized naming service for the Octra ecosystem',
    url: 'https://ons.xme.my.id',
    icon: 'globe' as const,
    gradient: 'from-green-500 to-teal-600',
  },
  {
    title: 'Octra Faucet',
    description: 'Un-Official faucet to get test tokens for Octra development',
    url: 'https://oct-faucet.xme.my.id',
    icon: 'droplets' as const,
    gradient: 'from-orange-500 to-red-600',
  },
];

function AppContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-100/50 dark:bg-grid-gray-800/50 bg-[size:20px_20px] opacity-20" />
      
      {/* Header */}
      <header className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
              <Gamepad2 className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Octra Playground
            </h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-6 leading-tight">
              Welcome to Octra
              <br />
              <span className="text-3xl md:text-5xl pb-2 inline-block">Playground</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Explore the ecosystem of Octra applications. From wallet management to naming services, 
              everything you need for your Octra journey.
            </p>
          </div>

          {/* Apps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {apps.map((app) => (
              <AppCard
                key={app.title}
                title={app.title}
                description={app.description}
                url={app.url}
                icon={app.icon}
                gradient={app.gradient}
              />
            ))}
          </div>

          {/* Footer */}
          <footer className="border-t border-gray-200 dark:border-gray-700 pt-5">
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400">
                Built with ❤️ for the Octra community
              </p>
              {/* <div className="flex justify-center space-x-6">
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div> */}
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="octra-playground-theme">
      <AppContent />
    </ThemeProvider>
  );
}

export default App;