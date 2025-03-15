import React, { useEffect, useState } from 'react';
import s from './LoanPaymentsPopup.module.scss';
import {
  BaseButton,
  BaseInput,
  BasePopup,
  BaseRadioButton,
  BaseText,
} from 'base/index';

interface Props {
  title: string;
  subtitle?: string;
  success_btn_title?: string;
  opened: boolean;
  onClick: (value: boolean) => void;
  onClick2: (ev: React.MouseEvent<HTMLElement>) => void;
}

interface FormData {
  amount: string;
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
  { label: 'в год', value: '12' },
  { label: 'в месяц', value: '1' },
];

const LoanPaymentsPopup: React.FC<Props> = ({ opened, onClick, onClick2 }) => {
  const [value, setValue] = useState<FormData>({
    amount: '',
  });

  const setNewValue = (value: string, prop: keyof FormData) => {
    setValue((prev) => ({ ...prev, [prop]: value }));
  };

  const [error, setError] = useState<boolean>(false);
  const [amountErrorText, setAmountErrorText] = useState<string>('');
  const [isPeriod, setIsPeriod] = useState<boolean>(false);

  const calculateAmount = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (value.amount !== '') {
      setIsPeriod(true);
    } else {
      setError(true);
      setAmountErrorText('Поле обязательно для заполнения');
    }
  };

  useEffect(() => {
    if (value.amount !== '') {
      setError(false);
    }
  }, [value.amount]);

  const [monthsChange, setMonthsChange] = useState(MONTHS_OPTIONS[0].value);
  const [periodChange, setPeriodChange] = useState(PERIOD_OPTIONS[1].value);

  const computedTotalPrice = () => {
    let totalPrice =
      (Number(value.amount.trim()) / Number(monthsChange)) *
      Number(periodChange);
    return Math.round(totalPrice);
  };

  useEffect(() => {
    return () => {
      setNewValue('', 'amount');
      setMonthsChange(MONTHS_OPTIONS[0].value);
      setPeriodChange(PERIOD_OPTIONS[1].value);
    };
  }, []);

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

      <BaseInput
        type="number"
        name="amount"
        label="Ваша сумма кредита"
        placeholder="Введите данные"
        value={value.amount}
        onChange={(val: string) => setNewValue(val, 'amount')}
        error={error}
        errorText={amountErrorText}
        className={s.Amount}
      />

      <BaseButton
        variant="text"
        className={s.CalculateAmount}
        onClick={calculateAmount}
      >
        Рассчитать
      </BaseButton>

      <div className={s.SelectMonths}>
        <BaseText as="h2" className={s.SelectMonths_Label}>
          Количество месяцев?
        </BaseText>

        <BaseRadioButton
          variant="tag"
          defaultValue={MONTHS_OPTIONS[0].value}
          options={MONTHS_OPTIONS}
          onChange={setMonthsChange}
          className={s.SelectMonths_Value}
        />
      </div>

      {isPeriod ? (
        <>
          <div className={s.SelectPeriod}>
            <BaseText as="h2" className={s.SelectPeriod_Label}>
              Итого ваш платеж по кредиту:
            </BaseText>

            <BaseRadioButton
              variant="tag"
              defaultValue={PERIOD_OPTIONS[1].value}
              options={PERIOD_OPTIONS}
              onChange={setPeriodChange}
              className={s.SelectPeriod_Value}
            />
          </div>

          <div className={s.TotalPrice}>
            <span className={s.TotalPrice_Value}>{computedTotalPrice()}</span>
            <span className={s.TotalPrice_Currency}>&nbsp;рублей</span>
          </div>
        </>
      ) : null}

      <BaseButton
        className={s.Add}
        onClick={onClick2}
        // onClick={() => {
        //   onClick2;
        //   setNewValue('', 'amount');
        //   setMonthsChange(MONTHS_OPTIONS[0].value);
        //   setPeriodChange(PERIOD_OPTIONS[1].value);
        // }}
      >
        Добавить
      </BaseButton>
    </BasePopup>
  );
};

export default LoanPaymentsPopup;
