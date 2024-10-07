import { div } from "framer-motion/client";
import Skeleton_loader from "./Skeleton_loader";
import Testimony_card from "./Testimony_card"
import { useEffect, useState } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';


function App() {
  const [testimonies, setTestimonies] = useState([]);
  const [delay, setdelay] = useState(true); // simulate delayed content loading
  const cardStyles = ['style1', 'style2', 'style3', 'style4', 'style5']; // Card styles to be applied in a cyclic manner

  const fetchTestimonies = async () => {
    try {
      const res = await fetch('/testimonies.json');
      const data = await res.json();
      setTestimonies(data)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTestimonies();

    setTimeout(() => {
      setdelay(false);
    }, 2000)
  }, [])


  return (
    <>
      <div id="app">
        <SkeletonTheme baseColor="hsl(220, 7%, 77%)" highlightColor="#666" borderRadius={'.5rem'}>
          {
            // display skeleton loader before content is ready to be displayed
            delay ? (
              <div className="wrapper sk-wrapper">
                {
                  Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton_loader 
                      key={i}
                      classname={`card ${cardStyles[i % cardStyles.length]}`}
                      lineCount={i % cardStyles.length < 4 ? 3 : 10}
                    />
                  ))
                }
              </div>
            ) : (
              <div className="wrapper">
                {
                  testimonies.map((testimony, index) => (
                    <Testimony_card
                      key={index}
                      classNm = {`card ${index < 5 ? cardStyles[index % cardStyles.length] : cardStyles[Math.floor(Math.random() * cardStyles.length)]}`} // Adds card grid style dynamically selected from cardStyles array and select the styles randomly once the loop has completed one round.
                      posterImage = {testimony.image}
                      posterName = {testimony.name}
                      posterTag = {testimony.tag}
                      postHeading = {testimony.heading}
                      postDetails = {testimony.details}
                    />
                  ))
               }
              </div>
            )    
          }
        </SkeletonTheme>
      </div>
    </>
  )
}

export default App
