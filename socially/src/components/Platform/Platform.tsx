import { fetchYtTrends } from '../../services/fetchTrends';
import './platform.css'
const Platform = () => {

    const getYtTrends  = async () => {
        const data = await fetchYtTrends();
        console.log(data);
    }

  return (
    <div className='platform-choose'>
        <button className='platform-button-yt' onClick={() => getYtTrends()}>
            <img src="youtube_icon.svg" alt="" width="50px" height ="50px"/>
        </button>

        <button className='platform-button-ig' onClick={() => getYtTrends()}>
            <img src="insta_icon.svg" alt="" width="50px" height ="50px"/>
        </button>

        <button className='platform-button-tw' onClick={() => getYtTrends()}>
            <img src="twitter_icon.svg" alt="" width="50px" height ="50px"/>
        </button>

    </div>
  )
}

export default Platform
