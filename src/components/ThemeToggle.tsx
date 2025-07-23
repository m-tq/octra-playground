import React from 'react';
import * as Switch from '@radix-ui/react-switch';
import * as Tooltip from '@radix-ui/react-tooltip';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div className="flex items-center space-x-2">
            <Sun className="h-4 w-4 text-yellow-500" />
            <Switch.Root
              className="w-11 h-6 bg-gray-300 rounded-full relative shadow-inner transition-colors duration-200 dark:bg-gray-600 data-[state=checked]:bg-purple-500"
              onCheckedChange={toggleTheme}
              checked={theme === 'dark'}
            >
              <Switch.Thumb className="block w-5 h-5 bg-white rounded-full shadow-lg transform transition-transform duration-200 translate-x-0.5 data-[state=checked]:translate-x-5" />
            </Switch.Root>
            <Moon className="h-4 w-4 text-blue-500" />
          </div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="bg-gray-900 text-white px-2 py-1 rounded text-sm shadow-lg dark:bg-gray-100 dark:text-gray-900"
            sideOffset={5}
          >
            Toggle theme
            <Tooltip.Arrow className="fill-gray-900 dark:fill-gray-100" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}