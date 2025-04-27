import { fetchYtTrends } from '../../services/fetchTrends';
import './platform.css'
const Platform = () => {

    const getYtTrends  = async () => {
        const data = await fetchYtTrends();
        console.log(data);
    }

  return (
    <div className='platform-choose'>
        <button onClick={() => getYtTrends()}>
            <img src="logo.png" alt="" width="50px" height ="50px"/>
        </button>

        <button onClick={() => getYtTrends()}>
            <img src="logo.png" alt="" width="50px" height ="50px"/>
        </button>

        <button onClick={() => getYtTrends()}>
            <img src="logo.png" alt="" width="50px" height ="50px"/>
        </button>

    </div>
  )
}

export default Platform
