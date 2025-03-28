import React, { useState } from "react";
import "./PlaceItem.css";
import Button from "../../shared/component/FormElements/Button";
import Modal from "../../shared/component/UIElements/Modal";

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={
          <Button onClick={closeMapHandler}>
            CLOSE
          </Button>
        }
      >
        <div className="map-container">
          <h2>The Map!</h2>
        </div>
      </Modal>

      <li className="place-item">
        <div className="place-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="place-item__info">
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
          {/* Open the modal to show map */}
          <Button onClick={openMapHandler}>
            VIEW ON MAP
          </Button>
          
          {/* Edit link-based button (uses React Router Link under the hood) */}
          <Button to={`/places/${props.id}`}>
            EDIT
          </Button>
          
          {/* “Danger” style variant (if your Button.css supports it) */}
          <Button danger onClick={() => console.log('Delete clicked!')}>
            DELETE
          </Button>
        </div>
      </li>
    </>
  );
};

export default PlaceItem;
