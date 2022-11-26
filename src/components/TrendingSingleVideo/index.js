import {Link} from 'react-router-dom'

import './index.css'

const TrendingSingleVideo = props => {
  const {video} = props
  const {title, id, channel, thumbnailUrl, viewCount, publishedAt} = video
  const {name} = channel

  return (
    <Link className="videotrend" to={`/videos/${id}`}>
      <li className="videotrendlist">
        <img className="img1" src={thumbnailUrl} />
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
export default TrendingSingleVideo
