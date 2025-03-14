import React, { ReactNode, useEffect, useState } from 'react';
import { BasePortal } from '..';
import s from './BasePopup.module.scss';
import { useMount } from 'hooks/useMount';

interface Props {
  children: ReactNode | ReactNode[];
  className?: string;
  opened: boolean;
  onClick: (value: boolean) => void;
}

const BasePopup: React.FC<Props> = ({
  children,
  className = '',
  opened,
  onClick,
}) => {
  useEffect(() => {
    function onKeyDown(event: any) {
      if (event.keyCode === 27) {
        onClick(false);
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onClick]);

  useEffect(() => {
    if (opened) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
    }
  }, [opened]);

  const { mounted } = useMount({ opened });
  const [animationIn, setAnimationIn] = useState(mounted);

  useEffect(() => {
    setTimeout(() => {
      setAnimationIn(opened);
    }, 100);
  }, [opened]);

  if (!mounted) {
    return null;
  }

  return (
    <BasePortal>
      <div className={`${s.Popup} ${animationIn ? s.Popup_Visible : ''}`}>
        <div className={s.Popup_Overlay} onClick={() => onClick(false)}></div>

        <div className={`${s.Popup_Content} ${className}`}>
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={s.Popup_Close}
            onClick={() => onClick(false)}
          >
            <path
              d="M22.4226 20.0009L28.4771 13.9447C28.6407 13.7867 28.7712 13.5977 28.8609 13.3887C28.9507 13.1798 28.998 12.955 28.9999 12.7276C29.0019 12.5002 28.9586 12.2747 28.8725 12.0642C28.7863 11.8537 28.6592 11.6625 28.4984 11.5016C28.3375 11.3408 28.1463 11.2137 27.9358 11.1275C27.7253 11.0414 27.4998 10.9981 27.2724 11.0001C27.045 11.002 26.8202 11.0493 26.6113 11.1391C26.4023 11.2288 26.2133 11.3593 26.0553 11.5229L19.9991 17.5774L13.9447 11.5229C13.7867 11.3593 13.5977 11.2288 13.3887 11.1391C13.1798 11.0493 12.955 11.002 12.7276 11.0001C12.5002 10.9981 12.2747 11.0414 12.0642 11.1275C11.8537 11.2137 11.6625 11.3408 11.5016 11.5016C11.3408 11.6625 11.2137 11.8537 11.1275 12.0642C11.0414 12.2747 10.9981 12.5002 11.0001 12.7276C11.002 12.955 11.0493 13.1798 11.1391 13.3887C11.2288 13.5977 11.3593 13.7867 11.5229 13.9447L17.5774 19.9991L11.5229 26.0553C11.3593 26.2133 11.2288 26.4023 11.1391 26.6113C11.0493 26.8202 11.002 27.045 11.0001 27.2724C10.9981 27.4998 11.0414 27.7253 11.1275 27.9358C11.2137 28.1463 11.3408 28.3375 11.5016 28.4984C11.6625 28.6592 11.8537 28.7863 12.0642 28.8725C12.2747 28.9586 12.5002 29.0019 12.7276 28.9999C12.955 28.998 13.1798 28.9507 13.3887 28.8609C13.5977 28.7712 13.7867 28.6407 13.9447 28.4771L19.9991 22.4226L26.0553 28.4771C26.2133 28.6407 26.4023 28.7712 26.6113 28.8609C26.8202 28.9507 27.045 28.998 27.2724 28.9999C27.4998 29.0019 27.7253 28.9586 27.9358 28.8725C28.1463 28.7863 28.3375 28.6592 28.4984 28.4984C28.6592 28.3375 28.7863 28.1463 28.8725 27.9358C28.9586 27.7253 29.0019 27.4998 28.9999 27.2724C28.998 27.045 28.9507 26.8202 28.8609 26.6113C28.7712 26.4023 28.6407 26.2133 28.4771 26.0553L22.4226 19.9991V20.0009Z"
              fill="#EA0029"
            />
          </svg>

          {children}
        </div>
      </div>
    </BasePortal>
  );
};

export default BasePopup;
