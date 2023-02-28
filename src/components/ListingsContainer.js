import React from "react";
import ListingCard from "./ListingCard";


function ListingsContainer(props) {
  return (
    <main>
      <ul className="cards">
        {props.listings.map((listing) => <ListingCard listing= {listing} image= {props.image}  ></ListingCard>)}
    

        
      </ul>
    </main>
  );
}

export default ListingsContainer;
