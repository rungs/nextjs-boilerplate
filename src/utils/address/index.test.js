import { mapProvince, getProvinceId, getAmphurId, checkIsCurrentAddress } from './index'

describe('utils address', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Call function mapProvince return value', () => {
    const provinceList = [{ id: 1, name: 'mock', amp_chw_name: 'mock', chw_cd: 'mock' }]
    const provinceName = 'mock'

    const value = mapProvince(provinceList, provinceName)

    expect(value).toEqual({ amp_chw_name: 'mock', chw_cd: 'mock' })
  })

  it('Call function getProvinceId return value', () => {
    const provinceList = [{ id: 1, name: 'mock', amp_chw_name: 'mock', chw_cd: 'mock' }]
    const provinceName = 'mock'

    const value = getProvinceId(provinceList, provinceName)

    expect(value).toEqual('mock')
  })

  it('Call function getAmphurId return value', () => {
    const amphurList = [{ id: 1, amp_chw_name: 'mock', amp_cd: 'mock' }]
    const amphurName = 'mock'

    const value = getAmphurId(amphurList, amphurName)

    expect(value).toEqual('mock')
  })

  it('Call function checkIsCurrentAddress return value false case type = 1', () => {
    const productData = {
      order_items: [
        {
          submit_motor2_a_front: {
            addr_addr1: 'addr_addr1',
            addr_addr2: 'addr_addr2',
            addr_addr3: 'addr_addr3',
            addr_province: 'addr_province',
            addr_amphur: 'addr_amphur',
            addr5_addr1: 'addr5_addr1',
            addr5_addr2: 'addr5_addr2',
            addr5_addr3: 'addr5_addr3',
            addr5_province: 'addr5_province',
            addr5_amphur: 'addr5_amphur',
          },
        },
      ],
    }
    const isOrder = true
    const type = '1'

    const value = checkIsCurrentAddress(productData, isOrder, type)

    expect(value).toEqual(false)
  })

  it('Call function checkIsCurrentAddress return value true case type = 1', () => {
    const productData = {
      order_items: [
        {
          submit_motor2_a_front: {
            addr_addr1: 'addr_addr1',
            addr_addr2: 'addr_addr2',
            addr_addr3: 'addr_addr3',
            addr_province: 'addr_province',
            addr_amphur: 'addr_amphur',
            addr5_addr1: 'addr_addr1',
            addr5_addr2: 'addr_addr2',
            addr5_addr3: 'addr_addr3',
            addr5_province: 'addr_province',
            addr5_amphur: 'addr_amphur',
          },
        },
      ],
    }
    const isOrder = true
    const type = '1'

    const value = checkIsCurrentAddress(productData, isOrder, type)

    expect(value).toEqual(true)
  })

  it('Call function checkIsCurrentAddress return value false case type = 1 and isOrder = false', () => {
    const productData = {
      rn_addr1: 'addr_addr1',
      rn_addr2: 'addr_addr2',
      rn_addr3: 'addr_addr3',
      rn_changwat: 'addr_province',
      rn_amphor: 'addr_amphur',
      rn_send_addr1: 'addr5_addr1',
      rn_send_addr2: 'addr5_addr2',
      rn_send_addr3: 'addr5_addr3',
      rn_send_chw: 'addr5_province',
      rn_send_amp: 'addr5_amphur',
    }
    const isOrder = false
    const type = '1'

    const value = checkIsCurrentAddress(productData, isOrder, type)

    expect(value).toEqual(false)
  })

  it('Call function checkIsCurrentAddress return value true case type = 1 and isOrder = false', () => {
    const productData = {
      rn_addr1: 'addr_addr1',
      rn_addr2: 'addr_addr2',
      rn_addr3: 'addr_addr3',
      rn_changwat: 'addr_province',
      rn_amphor: 'addr_amphur',
      rn_send_addr1: 'addr_addr1',
      rn_send_addr2: 'addr_addr2',
      rn_send_addr3: 'addr_addr3',
      rn_send_chw: 'addr_province',
      rn_send_amp: 'addr_amphur',
    }
    const isOrder = false
    const type = '1'

    const value = checkIsCurrentAddress(productData, isOrder, type)

    expect(value).toEqual(true)
  })

  it('Call function checkIsCurrentAddress return value false case type = 2', () => {
    const productData = {
      order_items: [
        {
          submit_motor2_a_front: {
            addr_addr1: 'addr_addr1',
            addr_addr2: 'addr_addr2',
            addr_addr3: 'addr_addr3',
            addr_province: 'addr_province',
            addr_amphur: 'addr_amphur',
            addr6_addr1: 'addr5_addr1',
            addr6_addr2: 'addr6_addr2',
            addr6_addr3: 'addr6_addr3',
            addr6_province: 'addr6_province',
            addr6_amphur: 'addr6_amphur',
          },
        },
      ],
    }
    const isOrder = true
    const type = '2'

    const value = checkIsCurrentAddress(productData, isOrder, type)

    expect(value).toEqual(false)
  })

  it('Call function checkIsCurrentAddress return value true case type = 2', () => {
    const productData = {
      order_items: [
        {
          submit_motor2_a_front: {
            addr_addr1: 'addr_addr1',
            addr_addr2: 'addr_addr2',
            addr_addr3: 'addr_addr3',
            addr_province: 'addr_province',
            addr_amphur: 'addr_amphur',
            addr6_addr1: 'addr_addr1',
            addr6_addr2: 'addr_addr2',
            addr6_addr3: 'addr_addr3',
            addr6_province: 'addr_province',
            addr6_amphur: 'addr_amphur',
          },
        },
      ],
    }
    const isOrder = true
    const type = '2'

    const value = checkIsCurrentAddress(productData, isOrder, type)

    expect(value).toEqual(true)
  })

  it('Call function checkIsCurrentAddress return value true case type = 2 and isOrder = false', () => {
    const productData = {
      order_items: [
        {
          submit_motor2_a_front: {
            addr_addr1: 'addr_addr1',
            addr_addr2: 'addr_addr2',
            addr_addr3: 'addr_addr3',
            addr_province: 'addr_province',
            addr_amphur: 'addr_amphur',
            addr6_addr1: 'addr5_addr1',
            addr6_addr2: 'addr6_addr2',
            addr6_addr3: 'addr6_addr3',
            addr6_province: 'addr6_province',
            addr6_amphur: 'addr6_amphur',
          },
        },
      ],
    }
    const isOrder = false
    const type = '2'

    const value = checkIsCurrentAddress(productData, isOrder, type)

    expect(value).toEqual(true)
  })
})
