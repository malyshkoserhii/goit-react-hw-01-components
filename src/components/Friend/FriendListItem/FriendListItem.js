import styles from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={styles.friendListItem}>
      <span
        className={styles.status}
        style={
          isOnline
            ? { backgroundColor: 'rgb(14, 185, 42)' }
            : { backgroundColor: 'rgb(252, 0, 0)' }
        }
      >
        {isOnline}
      </span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.prototype = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
