import { ORDER_FIELD, NOTICE_FIELD } from './productOrder'

const fakeLocalStorage = (function () {
  let store = {}

  return {
    getItem: function (key) {
      return store[key] || null
    },
    setItem: function (key, value) {
      store[key] = value.toString()
    },
    removeItem: function (key) {
      delete store[key]
    },
    clear: function () {
      store = {}
    },
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: fakeLocalStorage,
})

describe('utils productOrder', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should call ORDER_FIELD return value', async () => {
    localStorage.setItem('userData', '{"user_id":"user_id", "name":"name", "surname":"surname"}')

    const productData = {
      order_items: [
        {
          submit_motor2_a_front: {
            addr_province: 'name',
            plc_pfund: '11111',
            pext4: 'W',
            fext4: 'W',
            inf_cdate: '10/10/2023',
            inf_sdate: '10/10/2023',
            plc_psdate: '10/10/2023',
            plc_pedate: '10/10/2023',
          },
        },
      ],
      order_status_code: '001',
    }

    const provinceList = [
      {
        amp_chw_name: 'name',
      },
    ]

    const userInfo = {
      name: 'name',
      surname: 'surname',
    }

    ORDER_FIELD(productData, provinceList, userInfo)
  })

  it('should call NOTICE_FIELD return value', async () => {
    localStorage.setItem('userData', '{"user_id":"user_id", "name":"name", "surname":"surname"}')

    const productData = {
      order_items: [
        {
          submit_motor2_a_front: {
            addr_province: 'name',
            plc_pfund: '11111',
            pext4: 'W',
            fext4: 'W',
            inf_cdate: '10/10/2023',
            inf_sdate: '10/10/2023',
            plc_psdate: '10/10/2023',
            plc_pedate: '10/10/2023',
          },
        },
      ],
      order_status_code: '001',
    }

    const provinceList = [
      {
        amp_chw_name: 'name',
      },
    ]

    NOTICE_FIELD(productData, provinceList)
  })
})
