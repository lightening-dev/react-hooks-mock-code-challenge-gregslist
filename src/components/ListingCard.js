import React, {useState} from "react";

function ListingCard({ src, description, location, id, handleRemove }) {

    const [liked, setLiked] = useState(false)
    
    function handleLikeClick(e) {
        e.preventDefault();

        return setLiked(!liked);
      
    }

      function handleDelete() {
        
        return fetch(`http://localhost:6001/listings/${id}`, {
          method: 'DELETE',
          headers: {'Content-Type': 'application/json' },
          
         }, handleRemove(id))
      } 

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={src} alt={description} />
      </div>
      <div className="details" >
        <button onClick={handleLikeClick} className="emoji-button favorite active">{liked ? "★" : "☆" }</button>
        
        
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
