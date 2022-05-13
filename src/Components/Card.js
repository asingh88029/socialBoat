import React from 'react'
import ReactPlayer from 'react-player'
import './Card.css';

const Card = (props) => {
  return (
    <div className='card'>
      {/*using third party React Player as a Video Player... Know More:https://www.npmjs.com/package/react-player */}
      <ReactPlayer url={props.video} width="100%" height="50%" controls={true} playing={false} />
      {/*Card's Heading*/}
      <div className='card_heading'>{props.heading}</div>
      {/*Card's Description*/}
      <div className='card_text'>{props.text}</div>
      {/*Card's Tag*/}
      <div className='card_tag_box'>  {props.tags.map((tag) => <div className='card_tags'>{tag}</div>)} </div>
    </div>
  )
}

export default Card