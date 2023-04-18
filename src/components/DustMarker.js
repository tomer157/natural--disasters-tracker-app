import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/dust-storm';

const DustMarker = ({ lat, lng, onClick }) => {
  return (
    <div className='location-dust-marker' onClick={onClick}>
      <Icon icon={locationIcon} className='location-dust-icon' />
    </div>
  );
};

export default DustMarker;
