import { forwardRef } from 'react';
import styles from './Typography.module.css';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';

type TypographyColor = 'default' | 'primary' | 'muted' | 'destructive';

const variantElementMap: Record<TypographyVariant, keyof React.JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  p: 'p',
};

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  /** Typographic style variant */
  variant?: TypographyVariant;
  /** Text color */
  color?: TypographyColor;
  /** Override the rendered HTML element */
  as?: keyof React.JSX.IntrinsicElements;
}

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ variant = 'p', color = 'default', as, className, children, ...props }, ref) => {
    const Component = (as ?? variantElementMap[variant]) as React.ElementType;

    return (
      <Component
        ref={ref}
        className={[
          styles[variant],
          color !== 'default' ? styles[`color--${color}`] : undefined,
          className,
        ].filter(Boolean).join(' ')}
        {...props}
      >
        {children}
      </Component>
    );
  },
);
Typography.displayName = 'Typography';