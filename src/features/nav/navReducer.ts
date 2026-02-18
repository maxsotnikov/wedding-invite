import {createAction, createReducer} from '@reduxjs/toolkit';
import type {NavItem, NavState} from '@/widgets/header/ui/navigation/Nav.tsx';
import {ROUTES} from '@/shared/config/routes.ts';

export const setNavItemAC = createAction<{items: NavItem[]}>('nav/setNavItem')

export const initialState: NavState = {
  items: [
    {id: 'home', title: 'Главная', link: ROUTES.home},
    {id: 'info', title: 'Информация', link: ROUTES.info},
    {id: 'story', title: 'Наша история', link: ROUTES.ourStory},
  ]
}

export const navReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setNavItemAC, (state, action) => {
      state.items = action.payload.items;
    })
})

