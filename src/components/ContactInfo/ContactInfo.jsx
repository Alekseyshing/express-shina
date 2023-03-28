import React from 'react';
import styles from './contactinfo.module.scss';


const ContactInfo = ({ setCoordinate, setZoom, places }) => {
  const handleClick = (place) => {
    setCoordinate([place.latitude, place.longitude]);
    setZoom(15);
  };

  return (
    <div className={styles.contactinfo}>
      <div className={styles.contactinfo__container}>
        {places.map((place) => {
          return (
            <div
              className={styles.contactinfo__items}
              key={place.latitude}
              tabIndex={0}
              onClick={() => handleClick(place)}
            >
              <div className={styles.contactinfo__content_address}>{place.address}</div>
              <div className={styles.contactinfo__content_buttons}>
                {place.budgets.map((budget, index) => {
                  return (
                    <div className={styles.contactinfo__content_button} key={budget + index}>
                      {budget}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;
