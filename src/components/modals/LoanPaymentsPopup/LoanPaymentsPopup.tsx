import React from 'react';
import s from './LoanPaymentsPopup.module.scss';
import { BaseButton, BasePopup } from 'base/index';

interface Props {
  title: string;
  subtitle?: string;
  success_btn_title?: string;
  opened: boolean;
  onClick: (value: boolean) => void;
  onClick2: (ev: React.MouseEvent<HTMLElement>) => void;
}

const LoanPaymentsPopup: React.FC<Props> = ({ opened, onClick, onClick2 }) => {
  return (
    <BasePopup opened={opened} onClick={onClick} className={s.Popup}>
      <h1>Платежи по кредиту</h1>

      <BaseButton className={s.Button} onClick={onClick2}>
        Добавить
      </BaseButton>
    </BasePopup>
  );
};

export default LoanPaymentsPopup;
