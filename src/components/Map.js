import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';
import LocationStormMarker from './LocationStormMarker';
import IceMarker from './IceMarker';
import VolcanoMarker from './VolcanoMarker';
import EarthQuakes from './EarthQuakesMarker';
import DustMarker from './DustMarker';
import FloodMarker from './FloodsMarker';

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const fetchImg = async (name) => {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${name}&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`
    );
    const { results } = await res.json();
    // console.log(results[0].urls.regular);
    const jpgUrl = `${results[0].urls.regular}.jpg`;
    // console.log(jpgUrl);
    return jpgUrl;
  };

  const markers = eventData.map((ev) => {
    //  fire
    if (ev.categories[0].id == 8) {
      return (
        <LocationMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          // fetch image

          onClick={async () => {
            try {
              const img = await fetchImg(ev.title);
              setLocationInfo({
                id: ev.id,
                title: ev.title,
                image: img,
              });
            } catch (error) {
              console.log('Error fetching image:', error);
            }
          }}
        />
      );
    }

    //   // storm
    else if (ev.categories[0].id == 10) {
      return (
        <LocationStormMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={async () => {
            try {
              const img = await fetchImg(ev.title);
              setLocationInfo({
                id: ev.id,
                title: ev.title,
                image: img,
              });
            } catch (error) {
              console.log('Error fetching image:', error);
            }
          }}
        />
      );
    } else if (ev.categories[0].id == 15) {
      // sea and lake ice
      return (
        <IceMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={async () => {
            try {
              const img = await fetchImg(ev.title);
              setLocationInfo({
                id: ev.id,
                title: ev.title,
                image: img,
              });
            } catch (error) {
              console.log('Error fetching image:', error);
            }
          }}
        />
      );
    } else if (ev.categories[0].id == 12) {
      // volcano
      return (
        <VolcanoMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={async () => {
            try {
              const img = await fetchImg(ev.title);
              setLocationInfo({
                id: ev.id,
                title: ev.title,
                image: img,
              });
            } catch (error) {
              console.log('Error fetching image:', error);
            }
          }}
        />
      );
    } else if (ev.categories[0].id == 16) {
      // earthquakes
      return (
        <EarthQuakes
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={async () => {
            try {
              const img = await fetchImg(ev.title);
              setLocationInfo({
                id: ev.id,
                title: ev.title,
                image: img,
              });
            } catch (error) {
              console.log('Error fetching image:', error);
            }
          }}
        />
      );
    } else if (ev.categories[0].id == 7) {
      // "title": "Dust and Haze",
      return (
        <DustMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={async () => {
            try {
              const img = await fetchImg(ev.title);
              setLocationInfo({
                id: ev.id,
                title: ev.title,
                image: img,
              });
            } catch (error) {
              console.log('Error fetching image:', error);
            }
          }}
        />
      );
    } else if (ev.categories[0].id == 9) {
      // "id": 9,
      // "title": "Floods",
      return (
        <FloodMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={async () => {
            try {
              const img = await fetchImg(ev.title);
              setLocationInfo({
                id: ev.id,
                title: ev.title,
                image: img,
              });
            } catch (error) {
              console.log('Error fetching image:', error);
            }
          }}
        />
      );
    }

    return null;
  });

  return (
    <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
