import { TABLE_SEARCH_HEADER } from './searchHeader'

describe('TABLE_SEARCH_HEADER', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Call function TABLE_SEARCH_HEADER for renders table header', () => {
    const tableHeader = TABLE_SEARCH_HEADER()

    tableHeader[0].valueGetter({
      row: { order_status_code: 'code', notice_status_code: 'notice' },
    })
    tableHeader[1].valueGetter({ value: 'value 1' })
    tableHeader[2].valueGetter({ value: 'value 2' })
    tableHeader[3].valueGetter({ value: 'value 3' })
    tableHeader[4].valueGetter({ value: '10/12/2000' })
    tableHeader[5].valueGetter({ value: '10/12/2000' })
    tableHeader[6].valueGetter({
      value: 'value 4',
      row: { order_status_code: 'code', submit: { atm_reg: 'atm_reg' } },
    })
    tableHeader[7].valueGetter({ value: 'value 5' })
    tableHeader[8].valueGetter({
      value: '10/12/2000',
      row: { order_status_code: 'code', submit: { addr_tel: 'atm_reg' } },
    })
    tableHeader[9].valueGetter({ value: '1,000.00' })
    tableHeader[10].valueGetter({ value: '1,000.00' })
    tableHeader[11].valueGetter({
      row: { rn_net_prmm: 1000, rn_new_svctax: 1000, rn_new_stamp: 1000 },
    })
    tableHeader[12].valueGetter({ value: '1,000.00' })
    tableHeader[13].valueGetter({ value: '1,000.00' })
    tableHeader[14].valueGetter({ value: '1,000.00' })
    tableHeader[15].valueGetter({
      row: { submit: { inf_minor: 'inf_minor' }, rn_intm_type: 'rn_intm_type' },
    })
    tableHeader[16].valueGetter({ value: 'value 6' })
    tableHeader[17].valueGetter({ value: 'value 7' })
    tableHeader[18].valueGetter({
      row: { submit: { inf_prmm_date: '10/12/2000' } },
    })
    tableHeader[19].valueGetter({
      row: { submit: { ext10: 'ext10' } },
    })

    expect(tableHeader).toBeDefined()
  })

  it('Call function TABLE_SEARCH_HEADER for renders table header case value null', () => {
    const tableHeader = TABLE_SEARCH_HEADER()

    tableHeader[0].valueGetter({
      row: { order_status_code: null, notice_status_code: 'notice' },
    })
    tableHeader[1].valueGetter({ value: null })
    tableHeader[2].valueGetter({ value: null })
    tableHeader[3].valueGetter({ value: null })
    tableHeader[4].valueGetter({ value: '10/12/2000' })
    tableHeader[5].valueGetter({ value: '10/12/2000' })
    tableHeader[6].valueGetter({
      value: 'value 4',
      row: { order_status_code: 'code', submit: { atm_reg: null } },
    })
    tableHeader[7].valueGetter({ value: null })
    tableHeader[8].valueGetter({
      value: '10/12/2000',
      row: { order_status_code: 'code', submit: { addr_tel: null } },
    })
    tableHeader[9].valueGetter({ value: null })
    tableHeader[10].valueGetter({ value: null })
    tableHeader[11].valueGetter({
      row: null,
    })
    tableHeader[12].valueGetter({ value: null })
    tableHeader[13].valueGetter({ value: null })
    tableHeader[14].valueGetter({ value: null })
    tableHeader[15].valueGetter({
      row: { submit: { inf_minor: null }, rn_intm_type: 'rn_intm_type' },
    })
    tableHeader[16].valueGetter({ value: null })
    tableHeader[17].valueGetter({ value: null })
    tableHeader[18].valueGetter({
      row: { submit: { inf_prmm_date: null } },
    })
    tableHeader[19].valueGetter({
      row: { submit: { ext10: null } },
    })

    expect(tableHeader).toBeDefined()
  })

  it('Call function TABLE_SEARCH_HEADER for renders table header case rn_regis_no and rn_ins_phone return value', () => {
    const tableHeader = TABLE_SEARCH_HEADER()

    tableHeader[6].valueGetter({
      value: 'value 4',
      row: { order_status_code: null, submit: { atm_reg: null } },
    })
    tableHeader[8].valueGetter({
      value: '10/12/2000',
      row: { order_status_code: null, submit: { addr_tel: null } },
    })
    tableHeader[15].valueGetter({
      row: { submit: { inf_minor: null }, rn_intm_type: null },
    })

    expect(tableHeader).toBeDefined()
  })

  it('Call function TABLE_SEARCH_HEADER for renders table header case rn_regis_no and rn_ins_phone value null', () => {
    const tableHeader = TABLE_SEARCH_HEADER()

    tableHeader[6].valueGetter({
      value: null,
      row: { order_status_code: null, submit: { atm_reg: null } },
    })
    tableHeader[8].valueGetter({
      value: null,
      row: { order_status_code: null, submit: { addr_tel: null } },
    })

    expect(tableHeader).toBeDefined()
  })
})
