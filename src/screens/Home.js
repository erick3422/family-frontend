import React from 'react'
import SubHeading from '../components/SubHeading/SubHeading'
import { images } from '../constants'
import '../screens/home.scss'
const Home = () => {
  return (
    <>
      <div className='app__header app__wrapper section__padding' id='home'>
        <div className='app__wrapper_info'>
          <SubHeading title='Discover A New Flavor'/>
          <h1 className='app__header-h1'>The key to<br></br> Fine Dining </h1>
          <p className='p__opensans' style={{ margin: '2rem 0' }}> Here in Family believe that, the best food is serve with the most love ones next to you,<br></br>making an experience unique and taste it.</p>
          <button type='button' className='custom__button'>Explore Menu</button>
        </div>

        <div className='app__wrapper_img'>
          <img src={images.welcome} alt='header img' />
        </div>
      </div>
    </>
  )
}

export default Home
