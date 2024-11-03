import { useState } from 'react';
import './App.css'

function App() {
  const quotes = [
    {
      title: "Embrace the Journey",
      description: "Life is not about reaching the destination but savoring every step along the way.",
      likes: 1200
    },
    {
      title: "Growth Mindset",
      description: "The key to success is seeing every failure as an opportunity to learn and grow.",
      likes: 980
    },
    {
      title: "Moments of Joy",
      description: "Happiness is found in the little moments we often overlook.",
      likes: 875
    },
    {
      title: "Dream Big, Start Small",
      description: "Every great accomplishment begins with the courage to take that first step.",
      likes: 1450
    },
    {
      title: "Unstoppable Spirit",
      description: "Strength doesn't come from winning. It comes from struggles and perseverance.",
      likes: 1050
    },
    {
      title: "Infinite Possibilities",
      description: "The only limit is the one you set for yourself.",
      likes: 1320
    },
    {
      title: "Resilience Redefined",
      description: "Fall seven times, stand up eight. Resilience is the foundation of a successful life.",
      likes: 1125
    },
    {
      title: "Change is Growth",
      description: "Embrace change as a part of growth. Progress is impossible without it.",
      likes: 800
    },
    {
      title: "Power of Positivity",
      description: "A positive mindset is a magnet for success.",
      likes: 1750
    },
    {
      title: "Make Every Moment Count",
      description: "Time is the most valuable currency—spend it wisely.",
      likes: 2000
    },
    {
      title: "Small Wins Matter",
      description: "Celebrate the little victories, for they pave the way to larger triumphs.",
      likes: 720
    },
    {
      title: "Self-Belief",
      description: "The most powerful tool you possess is believing in yourself.",
      likes: 1400
    },
    {
      title: "Carve Your Path",
      description: "Success is not a one-size-fits-all. Create a path that’s uniquely yours.",
      likes: 680
    },
    {
      title: "Courage to Create",
      description: "Don’t be afraid to create and innovate—creativity fuels progress.",
      likes: 900
    },
    {
      title: "Power of Purpose",
      description: "With purpose comes clarity, direction, and a deeper sense of fulfillment.",
      likes: 1250
    },
    {
      title: "Inspire Others",
      description: "In a world where you can be anything, choose to be an inspiration.",
      likes: 1300
    },
    {
      title: "Unleash Your Potential",
      description: "The potential within you is limitless—unlock it with courage and passion.",
      likes: 1050
    },
    {
      title: "Learning Never Stops",
      description: "Lifelong learning opens doors you never knew existed.",
      likes: 990
    },
    {
      title: "Be Fearlessly Authentic",
      description: "Authenticity is your superpower—embrace it fully.",
      likes: 1600
    },
    {
      title: "Mindfulness Matters",
      description: "In a fast-paced world, take a moment to pause, breathe, and be present.",
      likes: 2100
    }
  ];
  
  const [data, setData] = useState({});

  const handleOnClick = ()=>{
    let index = Math.floor(Math.random()*20);
    let randomQuote = quotes[index];
     
     console.log(randomQuote);
     console.log(index);

     setData(randomQuote);
  }

  


  return (
    <>
      <div className=''>
        <div className=''>
          <button onClick={handleOnClick}>Generate Quote</button>
        </div>
        <div className=''>
          <h2>Title: {data.title}</h2>
          <p><b>Description: </b>{data.description}</p>
          <span><b>Likes: </b>{data.likes}</span>
        </div>        
      </div>
    </>
     
  )
}

export default App
