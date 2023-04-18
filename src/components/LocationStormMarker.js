import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/storm-advisory-outline';

const LocationStormMarker = ({ lat, lng, onClick }) => {
  return (
    <div className='location-storm-marker' onClick={onClick}>
      <Icon icon={locationIcon} className='location-storm-icon' />
    </div>
  );
};

export default LocationStormMarker;
