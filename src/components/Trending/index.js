import {HiHome, HiSave, HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {AiOutlineSearch} from 'react-icons/ai'
import Contextdata from '../../Context/Context'
import VideoSection from '../VideoSection'
import Sidebar from '../Sidebar'
import './index.css'
import Header from '../Header'
import Trendingvideo from '../TrendingVideos'

const Trending = () => (
  <Contextdata.Consumer>
    {value => {
      const {status} = value
      return (
        <>
          {status ? (
            <>
              <Header />
              <div
                data-testid="trending"
                className="homemaincontainer homedark"
              >
                <Sidebar />
                <div>
                  <Trendingvideo />
                </div>
              </div>
            </>
          ) : (
            <>
              <Header />
              <div className="homemaincontainer homelight">
                <Sidebar />
                <div>
                  <Trendingvideo />
                </div>
              </div>
            </>
          )}
        </>
      )
    }}
  </Contextdata.Consumer>
)
export default Trending
