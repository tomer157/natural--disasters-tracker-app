import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/flood';

const FloodMarker = ({ lat, lng, onClick }) => {
  return (
    <div className='location-flood-marker' onClick={onClick}>
      <Icon icon={locationIcon} className='location-flood-icon' />
    </div>
  );
};

export default FloodMarker;
