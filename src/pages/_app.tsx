import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { AppProps } from "next/app"
import { theme } from "../styles/chkra-ui/theme"
import { Layout } from "../components/layouts/Layout"
import { RecoilRoot } from "recoil"
import { AuthProvider } from "../provider/AuthProvider"

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={extendTheme(theme)}>
          <AuthProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AuthProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </RecoilRoot>
  )
}
