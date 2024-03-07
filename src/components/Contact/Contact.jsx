// import css from './Contact.module.css';

import css from './Contact.module.css';

import { FaPhone } from 'react-icons/fa6';
import { IoIosContact } from 'react-icons/io';

const Contact = ({ name, number, id, deleteContact }) => {
  return (
    <div className={css.contactWrap}>
      <div className={css.contactData}>
        <div className={css.contactCont}>
          <div className={css.contactIconWrap}>
            <IoIosContact className={css.contactIcon} size="24" />
          </div>
          <p className={css.conactTitle}>{name}</p>
        </div>
        <div className={css.contactCont}>
          <div className={css.contactIconWrap}>
            <FaPhone className={css.contactIcon} size="18" />
          </div>
          <p className={css.conactTitle}>{number}</p>
        </div>
      </div>
      <button className={css.contactBtn} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
