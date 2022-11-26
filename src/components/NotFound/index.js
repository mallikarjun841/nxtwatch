import Sidebar from '../Sidebar'
import './index.css'
import Header from '../Header'
import Trendingvideo from '../TrendingVideos'
import Contextdata from '../../Context/Context'

const NotFound = () => (
  <Contextdata.Consumer>
    {value => {
      const {status} = value
      return (
        <>
          {status ? (
            <>
              <Header />
              <div className="homemaincontainer homedark">
                <Sidebar />
                <div className="notfoundcontainer">
                  <img
                    alt="not found"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
                  />
                  <h1>Page Not Found</h1>
                  <p>
                    we are sorry, the page you requested could not be found.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <Header />
              <div className="homemaincontainer">
                <Sidebar />
                <div className="notfoundcontainer">
                  <img
                    alt="not found"
                    className="notfoundimg"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                  />
                  <h1>Page Not Found</h1>
                  <p>
                    we are sorry, the page you requested could not be found.
                  </p>
                </div>
              </div>
            </>
          )}
        </>
      )
    }}
  </Contextdata.Consumer>
)
export default NotFound
