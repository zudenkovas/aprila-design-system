import * as React from 'react';
import styles from './Input.module.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Floating label text */
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, id, ...props }, ref) => {
    if (!label) {
      return (
        <input
          id={id}
          type={type}
          className={[styles.input, className].filter(Boolean).join(' ')}
          ref={ref}
          {...props}
        />
      );
    }

    return (
      <div className={styles.wrapper}>
        <input
          id={id}
          type={type}
          className={[styles.input, styles.hasLabel, className].filter(Boolean).join(' ')}
          ref={ref}
          placeholder=" "
          {...props}
        />
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      </div>
    );
  },
);
Input.displayName = 'Input';