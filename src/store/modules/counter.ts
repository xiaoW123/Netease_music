import { createSlice} from '@reduxjs/toolkit'


// 创建reducer片段
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 888
  },
  reducers: {
    addCounter(state, { payload}){
      state.counter = payload
    }
  }
})

export const { addCounter} = counterSlice.actions
export default counterSlice.reducer
