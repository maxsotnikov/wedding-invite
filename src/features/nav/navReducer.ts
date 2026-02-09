import {createAction, createReducer} from '@reduxjs/toolkit';
import type {NavItem, NavState} from '@/widgets/header/ui/navigation/Nav.tsx';

export const setNavItemAC = createAction<{items: NavItem[]}>('nav/setNavItem')

export const initialState: NavState = {
  items: [
    {id: 'info', title: 'Информация', link: '/info'},
    {id: 'history', title: 'Наша история', link: '/'},
  ]
}

export const navReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setNavItemAC, (state, action) => {
      state.items = action.payload.items;
    })
})

