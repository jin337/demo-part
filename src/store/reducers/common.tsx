import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface StateProps {
  count: number
}
// 初始状态
const initialState: StateProps = {
  count: 1
}

export const common = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setCount: (state, action: PayloadAction<{ type: string, count: number }>) => {
      const { type, count } = action.payload;
      if (type === 'add') {
        state.count = count
      }
    }
  }
});

export const { setCount } = common.actions;
export default common.reducer;
