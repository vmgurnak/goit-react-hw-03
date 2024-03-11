import css from './ContactForm.module.css';
// useId
import { useId } from 'react';
import { nanoid } from 'nanoid';

// Component ContactForm
const ContactForm1 = ({ addContact }) => {
  // id for label and field
  const nameId = useId();
  const numberId = useId();

  // Callback function for Submit
  const hadlerSubmit = evt => {
    evt.preventDefault();
    addContact({
      id: nanoid(),
      name: evt.target.elements.name.value,
      number: evt.target.elements.number.value,
    });
    evt.target.reset();
  };

  return (
    <div className={css.contactFormWrap}>
      <form
        className={css.contactForm}
        onSubmit={hadlerSubmit}
        autoComplete="off"
      >
        <label className={css.contactFormLabel} htmlFor={nameId}>
          Name
        </label>
        <input
          className={css.contactFormInput}
          type="text"
          name="name"
          id={nameId}
          required
          minLength="3"
          maxLength="50"
        />
        <label className={css.contactFormLabel} htmlFor={numberId}>
          Number
        </label>
        <input
          className={css.contactFormInput}
          type="text"
          name="number"
          id={numberId}
          required
          minLength="3"
          maxLength="50"
        />
        <button className={css.contactFormBtn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm1;
