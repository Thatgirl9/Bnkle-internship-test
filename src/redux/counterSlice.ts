import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Create an object type for initial state
interface CardCounterState {
  clicks: { [key: string]: number };
  titles: { [key: string]: string };
}

// Create a state
const initialState: CardCounterState = {
  clicks: {},
  titles: {},
};

// Create a slice that includes the initial state and reducer. Slice produces an action creator
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
