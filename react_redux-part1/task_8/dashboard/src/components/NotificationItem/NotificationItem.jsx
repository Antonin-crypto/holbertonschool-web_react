import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { markNotificationAsRead } from "../../features/notifications/notificationsSlice";

const NotificationItem = memo(function NotificationItem({ id }) {
  const dispatch = useDispatch();
  const notification = useSelector((state) =>
    state.notifications.notifications.find((notif) => notif.id === id)
  );
  if (!notification) return null;

  const { type, value, html } = notification;

  const handleClick = () => {
    dispatch(markNotificationAsRead(id));
  };

  const style = { color: type === "urgent" ? "red" : "blue" };

  return (
    <li
      style={style}
      data-notification-type={type}
      onClick={handleClick}
      {...(html ? { dangerouslySetInnerHTML: html } : {})}
    >
      {!html ? value : null}
    </li>
  );
});

export default NotificationItem;
