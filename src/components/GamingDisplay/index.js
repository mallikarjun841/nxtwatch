import {Link} from 'react-router-dom'

import './index.css'

const GamingDisplay = props => {
  const {video} = props
  const {title, id, thumbnailUrl, viewCount} = video

  return (
    <Link className="videolist" to={`/videos/${id}`}>
      <li>
        <img className="thumbnail" src={thumbnailUrl} alt="video thumbnail" />
        <div className="profilecontainer">
          <div>
            <p className="p1 title">{title}</p>

            <div className="viewcontainer">
              <p className="views">{viewCount}</p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}
export default GamingDisplay
