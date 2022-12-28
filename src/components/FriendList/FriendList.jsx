import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
    return (
        <ul className={styles.list }>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem key={id} isOnline={isOnline} avatar={avatar} name={name}/>
            ))}
        </ul>
    );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

export default FriendList;