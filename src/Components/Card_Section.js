import React, { useState, useEffect } from 'react'
import Card from './Card';
import './Card_Section.css';

const Card_Section = (props) => {

  //storing each card data
  const [data, setData] = useState([]);

  //fetching userSelected data from Api
  const getData = () => {
    //We are only fetching 24 cards
    fetch(`https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${props.search_query}&numResults=24`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }

  //updating data states every time, when we receive new search_query props
  useEffect(() => {
    getData()
  }, [props.search_query])

  return (

    <div className='selected_cards'>
      {data.results &&
        data.results.map((cardData) => {
          return (
            <Card video={cardData.video} heading={cardData.heading} text={cardData.text} tags={cardData.tags} key={cardData.heading}></Card>
          )
        })
      }
    </div>
  )
}

export default Card_Section