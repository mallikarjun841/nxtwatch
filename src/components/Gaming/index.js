import {HiHome, HiSave, HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {AiOutlineSearch} from 'react-icons/ai'
import Contextdata from '../../Context/Context'
import Gamingvideo from '../GamingVideo'
import Sidebar from '../Sidebar'
import './index.css'
import Header from '../Header'

const Gaming = () => (
  <Contextdata.Consumer>
    {value => {
      const {status} = value
      return (
        <>
          {status ? (
            <>
              <Header />
              <div data-testid="gaming" className="homemaincontainer homedark">
                <Sidebar />
                <div>
                  <h1>Gaming</h1>
                  <Gamingvideo />
                </div>
              </div>
            </>
          ) : (
            <>
              <Header />
              <div className="homemaincontainer">
                <Sidebar />
                <div>
                  <h1>Gaming</h1>
                  <Gamingvideo />
                </div>
              </div>
            </>
          )}
        </>
      )
    }}
  </Contextdata.Consumer>
)
export default Gaming
