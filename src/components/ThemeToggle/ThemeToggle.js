import { useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from "@chakra-ui/icons"; // Імпортуйте іконки з Chakra UI

export function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
      <IconButton
      aria-label="Toggle theme"
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} // Вибір іконки в залежності від режиму
      onClick={toggleColorMode}
      borderRadius="full" 
      bgColor="pink.500" 
      color="white" 
    />
 
  );
}
