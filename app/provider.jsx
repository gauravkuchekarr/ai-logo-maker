import React from 'react'
import Header from './_components/Header'
import Hero from './_components/Hero'

function Provider({childer}) {
  return (
    <div>
        <Header/>
        <div className='px-10 lg:pg-32 xl:px-48 2xl:px-56'>{/*the padding will be applicable to all the screen throught the application */}
            {childer} 
        </div>
    </div>
  )
}

export default Provider
