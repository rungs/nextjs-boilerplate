import { DirectionsCar, FindInPage, DocumentScanner, Difference } from '@mui/icons-material'
import {
  premiumQuotationSliceReducer as reducer,
  setActiveStep,
  setSearchParam,
  setSearchPlan,
  setSelectedPlan,
  resetSelectedPlan,
  setQuotationSearchPayload,
  setDefaultInsurnaceType,
  setDefaultTypeOfRepair,
  setConditionId,
  setSelectedAct,
  resetSelectedAct,
  setSelectedTopup,
  resetSelectedTopup,
  setSwitchActContent,
  setSwitchTopupContent,
  setActContentHeader,
  setTopupContentHeader,
  setActContent,
  setTopupContent,
  resetAct,
  resetTopup,
  setComparePlan,
  resetComparePlan,
  matchComparePlan,
  setAdditionalAct,
  resetAdditionalAct,
  setOrderBy,
  setTransId,
  setRestoreSearch,
  setCreateQuotationPayload,
  setRestoreQuotationInfo,
  setUploadSearchPayload,
  resetUploadSearchPayload,
} from '../index'

const initialState = {
  steps: [
    {
      id: 1,
      label: 'premium_quotation.menu.create.form.identify_your_car.title',
      icon: DirectionsCar,
    },
    {
      id: 2,
      label: 'premium_quotation.menu.create.form.insurance_plan.title',
      icon: FindInPage,
    },
    {
      id: 3,
      label: 'premium_quotation.menu.create.form.your_insurance_plan.title',
      icon: DocumentScanner,
    },
    {
      id: 4,
      label: 'premium_quotation.menu.create.form.compare_premium.title',
      icon: Difference,
    },
  ],
  activeStep: {
    id: 1,
    label: 'premium_quotation.menu.create.form.identify_your_car.title',
    icon: DirectionsCar,
  },
  activeStepIndex: 0,
  searchPayload: {},
  searchParam: null,
  searchPlan: [],
  selectedPlan: [],
  defaultInsuranceType: [],
  defaultTypeOfRepair: [],
  conditionId: '',
  transId: [],
  selectedAct: [],
  switchActContent: false,
  actContentHeader: null,
  actContent: null,
  selectedTopup: [],
  switchTopupContent: false,
  topupContentHeader: null,
  topupContent: null,
  comparePlan: [],
  additionalAct: [],
  orderBy: 'TYPE', // TYPE, PRICE
  restoreSearch: false,
  createQuotationPayload: {},
  restoreQuotationInfo: false,
  uploadSearchPayload: {},
}

describe('tests for premiumQuotationSliceReducer', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should set activeStepIndex and activeStep to state', () => {
    const action = { type: setActiveStep.type, payload: 1 }
    const nextState = reducer(initialState, action)

    expect(nextState.activeStepIndex).toEqual(1)
    expect(nextState.activeStep).toEqual({
      id: 2,
      label: 'premium_quotation.menu.create.form.insurance_plan.title',
      icon: FindInPage,
    })
  })

  it('should set searchParam to state', () => {
    const action = { type: setSearchParam.type, payload: 'mock-search' }
    const nextState = reducer(initialState, action)

    expect(nextState.searchParam).toEqual('mock-search')
  })

  it('should set searchPayload to state', () => {
    const action = { type: setQuotationSearchPayload.type, payload: 'mock-search' }
    const nextState = reducer(initialState, action)

    expect(nextState.searchPayload).toEqual('mock-search')
  })

  it('should set searchPlan to state', () => {
    const action = { type: setSearchPlan.type, payload: 'mock-search' }
    const nextState = reducer(initialState, action)

    expect(nextState.searchPlan).toEqual('mock-search')
  })

  it('should set selectedPlan to state', () => {
    const action = { type: resetSelectedPlan.type }
    const nextState = reducer(initialState, action)

    expect(nextState.selectedPlan).toEqual([])
  })

  it('should set defaultInsuranceType to state', () => {
    const action = { type: setDefaultInsurnaceType.type, payload: ['mock-search'] }
    const nextState = reducer(initialState, action)

    expect(nextState.defaultInsuranceType).toEqual(['mock-search'])
  })

  it('should set defaultTypeOfRepair to state', () => {
    const action = { type: setDefaultTypeOfRepair.type, payload: ['mock-search'] }
    const nextState = reducer(initialState, action)

    expect(nextState.defaultTypeOfRepair).toEqual(['mock-search'])
  })

  it('should set conditionId to state', () => {
    const action = { type: setConditionId.type, payload: 'mock-condition' }
    const nextState = reducer(initialState, action)

    expect(nextState.conditionId).toEqual('mock-condition')
  })

  it('should set selectedAct to state', () => {
    const action = { type: resetSelectedAct.type }
    const nextState = reducer(initialState, action)

    expect(nextState.selectedAct).toEqual([])
  })

  it('should set selectedTopup to state', () => {
    const action = { type: resetSelectedTopup.type }
    const nextState = reducer(initialState, action)

    expect(nextState.selectedTopup).toEqual([])
  })

  it('should set switchActContent to state', () => {
    const action = { type: setSwitchActContent.type, payload: true }
    const nextState = reducer(initialState, action)

    expect(nextState.switchActContent).toEqual(true)
  })

  it('should set actContentHeader to state', () => {
    const action = { type: setActContentHeader.type, payload: 'mock-header' }
    const nextState = reducer(initialState, action)

    expect(nextState.actContentHeader).toEqual('mock-header')
  })

  it('should set actContent to state', () => {
    const action = { type: setActContent.type, payload: 'mock-content' }
    const nextState = reducer(initialState, action)

    expect(nextState.actContent).toEqual('mock-content')
  })

  it('should set switchTopupContent to state', () => {
    const action = { type: setSwitchTopupContent.type, payload: true }
    const nextState = reducer(initialState, action)

    expect(nextState.switchTopupContent).toEqual(true)
  })

  it('should set topupContentHeader to state', () => {
    const action = { type: setTopupContentHeader.type, payload: 'mock-header' }
    const nextState = reducer(initialState, action)

    expect(nextState.topupContentHeader).toEqual('mock-header')
  })

  it('should set topupContent to state', () => {
    const action = { type: setTopupContent.type, payload: 'mock-content' }
    const nextState = reducer(initialState, action)

    expect(nextState.topupContent).toEqual('mock-content')
  })

  it('should set resetAct to state', () => {
    const action = { type: resetAct.type }
    const nextState = reducer(initialState, action)

    expect(nextState.switchActContent).toEqual(false)
    expect(nextState.actContentHeader).toEqual(null)
    expect(nextState.actContent).toEqual(null)
  })

  it('should set resetTopup to state', () => {
    const action = { type: resetTopup.type }
    const nextState = reducer(initialState, action)

    expect(nextState.switchTopupContent).toEqual(false)
    expect(nextState.topupContent).toEqual(null)
    expect(nextState.topupContentHeader).toEqual(null)
  })

  it('should set comparePlan [] to state', () => {
    const action = { type: resetComparePlan.type }
    const nextState = reducer(initialState, action)

    expect(nextState.comparePlan).toEqual([])
  })

  it('should set comparePlan to state', () => {
    const action = { type: matchComparePlan.type }
    const nextState = reducer(initialState, action)

    expect(nextState.comparePlan).toEqual([])
  })

  it('should set additionalAct [] to state', () => {
    const action = { type: resetAdditionalAct.type }
    const nextState = reducer(initialState, action)

    expect(nextState.additionalAct).toEqual([])
  })

  it('should set additionalAct to state', () => {
    const action = { type: setAdditionalAct.type, payload: ['mock-content'] }
    const nextState = reducer(initialState, action)

    expect(nextState.additionalAct).toEqual(['mock-content'])
  })

  it('should set orderBy to state', () => {
    const action = { type: setOrderBy.type, payload: 'mock-orderBy' }
    const nextState = reducer(initialState, action)

    expect(nextState.orderBy).toEqual('mock-orderBy')
  })

  it('should set transId to state', () => {
    const action = { type: setTransId.type, payload: 'mock-transId' }
    const nextState = reducer(initialState, action)

    expect(nextState.transId).toEqual('mock-transId')
  })

  it('should set restoreSearch to state', () => {
    const action = { type: setRestoreSearch.type, payload: 'mock-restoreSearch' }
    const nextState = reducer(initialState, action)

    expect(nextState.restoreSearch).toEqual('mock-restoreSearch')
  })

  it('should set createQuotationPayload to state', () => {
    const action = { type: setCreateQuotationPayload.type, payload: 'mock-createQuotationPayload' }
    const nextState = reducer(initialState, action)

    expect(nextState.createQuotationPayload).toEqual('mock-createQuotationPayload')
  })

  it('should set restoreQuotationInfo to state', () => {
    const action = { type: setRestoreQuotationInfo.type, payload: 'mock-restoreQuotationInfo' }
    const nextState = reducer(initialState, action)

    expect(nextState.restoreQuotationInfo).toEqual('mock-restoreQuotationInfo')
  })

  it('should set uploadSearchPayload to state', () => {
    const action = { type: setUploadSearchPayload.type, payload: 'mock-uploadSearchPayload' }
    const nextState = reducer(initialState, action)

    expect(nextState.uploadSearchPayload).toEqual('mock-uploadSearchPayload')
  })

  it('should set uploadSearchPayload {} to state', () => {
    const action = { type: resetUploadSearchPayload.type }
    const nextState = reducer(initialState, action)

    expect(nextState.uploadSearchPayload).toEqual({})
  })

  it('should call setSelectedPlan for set selectedPlan to state', () => {
    const state = {
      ...initialState,
      selectedPlan: [{ id: 'mock-id' }],
      selectedTopup: [{ groupId: 'groupId' }],
      selectedAct: [{ groupId: 'groupId' }],
    }

    const action = {
      type: setSelectedPlan.type,
      payload: { id: 'mock-id', groupId: 'mock-groupId' },
    }
    const nextState = reducer(state, action)

    expect(nextState.selectedPlan).toEqual([])
  })

  it('should call setSelectedPlan for set selectedPlan to state case selectedPlan []', () => {
    const action = {
      type: setSelectedPlan.type,
      payload: { id: 'id', groupId: 'groupId' },
    }
    const nextState = reducer(initialState, action)

    expect(nextState.selectedPlan).toEqual([{ id: 'id', groupId: 'groupId' }])
  })

  it('should call setSelectedAct for set selectedAct to state', () => {
    const state = {
      ...initialState,
      selectedAct: [{ id: 'mock-id', groupId: 'mock-groupId' }],
    }

    const action = {
      type: setSelectedAct.type,
      payload: { id: 'mock-id', groupId: 'mock-groupId' },
    }
    const nextState = reducer(state, action)

    expect(nextState.selectedAct).toEqual([])
  })

  it('should call setSelectedAct for set selectedAct to state case selectedAct []', () => {
    const action = {
      type: setSelectedAct.type,
      payload: { id: 'mock-id', groupId: 'mock-groupId' },
    }
    const nextState = reducer(initialState, action)

    expect(nextState.selectedAct).toEqual([{ id: 'mock-id', groupId: 'mock-groupId' }])
  })

  it('should call setSelectedTopup for set selectedTopup to state', () => {
    const state = {
      ...initialState,
      selectedTopup: [{ id: 'mock-id', groupId: 'mock-groupId' }],
    }

    const action = {
      type: setSelectedTopup.type,
      payload: { id: 'mock-id', groupId: 'mock-groupId' },
    }
    const nextState = reducer(state, action)

    expect(nextState.selectedTopup).toEqual([])
  })

  it('should call setSelectedTopup for set selectedTopup to state case selectedTopup []', () => {
    const action = {
      type: setSelectedTopup.type,
      payload: { id: 'mock-id', groupId: 'mock-groupId' },
    }
    const nextState = reducer(initialState, action)

    expect(nextState.selectedTopup).toEqual([{ id: 'mock-id', groupId: 'mock-groupId' }])
  })

  it('should call setComparePlan for set comparePlan to state', () => {
    const state = {
      ...initialState,
      comparePlan: [{ id: 'mock-id', groupId: 'mock-groupId' }],
      selectedAct: [{ id: 'id', groupId: 'mock-groupId' }],
      selectedTopup: [{ id: 'id', groupId: 'mock-groupId' }],
    }

    const action = {
      type: setComparePlan.type,
      payload: { id: 'mock-id', groupId: 'groupId' },
    }
    const nextState = reducer(state, action)

    expect(nextState.comparePlan).toEqual([])
  })

  it('should call setComparePlan for set comparePlan to state case comparePlan []', () => {
    const action = {
      type: setComparePlan.type,
      payload: { id: 'mock-id', groupId: 'groupId' },
    }
    const nextState = reducer(initialState, action)

    expect(nextState.comparePlan).toEqual([{ id: 'mock-id', groupId: 'groupId' }])
  })
})
