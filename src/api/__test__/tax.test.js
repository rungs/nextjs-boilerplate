import api from '../service'
import { getTaxTypeList, getVatChoiceList } from '../tax'

const URL = `${process.env.NEXT_PUBLIC_APP_API_URL}`

jest.mock('../service')

describe('API Tax and VAT', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should call api getTaxTypeList status is 200', async () => {
    const response = {
      status: 200,
      data: [
        {
          des1: 'บุคคล',
        },
      ],
    }

    api.get.mockResolvedValue(response)
    const res = await getTaxTypeList()

    expect(api.get).toHaveBeenCalledWith(`${URL}/api/Master/tax/GetTaxType`)
    expect(res).toEqual([
      {
        des1: 'บุคคล',
      },
    ])
  })

  it('should call api getVatChoiceList status is 200', async () => {
    const response = {
      status: 200,
      data: {
        des1: 'จดทะเบียน - สำนักงานใหญ่',
      },
    }

    api.get.mockResolvedValue(response)
    const res = await getVatChoiceList()

    expect(api.get).toHaveBeenCalledWith(`${URL}/api/Master/tax/GetVatChoice`)
    expect(res).toEqual({
      des1: 'จดทะเบียน - สำนักงานใหญ่',
    })
  })
})
