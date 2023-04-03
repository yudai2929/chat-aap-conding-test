import { theme } from "@/styles/chkra-ui/theme";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={extendTheme(theme)}>
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}
