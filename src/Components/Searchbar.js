import React, { useState } from 'react';
import './Searchbar.css';
import search_icon from './../Images/search_icon.png'

const Searchbar = (props) => {

  //currentSearch state for live inputs
  const [currentSearch, setCurrentSearch] = useState("");

  //will be triggered by input's onChange event
  const handleChange = (event) => {
    //fetching the latest Input's value
    const data = event.target.value;
    //updating the App's parent component search_res state
    if (data === "")
      props.search_input("fitness");
    else
      props.search_input(data);
    //Updating the currentSearch state
    setCurrentSearch(data)
  }

  return (
    <div style={{ textAlign: 'center', position: 'relative' }}>
      <input type="text" placeholder="Search More Videos..." value={currentSearch} onChange={handleChange} className="search_box_styling"></input>
      <div className='search_icon_box'>
        <img src={search_icon} style={{ width: '100%' }}></img>
      </div>
    </div>
  )
}

export default Searchbar