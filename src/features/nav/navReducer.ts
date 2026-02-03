import type {NavItem, NavState} from '@/features/nav/types.ts';
import {createAction, createReducer} from '@reduxjs/toolkit';

export const setNavItemAC = createAction<{items: NavItem[]}>('nav/setNavItem')

export const initialState: NavState = {
  items: [
    {id: 'info', title: 'Информация', link: '/', position: 'left'},
    {id: 'history', title: 'Наша история', link: '/', position: 'left'},
    {id: 'more', title: 'Подробнее', link: '/', position: 'right'},
    {id: 'fill', title: 'Регистрация', isButton: true, position: 'right', action: 'openForm'},
  ]
}

export const navReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setNavItemAC, (state, action) => {
      state.items = action.payload.items;
    })
})

