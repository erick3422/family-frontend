import React from 'react'
import MenuItem from '../components/Menuitem/MenuItem'
import SubHeading from '../components/SubHeading/SubHeading'
import { images, data } from '../constants'
import '../screens/home.scss'
const Home = () => {
  return (
    <>
      <div className='app__header app__wrapper' id='home'>
        <div className='app__wrapper_info'>
          <SubHeading title='Discover A New Flavor' />
          <h1 className='app__header-h1'>
            The key to<br></br> Fine Dining
          </h1>
          <p className='p__opensans' style={{ margin: '2rem 0' }}>
            Here in Family believe that, the best food is serve with the most
            love ones next to you,<br></br>making an experience unique and taste
            it.
          </p>
          <button type='button' className='custom__button'>
            Explore Menu
          </button>
        </div>

        <div className='app__wrapper_img'>
          <img src={images.welcome} alt='header img' />
        </div>

        <div className='app__specialMenu'>
          <SubHeading title='Menu that Unite the Global' />
          <h1 className='headtext__Menu'>Global Special</h1>
        </div>

        <div className='app__specialMenu-menu'>
          <div className='app__specialMenu_wine'>
            <p className='app__specialMenu_menu_heading'> Wine & Beer</p>
            <div className='app__specialMenu_menu-items'>
              {data.wines.map((wine, index) => (
                <MenuItem
                  key={wine.title + index}
                  price={ wine.price }
                  title={wine.title}
                  tags={wine.tags}
                />
              ))}
            </div>
          </div>

          <div className='app__specialMenu-menu_img'>
            <img src={images.menu} alt='menu img' />
          </div>

          <div className='app__specialMenu_dishes'>
            <p className='app__specialMenu_menu_heading'> Best dishes</p>
            <div className='app__specialMenu_menu-items'>
              {data.dishes.map((dishes, index) => (
                <MenuItem
                  key={dishes.title + index}
                  title={dishes.title}
                  price={dishes.price }
                  tags={dishes.tags}
                />
              ))}
            </div>
          </div>

          <div className='app__specialMenu_button'>
            <button type='button' className='custom__button'>
              View More
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
