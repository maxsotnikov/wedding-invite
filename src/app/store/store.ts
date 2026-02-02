import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {navReducer} from '@/features/nav/navReducer.ts';

const rootReducer = combineReducers({
  nav: navReducer,
})

export const store = configureStore({
  reducer: rootReducer
});

// автоматическое определение типа всего объекта состояния
export type RootState = ReturnType<typeof store.getState>
// автоматическое определение типа метода dispatch
export type AppDispatch = typeof store.dispatch
