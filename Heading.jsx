import React from 'react'
import Tagline from './Tagline'

const Heading = ({className,title,text,tag}) => {
  return (
    <div>
      {tag && 
      <Tagline className="mb-4 mb:justify-center lg:justify-center">
        {tag}
      </Tagline>
      }
        {title && <h2 className='h2'>{title}</h2>}
        {text && <p className='body-2 mt-4 text-n-4'>{text}</p>}
    </div>
  )
}

export default Heading