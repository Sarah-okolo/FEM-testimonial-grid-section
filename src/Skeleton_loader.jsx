import React from 'react'
import Skeleton from 'react-loading-skeleton' // For skeleton loading effect
import 'react-loading-skeleton/dist/skeleton.css'

function Skeleton_loader(props) {
  const {classname, lineCount} = props;

  return (
    <>
    <div className={classname} style={{background: 'white', opacity: 0.3}}>
      <div className='poster'>
        <Skeleton circle width={40} height={40}/>
        <Skeleton width={100} height={7} count={2} className='last-row'/>
      </div>
      <div className='heading'>
        <Skeleton height={25} />
      </div>
        <Skeleton height={10} count={lineCount} className='last-row' />
    </div>
    </>
  )
}

export default Skeleton_loader
