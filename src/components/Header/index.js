import {Component} from 'react'
import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {MdDarkMode} from 'react-icons/md'
import {BiSun} from 'react-icons/bi'
import {FaRegMoon} from 'react-icons/fa'
import Contextdata from '../../Context/Context'
import './index.css'

const Header = props => {
  const {history} = props
  const logoutpage = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <Contextdata.Consumer>
      {value => {
        const {status, updatestatus} = value

        const changetheme = () => {
          updatestatus()
        }

        return (
          <>
            {status ? (
              <nav className="themeblack">
                <div className="headercontainer">
                  <Link to="/">
                    <img
                      className="logo"
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                      alt="website logo"
                    />
                  </Link>

                  <div className="profilecontainer">
                    <button onClick={changetheme} data-testid="theme">
                      <BiSun className="sun" />
                    </button>

                    <img
                      className="profileimg"
                      alt="profile"
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
                    />
                    <Popup
                      modal
                      trigger={<button>Logout</button>}
                      className="popup-content"
                    >
                      <div>
                        <p>Are you sure, you want to logout</p>
                        <div>
                          <button>Cancel</button>
                          <button onClick={logoutpage}>Confirm</button>
                        </div>
                      </div>
                    </Popup>
                  </div>
                </div>
              </nav>
            ) : (
              <nav>
                <div className="headercontainer">
                  <Link to="/">
                    <img
                      className="logo"
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="website logo"
                    />
                  </Link>
                  <div className="profilecontainer">
                    <button onClick={changetheme} data-testid="theme">
                      <FaRegMoon className="moon" />
                    </button>

                    <img
                      className="profileimg"
                      alt="profile"
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
                    />
                    <Popup
                      modal
                      trigger={<button>Logout</button>}
                      className="popup-content"
                    >
                      <div>
                        <p>Are you sure, you want to logout</p>
                        <div>
                          <button>Cancel</button>
                          <button onClick={logoutpage}>Confirm</button>
                        </div>
                      </div>
                    </Popup>
                  </div>
                </div>
              </nav>
            )}
          </>
        )
      }}
    </Contextdata.Consumer>
  )
}
export default withRouter(Header)
