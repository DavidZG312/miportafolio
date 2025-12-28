import { useTheme } from '@/hooks/useTheme';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full bg-secondary/50 hover:bg-secondary flex items-center justify-center transition-all duration-500 ease-out group overflow-hidden border border-border/50"
      aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
    >
      <div className="relative w-6 h-6">
        {/* Sun icon */}
        <Sun
          className={`absolute inset-0 w-6 h-6 text-amber-500 transition-all duration-500 ease-out ${theme === 'light'
            ? 'rotate-0 scale-100 opacity-100'
            : 'rotate-90 scale-0 opacity-0'
            }`}
        />
        {/* Moon icon */}
        <Moon
          className={`absolute inset-0 w-6 h-6 text-primary transition-all duration-500 ease-out ${theme === 'dark'
            ? 'rotate-0 scale-100 opacity-100'
            : '-rotate-90 scale-0 opacity-0'
            }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
