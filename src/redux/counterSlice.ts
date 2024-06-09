import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CardCounterState {
  clicks: { [key: string]: number };
  titles: { [key: string]: string };
}

const initialState: CardCounterState = {
  clicks: {},
  titles: {},
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementClick: (state, action: PayloadAction<string>) => {
      const cardId = action.payload;
      if (!state.clicks[cardId]) {
        state.clicks[cardId] = 0;
      }
      state.clicks[cardId]++;
    },

    cardTitles: (
      state,
      action: PayloadAction<{ id: string; title: string }[]>
    ) => {
      action.payload.forEach(({ id, title }) => {
        state.titles[id] = title;
      });
    },
  },
});

export default counterSlice.reducer;
export const { incrementClick, cardTitles } = counterSlice.actions;
