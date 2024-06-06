import React from 'react';
// import './Contacts.scss';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useSelector } from 'react-redux';
import { RootState } from '../../App/store/store';

const Contacts = ({}: ContactsProps): JSX.Element => {
  const books = useSelector((state: RootState) => state.book.books);
  return (
    <div className="Contacts">
      <div className="map">
        <YMaps>
          <div>
            My awesome application with maps!
            <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
              <Placemark geometry={[55.684758, 37.738521]} />
            </Map>
          </div>
        </YMaps>
      </div>
    </div>
  );
};

export default Contacts;
