import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/volcano';

const VolcanoMarker = ({ lat, lng, onClick }) => {
  return (
    <div className='location-volcano-marker' onClick={onClick}>
      <Icon icon={locationIcon} className='location-volcano-icon' />
    </div>
  );
};

export default VolcanoMarker;
