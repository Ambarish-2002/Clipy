import { useContext, Context } from "react"
import { PlatformContext } from "../Platform/Platform"
import { IPlatformContext} from "../Platform/IPlatform";
const DisplayTrends = () => {

    const { platform, trendData } = useContext(PlatformContext as Context<IPlatformContext>);
    console.log(platform, trendData);

  return (
    <div>
    </div>
  )
}

export default DisplayTrends
