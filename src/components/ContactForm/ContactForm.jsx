import { useId } from 'react';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();

  return (
    <div className={css.contactFormWrap}>
      <form className={css.contactForm}>
        <label className={css.contactFormLabel} htmlFor={nameId}>
          Name
        </label>
        <input
          className={css.contactFormInput}
          type="text"
          name="name"
          id={nameId}
        />
        <label className={css.contactFormLabel} htmlFor={numberId}>
          Number
        </label>
        <input
          className={css.contactFormInput}
          type="text"
          name="number"
          id={numberId}
        />
        <button className={css.contactFormBtn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
