import { getAppPermission } from '@utils'
import { getFeaturePermission } from '../../api'

jest.mock('../../api')

describe('utils permission', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Call function getAppPermission return value', async () => {
    getFeaturePermission.mockResolvedValue({ features: [{ scopes: 'scopes' }] })

    const value = await getAppPermission()

    expect(value).toBe('scopes')
  })
})
