import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import SingleVideo from '../SingleVideo'
import TrendingSingleVideo from '../TrendingSingleVideo'
import GamingDisplay from '../GamingDisplay'
import './index.css'

const makestatus = {
  Success: 'SUCCESS',
  Inprogress: 'PROGRESS',
  Fail: 'FAILURE',
}

class Gamingvideo extends Component {
  state = {videos: [], channel: {}, presentstatus: ''}

  componentDidMount() {
    this.getdetais()
  }

  getdetais = async () => {
    this.setState({presentstatus: makestatus.Inprogress})
    const token = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/videos/gaming'
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
      id: object.id,
      thumbnailUrl: object.thumbnail_url,
      title: object.title,
      viewCount: object.view_count,
    }))

    if (response.ok === true) {
      this.setState({videos: Updatedata, presentstatus: makestatus.Success})
    } else {
      this.setState({presentstatus: makestatus.Fail})
    }
  }

  callswitch = () => {
    const {videos, presentstatus} = this.state
    switch (presentstatus) {
      case 'PROGRESS':
        return (
          <div className="loader-container" data-testid="loader">
            <Loader type="ThreeDots" color="green" height="50" width="50" />
          </div>
        )

      case 'SUCCESS':
        return (
          <ul className="videounorder">
            {videos.map(object => (
              <GamingDisplay key={object.id} video={object} />
            ))}
          </ul>
        )

      case 'FAILURE':
        return (
          <div>
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
        )
      default:
        return null
    }
  }

  render() {
    const {videos} = this.state
    console.log('wow')
    console.log(videos)
    return (
      <div data-testid="gaming" className="unordertrend">
        {this.callswitch()}
      </div>
    )
  }
}
export default Gamingvideo
