import Testimony_card from "./Testimony_card"
import { useEffect, useState } from 'react';


function App() {
  const [testimonies, setTestimonies] = useState([]);
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
  }, [])


  return (
    <>
      <div id="app">
            {
              testimonies.map((testimony, index) => (
                <Testimony_card
                  key={index}
                  classNm = {`card ${cardStyles[index % cardStyles.length]}`} // Adds card grid style dynamically selected from cardStyles array.
                  posterImage = {testimony.image}
                  posterName = {testimony.name}
                  posterTag = {testimony.tag}
                  postHeading = {testimony.heading}
                  postDetails = {testimony.details}
                />
              ))
            }
      </div>
    </>
  )
}

export default App
