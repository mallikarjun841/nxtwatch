import {Component} from 'react'
import Cookies from 'js-cookie'
import SingleVideo from '../SingleVideo'
import SavedSingleVideo from '../SavedSingleVideo'
import Contextdata from '../../Context/Context'
import './index.css'

class SavedVideoList extends Component {
  render() {
    return (
      <Contextdata.Consumer>
        {value => {
          const {savedvideos} = value
          return (
            <div className="unordertrend un">
              {savedvideos.length === 0 ? (
                <div className="savedcontainer">
                  <img
                    className="savedimg"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <h1>No saved videos found</h1>
                  <p>You can save your videos while watching them</p>
                </div>
              ) : (
                <ul className="makevideocontainer">
                  {savedvideos.map(object => (
                    <SavedSingleVideo key={object.id} video={object} />
                  ))}
                </ul>
              )}
            </div>
          )
        }}
      </Contextdata.Consumer>
    )
  }
}
export default SavedVideoList
