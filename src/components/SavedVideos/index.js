import {HiHome, HiSave, HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {AiOutlineSearch} from 'react-icons/ai'
import Contextdata from '../../Context/Context'
import VideoSection from '../VideoSection'
import Sidebar from '../Sidebar'
import './index.css'
import Header from '../Header'
import SavedVideoList from '../Savedvideolist'

const SavedVideos = () => (
  <Contextdata.Consumer>
    {value => {
      const {status} = value
      return (
        <>
          {status ? (
            <>
              <Header />
              <div
                data-testid="savedVideos"
                className="homemaincontainer homedark"
              >
                <Sidebar />
                <h1>Saved Videos</h1>
                <div className="savedcontainer">
                  <SavedVideoList />
                </div>
              </div>
            </>
          ) : (
            <>
              <Header />
              <div
                data-testid="savedVideos"
                className="homemaincontainer homelight"
              >
                <Sidebar />
                <h1>Saved Videos</h1>
                <div className="savedcontainer">
                  <SavedVideoList />
                </div>
              </div>
            </>
          )}
        </>
      )
    }}
  </Contextdata.Consumer>
)
export default SavedVideos
