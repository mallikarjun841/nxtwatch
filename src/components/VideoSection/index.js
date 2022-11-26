import {Component} from 'react'

import SingleVideo from '../SingleVideo'
import './index.css'

class VideoSection extends Component {
  render() {
    const {videos} = this.props
    return (
      <div>
        {videos.length === 0 ? (
          <div>
            <img
              className="searchinputimg"
              alt="no videos"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            />
            <h1>No Search results found</h1>
            <p>Try different key words or remove search filter</p>
            <button type="button">Retry</button>
          </div>
        ) : (
          <ul className="videounorder">
            {videos.map(object => (
              <SingleVideo key={object.id} video={object} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default VideoSection
