'use client'
import './globals.css'
import { ReactQueryProvider } from '../src/provider'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { Provider } from 'react-redux'
import themes from '../src/themes'
import RootPage from './rootPage'
import store from '../src/store/store'
const LocaleLayout = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <title>System</title>
        <meta httpEquiv='Cache-Control' content='no-cache, no-store, must-revalidate' />
        <meta httpEquiv='Pragma' content='no-cache' />
        <meta httpEquiv='Expires' content='0' />
      </head>
      <body>
        <Provider store={store}>
          <ReactQueryProvider>
            <ThemeProvider theme={themes()}>
              <CssBaseline />
              <RootPage>{children}</RootPage>
            </ThemeProvider>
          </ReactQueryProvider>
        </Provider>
      </body>
    </html>
  )
}

export default LocaleLayout
