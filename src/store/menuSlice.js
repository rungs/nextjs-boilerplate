import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  isOpen: [],
  defaultId: 'default',
  opened: true,
  loading: false,
}

const telesaleSlice = createSlice({
  name: 'telesaleState',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setMenuOpen: (state, action) => {
      state.opened = action.payload
    },
    menuOpen: (state, action) => {
      const id = action?.payload
      state.isOpen = [id]
    },
  },
})

export const { setLoading, setMenuOpen, menuOpen } = telesaleSlice?.actions
export default telesaleSlice.reducer
