import { TOGGLE_DRAWER } from '../@constants/action-types';

export function toggleDrawer(payload) {
    return { type: TOGGLE_DRAWER, payload }
}