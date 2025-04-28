import { useContext, Context } from "react"
import { PlatformContext } from "../Platform/Platform"
import { IPlatformContext } from "../Platform/IPlatform";
import './DisplayTrends.css'

const DisplayTrends = () => {

  const { platform, trendData } = useContext(PlatformContext as Context<IPlatformContext>);

  return (
    <div className="trends-container">
      {trendData ? trendData.map((item: any) => (
        <div key={item.videoId} className="trend-card">
          <img src={item.thumbnail} alt={item.title} />
          <div className="trend-card-content">
            <h3>{item.title}</h3>
            <p>{item.channelTitle}</p>
            <span className={`platform-badge platform-${platform}`}>
              {platform === 'youtube' ? 'YouTube' : platform === 'reddit' ? 'Reddit' : 'Twitter'}
            </span>
          </div>
        </div>
      )) : null}
    </div>
  );
}

export default DisplayTrends
