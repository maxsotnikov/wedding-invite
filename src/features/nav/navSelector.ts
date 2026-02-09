import type {RootState} from '@/app/store/store.ts';
import type {NavState} from '@/widgets/header/ui/navigation/Nav.tsx';

export const selectNav = (state: RootState): NavState => state.nav
