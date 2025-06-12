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

  // 🧠 Couleur conditionnelle
  const color = type === "default" ? "blue" : "red";

  return (
    <li
      style={{ color }}
      data-notification-type={type}
      onClick={handleClick}
      {...(html !== undefined && type === "urgent"
        ? { dangerouslySetInnerHTML: html }
        : {})}
    >
      {html === undefined && value}
    </li>
  );
});

export default NotificationItem;
