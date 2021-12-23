import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import "./alertify-popup.styles.scss";

export const successNotification = (message) => {
  alertify.set("notifier", "position", "top-right");
  alertify.set("notifier", "delay", 2);
  alertify.notify(message, "success");
};

export const errorNotification = (message) => {
  alertify.set("notifier", "position", "top-right");
  alertify.set("notifier", "delay", 2);
  alertify.error(message, "error");
};

export const infoNotification = (message) => {
  alertify.set("notifier", "position", "bottom-center");
  alertify.notify(message, 'info', 0);
};
