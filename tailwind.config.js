/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        'grid-gray-100': 'url("data:image/svg+xml,%3csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3cg fill=\'%23f3f4f6\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'%3e%3ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3e%3ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3e%3c/g%3e%3c/svg%3e")',
        'grid-gray-800': 'url("data:image/svg+xml,%3csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3e%3cg fill=\'%23374151\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'%3e%3ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3e%3ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3e%3c/g%3e%3c/svg%3e")',
      },
    },
  },
  plugins: [],
};