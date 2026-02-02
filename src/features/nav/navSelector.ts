import type {RootState} from '@/app/store/store.ts';
import type {NavState} from '@/features/nav/types.ts';

export const selectNav = (state: RootState): NavState => state.nav
