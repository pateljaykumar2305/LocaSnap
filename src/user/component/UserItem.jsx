import { Link } from 'react-router-dom';

import './UserItem.css';

const UserItem = props => {
  return (
    <li className="user-item">
      {/* Wrap the entire card in a <Link> */}
      <Link to={`/${props.id}/places`}>
        <div className="user-item__content">
          <div className="user-item__image">
            <img src={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <div className="user-item__places">
              {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default UserItem;
