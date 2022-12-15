import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {
  const [currentList, listSetter] = useState([]);
  const [search, setSearch] = useState('');
  
    useEffect(() => {
      fetch('http://localhost:6001/listings')
      .then((data) => data.json())
      .then((data) => listSetter(data))
      
    }, [])
    

    let filteredList = currentList.filter((listing) => {
      console.log(listing.name);
          if (search === '') {
              return true;
          }
            else if (listing.description.toLowerCase().includes(search.toLocaleLowerCase())) {
              return true;
            }

             return false;
             
         
    })
      console.log({filteredList});

      function handleRemove(id) {
        const newList = currentList.filter((eachList) => eachList.id !== id)
          listSetter(newList);
      }
  
  return (
    <div className="app">
      <Header search={search} setSearch={setSearch}/>
      <ListingsContainer handleRemove={handleRemove} listings={filteredList} />
    </div>
  );
}

export default App;
