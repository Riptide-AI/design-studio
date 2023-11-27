import { useEffect } from 'react';
import Head from 'next/head';
import styles from './style.module.scss';

export const LocationMap = () => {
  const lvivCoordinates = { lat: 49.8397, lng: 24.0297 };
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.google !== 'undefined') {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: lvivCoordinates,
        zoom: 15,
        disableDefaultUI: true,
      });
      new window.google.maps.Marker({
        position: lvivCoordinates,
        map: map,
        title: 'Lviv',
      });
    }
  }, [lvivCoordinates]);

  return (
    <div>
      <Head>
        <script async defer src="https://maps.googleapis.com/maps/api/js?callback=initMap"></script>
      </Head>
      <div id="map" className={styles.map} style={{ height: '415px', width: '100%' }}></div>
    </div>
  );
};
