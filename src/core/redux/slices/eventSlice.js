import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
  loading: false,
  error: null,
  selectedEvent: null,
};

const eventsSlice = createSlice({
  name: "events",
  initialState: initialState,
  reducers: {
    setEvents: (state, action) => {
      return { ...state, events: action.payload };
    },
    setSelectedEvent: (state, action) => {
      return { ...state, selectedEvent: action.payload };
    },
  },
});

export const { setEvents, setSelectedEvent } = eventsSlice.actions;

export default eventsSlice.reducer;
