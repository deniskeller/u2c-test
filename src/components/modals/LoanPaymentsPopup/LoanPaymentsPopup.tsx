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

const MONTHS_OPTIONS = [
  { label: '12', value: '12' },
  { label: '24', value: '24' },
  { label: '36', value: '36' },
  {
    label: '48',
    value: '48',
    // disabled: true
  },
];

const PERIOD_OPTIONS = [
  { label: 'в год', value: '1' },
  { label: 'в месяц', value: '12' },
];

const LoanPaymentsPopup: React.FC<Props> = ({ opened, onClick, onClick2 }) => {
  const handleMonthsChange = (value: string) => {
    console.log('Selected MONTHS_OPTIONS value:', value);
  };

  const handlePeriodChange = (value: string) => {
    console.log('Selected PERIOD_OPTIONS value:', value);
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
          defaultValue={MONTHS_OPTIONS[2].value}
          options={MONTHS_OPTIONS}
          onChange={handleMonthsChange}
          className={s.SelectMonths_Value}
        />
      </div>

      {/* <div className={s.SelectPeriod}>
        <BaseText as="h2" className={s.SelectPeriod_Label}>
          Итого ваш платеж по кредиту:
        </BaseText>

        <BaseRadioButton
          variant="tag"
          defaultValue={PERIOD_OPTIONS[0].value}
          options={PERIOD_OPTIONS}
          onChange={handlePeriodChange}
          className={s.SelectPeriod_Value}
        />
      </div> */}

      <BaseButton className={s.Add} onClick={onClick2}>
        Добавить
      </BaseButton>
    </BasePopup>
  );
};

export default LoanPaymentsPopup;
