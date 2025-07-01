import styles from "./Button.module.scss";
import { classNames } from "@/utils";

type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary" | "ghost";
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export function Button({
  label = "Label",
  variant = "primary",
  disabled = false,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      className={classNames(styles.button, styles[`button--${variant}`])}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
}
