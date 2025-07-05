import { useEffect, useState } from "react";

const useStorage = (key: string, value: string) => {
  //let storedValue = localStorage.getItem(key);
  const [themeValue, setThemeValue] = useState(() => {
    if (window === undefined) {
      return value;
    }
    const item = window.localStorage.getItem(key);
    return item ? item : value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, themeValue);
  }, [key, themeValue]);

  return [themeValue, setThemeValue] as const;
};

export default useStorage;
