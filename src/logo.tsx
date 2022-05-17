import logoImage from './images/gdApple1.png'
import cloud2 from './images/cloud1.png'
import cloud1 from './images/cloud2.png'
import './App.css'
import './index.css'

const Logo: React.FC = () => {
  return (
    <>
        <div className='sky'>
          <img src={cloud1} alt='?申_'></img>
          <img src={cloud2} alt='?申_'></img>
        </div>
        <img src={logoImage} alt='?申?申?申?申?申?申?申�??申?申S' className='logo'></img>
    </>
  )
}

export default Logo