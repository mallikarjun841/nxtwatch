import {Link} from 'react-router-dom'

import './index.css'

const SavedSingleVideo = props => {
  const {video} = props
  const {videos, channel} = video
  const {thumbnailUrl, id, title, viewCount, publishedAt} = videos
  const {name} = channel

  return (
    <Link className="videotrend" to={`/videos/${id}`}>
      <li id={id} className="videotrendlist">
        <img className="savedimg" src={thumbnailUrl} alt="video thumbnail" />
        <div className="profilecontainer">
          <div className="detailsvideo">
            <p className="p1 title">{title}</p>
            <p className="p1">{name}</p>
            <div className="viewcontainer">
              <p className="views">{viewCount}</p>
              <p className="p1">{publishedAt}</p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default SavedSingleVideo
