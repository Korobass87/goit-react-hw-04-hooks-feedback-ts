import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics'
import Section from './Section/Section'
import Notification from './Notification/Notification'


const feed: string[] = ["good", "neutral", "bad" ]


export default function App () {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function addFeed (e: any) {
    console.log(typeof(e));
    
    let feedName = e.target.name
    
    // рабочий вариант, но не знаю можно ли так делать
    // eval(`set${feedName[0].toUpperCase() + feedName.slice(1)}`)(eval(feedName) + 1)
    
    switch (feedName) {
      case "good":
        setGood(good+1);
        break;
      case "bad":
      setBad(bad+1);
      break;
      case "neutral":
        setNeutral(neutral+1);
      break;    
      default:
        break;
    }}
  
  
  return (
    <>
    <Section title="Please leave feedback">
      <FeedbackOptions options={feed} addFeed={addFeed} />  
    </Section>
    <Section title="Statistics">
      {(good > 0 || neutral > 0 || bad > 0) ?
      <Statistics good={good} neutral={neutral} bad={bad}/> 
      : <Notification message="There is no feedback"></Notification> }          
    </Section>
    
    
    </>
    
    
        )
      }
    
  


