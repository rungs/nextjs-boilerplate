import { GET_MSAL_CONFIG } from '@utils'
import { msalConfig } from '@constants'

describe('Helper getEnv NEXT_PUBLIC_REACT_APP_ENV DEVELOPMENT', () => {
  beforeEach(() => {
    jest.resetModules()
    process.env = {
      NEXT_PUBLIC_REACT_APP_ENV: 'DEVELOPMENT',
    }
  })

  it('should return DEVELOPMENT', () => {
    const result = GET_MSAL_CONFIG()
    expect(result).toEqual({
      authConfig: msalConfig.dev.authConfig,
      loginRequest: msalConfig.dev.loginRequest,
    })
  })
})

describe('Helper getEnv NEXT_PUBLIC_REACT_APP_ENV LOCAL', () => {
  beforeEach(() => {
    jest.resetModules()
    process.env = {
      NEXT_PUBLIC_REACT_APP_ENV: 'LOCAL',
    }
  })

  it('should return LOCAL', () => {
    const result = GET_MSAL_CONFIG()
    expect(result).toEqual({
      authConfig: msalConfig.local.authConfig,
      loginRequest: msalConfig.local.loginRequest,
    })
  })
})
