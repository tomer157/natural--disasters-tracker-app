import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/alert-box';

const EarthQuakes = ({ lat, lng, onClick }) => {
  return (
    <div className='location-earthQuakes-marker' onClick={onClick}>
      <Icon icon={locationIcon} className='location-earthQuakes-icon' />
    </div>
  );
};

export default EarthQuakes;
