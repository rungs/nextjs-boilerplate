import { msalConfig } from '@constants'

export const GET_MSAL_CONFIG = () => {
  switch (process.env.NEXT_PUBLIC_REACT_APP_ENV) {
    case 'DEVELOPMENT':
      return {
        authConfig: msalConfig.dev.authConfig,
        loginRequest: msalConfig.dev.loginRequest,
      }
    default:
      return {
        authConfig: msalConfig.local.authConfig,
        loginRequest: msalConfig.local.loginRequest,
      }
  }
}
