import {Component} from 'react'
import Cookies from 'js-cookie'
import SingleVideo from '../SingleVideo'
import TrendingSingleVideo from '../TrendingSingleVideo'
import './index.css'

class Trendingvideo extends Component {
  state = {videos: [], channel: {}, connectionerror: false}

  componentDidMount() {
    this.getdetais()
  }

  getdetais = async () => {
    const token = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    const responsedata = await response.json()
    console.log(responsedata)
    console.log('super')
    const Updatedata = responsedata.videos.map(object => ({
      channel: {
        profileImgUrl: object.channel.profile_image_url,
        name: object.channel.name,
      },
      id: object.id,
      publishedAt: object.published_at,
      thumbnailUrl: object.thumbnail_url,
      title: object.title,
      viewCount: object.view_count,
    }))

    if (response.ok === true) {
      this.setState({videos: Updatedata, connectionerror: false})
    }
    if (response.status === 400) {
      this.setState({connectionerror: true})
    }
  }

  render() {
    const {videos, connectionerror} = this.state
    console.log(connectionerror)
    return (
      <div className="unordertrend">
        {connectionerror ? (
          <div className="failurecontainer">
            <img
              className="failureimg"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
              alt="failure view"
            />
            <h1>Oops! Something Went Wrong</h1>
            <p>We are having some trouble to complete your request</p>
            <p>Please try again</p>
            <button onClick={this.makecallapi} type="button">
              Retry
            </button>
          </div>
        ) : (
          <ul className="makevideocontainer">
            <h1>Trending</h1>
            {videos.map(object => (
              <TrendingSingleVideo key={object.id} video={object} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default Trendingvideo
