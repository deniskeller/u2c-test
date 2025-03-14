import s from './BaseButton.module.scss';
import { ComponentProps, ElementType, ReactNode } from 'react';

type ButtonOwnProps<E extends ElementType = ElementType> = {
  children: string | ReactNode | ReactNode[];
  variant?: string;
  size?: string;
  disabled?: boolean;
  className?: string;
  onClick?: (ev: React.MouseEvent<HTMLElement>) => void;
  as?: E;
};

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps>;

const defaultElement = 'button';

export default function Button<E extends ElementType = typeof defaultElement>({
  children,
  disabled = false,
  variant = 'default',
  color = 'default',
  size = 'default',
  className = '',
  onClick,
  as,
  ...otherProps
}: ButtonProps<E>) {
  const TagName = as || defaultElement;

  return (
    <TagName
      className={`${s.Button} ${s['Button_Variant_' + variant]} ${
        s['Button_Variant_' + variant + '_' + color]
      } ${s['Button_' + size]} ${className}`}
      {...otherProps}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </TagName>
  );
}
