import api from '../service'
import { getPermission, getFeaturePermission } from '../permission'

const URL = `${process.env.NEXT_PUBLIC_APP_API_URL}`
const VERSION = `${process.env.NEXT_PUBLIC_APP_API_VERSION}`

jest.mock('../service')

describe('API Feature', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should call api getPermission status is 200', async () => {
    const appId = 'appId'
    const response = {
      status: 200,
      data: [
        {
          permission: 'permission-id',
        },
      ],
    }

    api.get.mockResolvedValue(response)
    const res = await getPermission(appId)

    expect(res).toEqual([
      {
        permission: 'permission-id',
      },
    ])
  })

  it('should call api getPermission status is 500', async () => {
    const appId = 'appId'
    const response = {
      Code: '500',
      Message: 'Network Error',
      data: {
        error: 'Network Error',
      },
    }

    api.get.mockRejectedValue({ response })
    await getPermission(appId).catch(err => err)

    expect(api.get).toHaveBeenCalledWith(
      `${URL}/api/v${VERSION}/Users/undefined/applications/appId/active-scopes`,
    )
  })

  it('should call api getFeaturePermission status is 200', async () => {
    const feature = 'feature'
    const response = {
      status: 200,
      data: {
        features: [{ type: 'feature' }],
      },
    }

    api.get.mockResolvedValue(response)
    const res = await getFeaturePermission(feature)

    expect(res).toEqual({ features: [{ type: 'feature' }] })
  })
})
