import { useId } from 'react';
import css from './ContactForm.module.css';

import { nanoid } from 'nanoid';

const ContactForm = ({ addContact }) => {
  const nameId = useId();
  const numberId = useId();

  const hadlerSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt);
    addContact({
      id: nanoid(),
      name: evt.target.elements.name.value,
      number: evt.target.elements.number.value,
    });
    evt.target.reset();
  };

  return (
    <div className={css.contactFormWrap}>
      <form className={css.contactForm} onSubmit={hadlerSubmit}>
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
