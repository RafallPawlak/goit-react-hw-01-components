import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={styles.item}>
            <span className={isOnline ? styles.active : styles.status}></span>
        <img className={styles.avatar} src={avatar} alt="User avatar " width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    )
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};

export default FriendListItem;