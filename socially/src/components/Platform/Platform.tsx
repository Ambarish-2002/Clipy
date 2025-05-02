import { fetchYtTrends, fetchRtTrends,  } from '../../services/fetchTrends';
import DisplayTrends from '../DisplayTrends/DisplayTrends';
import { IPlatformContext } from './IPlatform';
import './platform.css'
import { useState, createContext, useEffect } from 'react';

export const PlatformContext = createContext<IPlatformContext>({
    platform: '',
    trendData: {},
});

const Platform = () => {

    const [platform, setPlatform] = useState('youtube');
    const [trendData, setTrendData] = useState(null);

    useEffect(() => {
        if(trendData) return;
        const fetchData = async () => {
            const data = await fetchYtTrends();
            setTrendData(data);
          };
        
          fetchData();
    }, [])

    const getYtTrends  = async () => {
        const data = await fetchYtTrends();
        setTrendData(data);
        setPlatform('youtube');
    }

    const getIgTrends  = async () => {
        const data = await fetchRtTrends();
        setTrendData(data);
        setPlatform('instagram');
    }

    const getRtTrends  = async () => {
        const data = await fetchRtTrends()
        setTrendData(data);
        setPlatform('reddit');
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
        <button className='platform-button-tw' onClick={() => getRtTrends()}>
            <img src="reddit_icon.svg" alt="" width="50px" height ="50px"/>
        </button>
        </div>

        <PlatformContext.Provider value={{platform, trendData}}>
            <DisplayTrends/>
        </PlatformContext.Provider>
        
    </div>
    
  )
}

export default Platform
