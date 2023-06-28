import "../styles/globals.css";
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

function LoadingThemeProvider({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <> {children}</>;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}

function MyApp({ Component, pageProps }) {
  return (
    <LoadingThemeProvider>
        <Component {...pageProps} />
    </LoadingThemeProvider>
  );
}

export default MyApp;
