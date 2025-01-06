import { modalSliceReducer, setOpenModal, setOpenChildModal } from '../index'

const initialState = {
  open: false,
  top: '',
  left: '',
  width: '',
  message: '',
  handleClose: jest.fn(),
  onConfirm: jest.fn(),
  onClose: jest.fn(),
  customModal: null, // custom modal render function,
  childModal: {
    openChild: false,
    onConfirmChild: jest.fn(),
    onCloseChild: jest.fn(),
    componentChild: null,
  },
}

describe('tests for modalSliceReducer', () => {
  it('should setOpenModal', () => {
    const action = {
      type: setOpenModal.type,
      payload: {
        open: true,
        childModal: {
          openChild: false,
          onConfirmChild: jest.fn(),
          onCloseChild: jest.fn(),
          componentChild: null,
        },
      },
    }
    const nextState = modalSliceReducer(initialState, action)

    expect(nextState.open).toEqual(true)
  })

  it('should setOpenChildModal', () => {
    const action = {
      type: setOpenChildModal.type,
      payload: {
        openChild: true,
      },
    }
    const nextState = modalSliceReducer(initialState, action)

    expect(nextState.childModal.openChild).toEqual(true)
  })
})
