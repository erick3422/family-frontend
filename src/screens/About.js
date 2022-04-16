import React from 'react'
import '../screens/about.scss'
import { images } from '../constants'

const Rules = () => {
  return (
    <>
      <div className='app__aboutus app__bg' id='about'>

        <div className='app__title'>
          <h1> A little to Remember</h1>
        </div>

        <div className='app__aboutus-content_about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt='about_spoon' className='spoon__img' />
          <p className='p__opensans'>
            Family is a well desire restaurant with a expand catalog of food
            <br></br>around the globe, here in family our goal and desire is that your
            <br></br>family can enjoy your country dish or even better a new dish from <br></br>different place.
          </p>
          <button type='button' className='custom__button'>
            Know More
          </button>
        </div>

        <div className='app__aboutus-overlay '>
          <img src={images.F} alt='g letter'></img>
        </div>

        <div className='app__aboutus-content '>
          <div className='app__aboutus-content_knife'>
            <img src={images.knife} alt='about_knife' />
          </div>
        </div>

        <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt='about_spoon' className='spoon__img' />
          <p className='p__opensans'>
            Family start as a simple idea to unite all global food around the
            world<br></br> in a single restaurant, founded it in 2021 as
            <br></br>website and scaling as a business around the continent <br></br>
            and why not? around the world.
          </p>
          <button type='button' className='custom__button'>
            Know More
          </button>
        </div>
      </div>
    </>
  )
}

export default Rules
