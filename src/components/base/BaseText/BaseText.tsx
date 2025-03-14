import { ComponentProps, ElementType, ReactNode } from 'react';
import s from './BaseText.module.scss';

type OwnProps<E extends ElementType = ElementType> = {
  children: ReactNode | ReactNode[];
  className?: string;
  as?: E;
};

type Props<E extends ElementType> = OwnProps<E> &
  Omit<ComponentProps<E>, keyof OwnProps>;

const defaultElement = 'h1';

export default function BaseText<
  E extends ElementType = typeof defaultElement
>({ children, className = '', as, ...otherProps }: Props<E>) {
  const TagName = as || defaultElement;

  return (
    <div className={`${className}`} {...otherProps}>
      <TagName className={`${s.Text} ${s['Text_' + TagName]}`}>
        {children}
      </TagName>
    </div>
  );
}
