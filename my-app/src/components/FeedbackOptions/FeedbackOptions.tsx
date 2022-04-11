import React  from 'react'
import './Feedback.css'

interface Props {
  options: string[];
  addFeed: React.MouseEventHandler<HTMLButtonElement> ;
}



export default function FeedbackOptions ({options, addFeed}: Props) {
  
     
    return (
      <>
      
      <ul className='feedback-list'>{options.map((el, i) => (
        <button className={el} name={el} key={i} onClick={addFeed}>{el}</button>
 ))}</ul>
      </>
          
    )
  }

