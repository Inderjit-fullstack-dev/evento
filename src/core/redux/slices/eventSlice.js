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
    addEvent: (state, action) => {
      return { ...state, events: [action.payload, ...state.events] };
    },
    deleteEvent: (state, action) => {
      return {
        ...state,
        events: state.events.filter((e) => e.id !== action.payload),
      };
    },
    updateEvent: (state, action) => {
      return {
        ...state,
        events: [
          ...state.events.filter((e) => e.id !== action.payload.id),
          action.payload,
        ],
      };
    },
  },
});

export const {
  setEvents,
  setSelectedEvent,
  addEvent,
  updateEvent,
  deleteEvent,
} = eventsSlice.actions;

export default eventsSlice.reducer;
