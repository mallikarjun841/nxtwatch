import {Link} from 'react-router-dom'

import './index.css'

const SingleVideo = props => {
  const {video} = props
  const {title, id, channel, thumbnailUrl, viewCount, publishedAt} = video
  const {profileImgUrl, name} = channel

  return (
    <Link className="videolist" to={`/videos/${id}`}>
      <li>
        <img className="thumbnail" src={thumbnailUrl} alt="video thumbnail" />
        <div className="profilecontainer">
          <img className="profile" src={profileImgUrl} alt="channel logo" />
          <div>
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
export default SingleVideo
