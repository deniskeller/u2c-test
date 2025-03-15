import React from 'react';
import s from './LoanPaymentsPopup.module.scss';
import { BaseButton, BasePopup, BaseRadioButton, BaseText } from 'base/index';

interface Props {
  title: string;
  subtitle?: string;
  success_btn_title?: string;
  opened: boolean;
  onClick: (value: boolean) => void;
  onClick2: (ev: React.MouseEvent<HTMLElement>) => void;
}

const LoanPaymentsPopup: React.FC<Props> = ({ opened, onClick, onClick2 }) => {
  const options = [
    { label: '12', value: '12' },
    { label: '24', value: '24' },
    { label: '36', value: '36' },
    {
      label: '48',
      value: '48',
      // disabled: true
    },
  ];

  const handleRadioChange = (value: string) => {
    console.log('Selected value:', value);
  };

  return (
    <BasePopup opened={opened} onClick={onClick} className={s.Popup}>
      <BaseText className={s.Title}>Платежи по кредиту</BaseText>

      <BaseText as="p">
        Введите сумму кредита и выберите срок, на который вы хотите его
        оформить.
      </BaseText>

      <BaseText as="p">
        Мы автоматически рассчитаем для вас ежемесячный платеж, чтобы вы могли
        лучше спланировать свои финансы.
      </BaseText>

      <div className={s.Amount}>
        <BaseText as="h2" className={s.Amount_Label}>
          Ваша сумма кредита
        </BaseText>
      </div>

      <BaseButton variant="text" className={s.Calculate}>
        Рассчитать
      </BaseButton>

      <div className={s.SelectMonths}>
        <BaseText as="h2" className={s.SelectMonths_Label}>
          Количество месяцев?
        </BaseText>

        <BaseRadioButton
          variant="tag"
          options={options}
          onChange={handleRadioChange}
          className={s.SelectMonths_Value}
        />
      </div>

      <div className={s.SelectMonths}>
        <BaseText as="h2" className={s.SelectMonths_Label}>
          Количество месяцев?
        </BaseText>

        <BaseRadioButton
          variant="tag"
          options={options}
          onChange={handleRadioChange}
          className={s.SelectMonths_Value}
        />
      </div>

      <BaseButton className={s.Add} onClick={onClick2}>
        Добавить
      </BaseButton>
    </BasePopup>
  );
};

export default LoanPaymentsPopup;
