import { Avatar } from '@mui/material';
import PropTypes from 'prop-types';

const DEFAULT_PROFILE_IMAGE = 'https://i.imgur.com/JfQJ1dC.png';

const ProfileAvatar = ({ src, size = 40, ...props }) => {
  const handleError = (e) => {
    e.target.src = DEFAULT_PROFILE_IMAGE;
  };

  return (
    <Avatar
      src={src || DEFAULT_PROFILE_IMAGE}
      sx={{ width: size, height: size }}
      onError={handleError}
      {...props}
    />
  );
};

ProfileAvatar.propTypes = {
  src: PropTypes.string,
  size: PropTypes.number,
};

export default ProfileAvatar;