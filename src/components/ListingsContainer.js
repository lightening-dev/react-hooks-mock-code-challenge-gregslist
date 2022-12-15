import React, {useState} from "react";
import ListingCard from "./ListingCard";
import Search from "./Search";

function ListingsContainer({listings, handleRemove}) {
  
  

  
  
   

  const allListings = listings.map((eachlisting) => {

      return <ListingCard handleRemove={handleRemove}
        id={eachlisting.id}
        src={eachlisting.image}
        description={eachlisting.description}
        location={eachlisting.location}
        key={eachlisting.description}
      />
      
    })
                    



  return (
    <main>
      
      <ul className="cards">
      {allListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
