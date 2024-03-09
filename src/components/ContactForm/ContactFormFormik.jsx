import { useId } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ErrorMessage } from 'formik';

import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

// Validation shema
const FeedbackShema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

// initialValues
const initialValues = {
  name: '',
  number: '',
};

// Component ContactFormFormik
const ContactFormFormik = ({ addContact }) => {
  // id for label and field
  const nameId = useId();
  const numberId = useId();

  // Callback function onSubmit
  const handleSubmitFormik = (values, actions) => {
    console.log(values);
    addContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <div className={css.contactFormWrap}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitFormik}
        validationSchema={FeedbackShema}
      >
        <Form className={css.contactForm}>
          <label className={css.contactFormLabel} htmlFor={nameId}>
            Name
          </label>
          <Field
            className={css.contactFormInput}
            type="text"
            name="name"
            id={nameId}
          />
          <ErrorMessage className={css.errorMessage} name="name" as="span" />

          <label className={css.contactFormLabel} htmlFor={numberId}>
            Number
          </label>
          <Field
            className={css.contactFormInput}
            type="text"
            name="number"
            id={numberId}
          />
          <ErrorMessage className={css.errorMessage} name="number" as="span" />
          <button className={css.contactFormBtn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactFormFormik;
