export const MARK_AS_READ = "MARK_AS_READ";
export const SET_TYPE_FILTER = "SET_TYPE_FILTER";
export const SHOW_NOTIFICATION_DRAWER = "SHOW_NOTIFICATION_DRAWER";
export const HIDE_NOTIFICATION_DRAWER = "HIDE_NOTIFICATION_DRAWER";

export function markNotificationAsRead(id) {
  return { type: MARK_AS_READ, index: id };
}

export function setNotificationFilter(filter) {
  return { type: SET_TYPE_FILTER, filter };
}

export function showNotificationDrawer() {
  return { type: SHOW_NOTIFICATION_DRAWER };
}

export function hideNotificationDrawer() {
  return { type: HIDE_NOTIFICATION_DRAWER };
}
