import React from 'react'
import { motion } from "framer-motion"


function Testimony_card(props) {
  const {posterImage, posterName, posterTag, postHeading, postDetails, classNm } = props;

  return (
    <>
      {/* use motion.div component rather than a normal div to allow for element animation */}
      <motion.div
        className={classNm}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <div className='poster'>
          <img src={posterImage} alt="poster-image" className='image'/>
          <div>
            <p className='name'>{posterName}</p>
            <p className='tag'>{posterTag}</p>
          </div>
        </div>
        <p className='heading'>{postHeading}</p>
        <p className='details'>{postDetails}</p>
      </motion.div>
    </>
  )
}

export default Testimony_card