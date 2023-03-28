import { Map, Placemark, YMaps, FullscreenControl, ZoomControl } from '@pbe/react-yandex-maps';
import { placemarkOptions } from '../../utils/mapOptions';
import styles from './index.module.scss';

const MyMap = ({ coordinate, zoom }) => {

  return (
    <YMaps>
      <Map
        className={styles.map}
        state={{
          center: coordinate || [54.708415, 55.975993],
          zoom: zoom,
        }}
        options={{
          suppressMapOpenBlock: true,
        }}
      >
        <ZoomControl />
        <FullscreenControl />
        <Placemark geometry={coordinate || []} options={placemarkOptions} />
      </Map>
    </YMaps>
  )
}

export default MyMap
