import { ThemeProvider } from 'styled-components'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  gql
} from '@apollo/client'
import * as theme from '../styles/theme'
import { GlobalStyle } from '../styles/Global'

function MyApp ({ Component, pageProps }) {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: 'https://app-friends-add.herokuapp.com/graghql'
    }),
    cache: new InMemoryCache(),
    fetchOptions: {
      mode: 'no-cors'
    }
  })

  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}

export default MyApp
