import { BaseButton } from 'base/index';
import s from './Home.module.scss';
import React, { useState } from 'react';
import { LoanPaymentsPopup } from 'modals/index';

const Home: React.FC = () => {
  const [openedLoanPaymentsPopup, setOpenedLoanPaymentsPopup] = useState(false);

  return (
    <>
      <div className={s.Home}>
        <BaseButton
          variant="outlined"
          onClick={() => setOpenedLoanPaymentsPopup(true)}
        >
          Расчет платежей
        </BaseButton>
      </div>

      <LoanPaymentsPopup
        title="Do you want to delete this item?"
        success_btn_title="delete"
        opened={openedLoanPaymentsPopup}
        onClick={setOpenedLoanPaymentsPopup}
      />
    </>
  );
};

export default Home;
