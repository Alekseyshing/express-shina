import React, { useState, useEffect } from 'react';
import axios from "axios";
import styles from './app.module.scss';
import ContactInfo from './components/ContactInfo/ContactInfo';
import MyMap from './components/MyMap/MyMap';

const App = () => {
  const [pickupPoints, setPickupPoints] = useState([]);
  const [zoom, setZoom] = useState(5);
  const [coordinate, setCoordinate] = useState();
  const dataUrl = "https://express-shina.ru/vacancy/geo-state";

  useEffect(() => {
    axios.get(dataUrl).then((response) => {
      const pickupPointsData = response.data.pickPoints;
      setPickupPoints(pickupPointsData);
    });
  }, []);

  return (
    <div className={styles.app}>
      <ContactInfo setCoordinate={setCoordinate} setZoom={setZoom} places={pickupPoints} />
      <MyMap coordinate={coordinate} zoom={zoom} />
    </div>
  );
};

export default App;