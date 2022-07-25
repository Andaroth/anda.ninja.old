import {
  AppProps,
  ErrorBoundary,
  ErrorComponent,
  AuthenticationError,
  AuthorizationError,
  ErrorFallbackProps,
  useQueryErrorResetBoundary,
} from "blitz"
// import LoginForm from "app/auth/components/LoginForm"

import { ChakraProvider } from "@chakra-ui/react"

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ErrorBoundary
      FallbackComponent={RootErrorFallback}
      onReset={useQueryErrorResetBoundary().reset}
    >
      <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
    </ErrorBoundary>
  )
}

function RootErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  if (error instanceof AuthenticationError) {
    return (
      <ChakraProvider>
        Auth Error{/* <LoginForm onSuccess={resetErrorBoundary} /> */}
      </ChakraProvider>
    )
  } else if (error instanceof AuthorizationError) {
    return (
      <ChakraProvider>
        <ErrorComponent
          statusCode={error.statusCode}
          title="Sorry, you are not authorized to access this"
        />
      </ChakraProvider>
    )
  } else {
    return (
      <ChakraProvider>
        <ErrorComponent statusCode={error.statusCode || 400} title={error.message || error.name} />
      </ChakraProvider>
    )
  }
}
