import {HiHome, HiSave, HiFire} from 'react-icons/hi'
import {Link} from 'react-router-dom'
import {SiYoutubegaming} from 'react-icons/si'
import Contextdata from '../../Context/Context'
import './index.css'

const Sidebar = () => (
  <Contextdata.Consumer>
    {value => {
      const {status, addid, id} = value
      console.log('hil')
      console.log(addid)
      console.log('ji')
      console.log(id === 'Home')
      console.log(Sidebar)
      const makeid = event => {
        console.log(event.target.id)
        addid(event.target.id)
      }
      return (
        <>
          {status ? (
            <div className="sidebar side">
              <ul className="logounorder">
                <Link to="/">
                  <li
                    id="Home"
                    className={`eachitem ${
                      id === 'Home' ? 'changecoloroption' : ''
                    }`}
                  >
                    <HiHome className="icon" />
                    <p>Home</p>
                  </li>
                </Link>
                <Link to="/trending">
                  <li onClick={makeid} id="Trending" className="eachitem">
                    <HiFire className="icon" />
                    <p>Trending</p>
                  </li>
                </Link>

                <Link to="/gaming">
                  <li onClick={makeid} id="gaming" className="eachitem">
                    <SiYoutubegaming className="icon" />
                    <p>Gaming</p>
                  </li>
                </Link>

                <Link to="/saved-videos">
                  <li onClick={makeid} id="saved" className="eachitem">
                    <HiSave className="icon" />
                    <p>Saved Videos</p>
                  </li>
                </Link>
              </ul>
              <div>
                <p>CONTACT US</p>
                <div>
                  <img
                    className="sociallogo"
                    alt="facebook logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  />
                  <img
                    className="sociallogo"
                    alt="twitter logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  />
                  <img
                    className="sociallogo"
                    alt="linked in logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                  />
                </div>
                <p>Enjoy! Now to see your channels and recommendations!</p>
              </div>
            </div>
          ) : (
            <div className="sidebar side">
              <ul className="logounorder">
                <Link to="/">
                  <li id="Home" className="eachitem">
                    <HiHome className="icon" />
                    <p>Home</p>
                  </li>
                </Link>
                <Link to="/trending">
                  <li id="Trending" onClick={makeid} className="eachitem">
                    <HiFire className="icon" />
                    <p>Trending</p>
                  </li>
                </Link>

                <Link to="/gaming">
                  <li id="gaming" onClick={makeid} className="eachitem">
                    <SiYoutubegaming className="icon" />
                    <p>Gaming</p>
                  </li>
                </Link>

                <Link to="/saved-videos">
                  <li id="saved" onClick={makeid} className="eachitem">
                    <HiSave className="icon" />
                    <p>Saved Videos</p>
                  </li>
                </Link>
              </ul>
              <div>
                <p>CONTACT US</p>
                <div>
                  <img
                    className="sociallogo"
                    alt="facebook logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  />
                  <img
                    className="sociallogo"
                    alt="twitter logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  />
                  <img
                    className="sociallogo"
                    alt="linked in logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                  />
                </div>
                <p>Enjoy! Now to see your channels and recommendations!</p>
              </div>
            </div>
          )}
        </>
      )
    }}
  </Contextdata.Consumer>
)

export default Sidebar
