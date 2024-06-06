import React from 'react';
// import './Contacts.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../App/store/store';
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';

type ContactsProps = {};

const Contacts = ({}: ContactsProps): JSX.Element => {
  const books = useSelector((state: RootState) => state.book.books);
  let shops;
  if (books && books[0]) shops = books[0].ShopLines.map((shopline) => shopline.Shop);

  return (
    <div className="Contacts">
      <div className="container">
        <div className="map">
          <YMaps query={{ apikey: '154a404d-ec9b-4f47-9aee-e6aaf001ef05&f99d44fe-fbc6-4477-8f5f-32c81cedec54', load: 'package.full' }}>
            <Map
              defaultState={{ center: [59.927842, 30.329228], zoom: 12 }}
              width={'1000px'}
              height={'500px'}
            >
              {shops &&
                shops.length &&
                shops.map((shop) => (
                  <Placemark
                    key={shop.id}
                    geometry={[shop.latitude, shop.longitude]}
                    properties={{
                      balloonContentHeader: shop.shopName,
                      balloonContentBody: shop.adress,
                      balloonContentFooter: 'Время работы: ' + shop.workTime,
                    }}
                  />
                ))}
              <ZoomControl options={{ float: 'right' }} />
            </Map>
          </YMaps>
        </div>
        <div className='map-description'></div>
      </div>
    </div>
  );
};

export default Contacts;
