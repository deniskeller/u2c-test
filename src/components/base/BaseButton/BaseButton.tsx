// import React, {
//   ComponentProps,
//   ElementType,
//   ReactNode,
//   forwardRef,
// } from 'react';
// import s from './BaseButton.module.scss';

// type OwnProps<E extends ElementType = ElementType> = {
//   children?: string | ReactNode | ReactNode[];
//   variant?: string;
//   size?: string;
//   disabled?: boolean;
//   className?: string;
//   onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
//   as?: E;
// };

// type Props<E extends ElementType> = OwnProps<E> &
//   Omit<ComponentProps<E>, keyof OwnProps>;

// const defaultElement = 'button';

// function BaseButton<E extends ElementType = typeof defaultElement>(
//   {
//     children,
//     disabled = false,
//     variant = 'primary',
//     size = 'default',
//     className = '',
//     onClick,
//     as,
//     ...otherProps
//   }: Props<E>,
//   ref: React.ForwardedRef<HTMLButtonElement>
// ) {
//   const TagName = as || defaultElement;

//   return (
//     <TagName
//       onClick={onClick}
//       disabled={disabled}
//       className={`${s.Button} ${s['Button_' + variant]} ${
//         s['Button_' + size]
//       } ${className}`}
//       ref={ref}
//       {...otherProps}
//     >
//       {children}
//     </TagName>
//   );
// }
// export default forwardRef(BaseButton);

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
  variant = 'primary',
  size = 'default',
  className = '',
  onClick,
  as,
  ...otherProps
}: ButtonProps<E>) {
  const TagName = as || defaultElement;

  return (
    <TagName
      className={`${s.Button} ${s['Button_' + variant]} ${
        s['Button_' + size]
      } ${className}`}
      {...otherProps}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </TagName>
  );
}
