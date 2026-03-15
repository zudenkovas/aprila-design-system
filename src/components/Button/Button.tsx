import { useRef } from 'react';
import styles from './Button.module.css';
import {type MouseEvent} from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: 'primary' | 'danger' | 'outline' | 'secondary' | 'ghost' | 'link';
  /** How large should the button be? */
  size?: 'sm' | 'md' | 'lg';
  /** Button contents */
  label: string;
}

/** Primary UI component for user interaction */
export const Button = ({
  variant = 'primary',
  size = 'md',
  label,
  className,
  onClick,
  ...props
}: ButtonProps) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
     const button = buttonRef.current;
  if (button) {
    const rect = button.getBoundingClientRect();
    const diameter = Math.max(rect.width, rect.height);

    // Keyboard clicks have clientX/clientY = 0 — center the ripple
    const isKeyboard = e.clientX === 0 && e.clientY === 0;
    const x = isKeyboard ? (rect.width - diameter) / 2 : e.clientX - rect.left - diameter / 2;
    const y = isKeyboard ? (rect.height - diameter) / 2 : e.clientY - rect.top - diameter / 2;

    const ripple = document.createElement('span');
    ripple.className = styles.ripple;
    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    button.appendChild(ripple);

    ripple.addEventListener('animationend', () => ripple.remove());
  }
  onClick?.(e);
  };
  return (
    <button
      type="button"
      ref={buttonRef}
      className={[
        styles.button,
        styles[`variant--${variant}`],
        styles[`size--${size}`],
        className,
      ].filter(Boolean).join(' ')}
      onClick={handleClick}
      {...props}
    >
      {label}
    </button>
  );
};


