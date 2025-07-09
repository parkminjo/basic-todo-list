import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '../store/useThemeStore';

const ThemeSwitchButton = () => {
  const { theme, setTheme } = useThemeStore();

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={handleClick} className="dark:text-white">
      {theme === 'light' ? <Moon /> : <Sun />}
    </button>
  );
};

export default ThemeSwitchButton;
