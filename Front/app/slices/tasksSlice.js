import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    // Autres réducteurs
  },
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
