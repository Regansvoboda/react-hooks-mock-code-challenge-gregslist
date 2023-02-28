import React, {useState, useEffect} from "react"
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
// import ListingCard from "./ListingCard"

function App() {
  
  const [card, setCard] = useState([])

    useEffect(() => {
      fetch(`http://localhost:6001/listings`)
        .then((response) => response.json())
        .then((data) => setCard(data))
    }, []);
console.log(card)
  
return (
    <div className="app"> 
    <div>{card.map((listing) => <p>{listing.desription}</p>)}</div>;
      <Header />
      <ListingsContainer listings= {card} />
      {/* <ListingCard description= {listing.desription} image= {listing.image} location= {listing.location} id= {listing.id}/>  */}
    </div>
   );
  }

export default App;
