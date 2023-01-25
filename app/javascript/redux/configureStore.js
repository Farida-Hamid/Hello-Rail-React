import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greetings';

const store = configureStore({
  reducer: { greeting: greetingsReducer},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;