import { fetchYtTrends, fetchTwTrends, fetchIgTrends,  } from '../../services/fetchTrends';
import DisplayTrends from '../DisplayTrends/DisplayTrends';
import { IPlatformContext } from './IPlatform';
import './platform.css'
import { useState, createContext } from 'react';

export const PlatformContext = createContext<IPlatformContext>({
    platform: '',
    trendData: {},
});

const Platform = () => {

    const [platform, setPlatform] = useState('');
    const [trendData, setTrendData] = useState(null);

    const getYtTrends  = async () => {
        const data = await fetchYtTrends();
        setTrendData(data);
        setPlatform('youtube');
    }

    const getIgTrends  = async () => {
        const data = await fetchIgTrends();
        setTrendData(data);
        setPlatform('instagram');
    }

    const getTwTrends  = async () => {
        const data = await fetchTwTrends()
        setTrendData(data);
        setPlatform('twitter');
    }

  return (
    <div>
        <div className='platform-choose'>
        <button className='platform-button-yt' onClick={() => getYtTrends()}>
            <img src="youtube_icon.svg" alt="" width="50px" height ="50px"/>
        </button>
        <button className='platform-button-ig' onClick={() => getIgTrends()}>
            <img src="insta_icon.svg" alt="" width="50px" height ="50px"/>
        </button>
        <button className='platform-button-tw' onClick={() => getTwTrends()}>
            <img src="twitter_icon.svg" alt="" width="50px" height ="50px"/>
        </button>
        </div>

        <PlatformContext.Provider value={{platform, trendData}}>
            <DisplayTrends/>
        </PlatformContext.Provider>
        
    </div>
    
  )
}

export default Platform
