import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/snowflake-approve';

const IceMarker = ({ lat, lng, onClick }) => {
  return (
    <div className='location-ice-marker' onClick={onClick}>
      <Icon icon={locationIcon} className='location-ice-icon' />
    </div>
  );
};

export default IceMarker;
