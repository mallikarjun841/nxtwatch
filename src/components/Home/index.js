import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {AiOutlineSearch} from 'react-icons/ai'
import Contextdata from '../../Context/Context'
import VideoSection from '../VideoSection'
import Sidebar from '../Sidebar'
import './index.css'
import Header from '../Header'

const makestatus = {
  Success: 'SUCCESS',
  Inprogress: 'PROGRESS',
  Fail: 'FAILURE',
}

class Home extends Component {
  state = {
    videos: [],
    search: '',
    presentstatus: '',
    inputtext: '',
    display: true,
    classs: '',
  }

  componentDidMount() {
    this.getdetais()
  }

  getdetais = async () => {
    this.setState({presentstatus: makestatus.Inprogress})
    const {search} = this.state
    const token = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/all?search=${search}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    const responsedata = await response.json()
    console.log(responsedata)
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
      this.setState({videos: Updatedata, presentstatus: makestatus.Success})
    } else {
      this.setState({presentstatus: makestatus.Fail})
    }
  }

  searchinput = event => {
    this.setState({inputtext: event.target.value})
  }

  makecallapi = props => {
    const {history} = this.props
    console.log(history)
    history.replace('/')
  }

  removetag = () => {
    this.setState({classs: 'classs'})
  }

  callswitch = () => {
    const {videos, classs, presentstatus} = this.state
    switch (presentstatus) {
      case 'PROGRESS':
        return (
          <div className="loader-container" data-testid="loader">
            <Loader type="ThreeDots" color="green" height="50" width="50" />
          </div>
        )

      case 'SUCCESS':
        return (
          <>
            <div className="searchcontainer">
              <input
                onChange={this.searchinput}
                className="searchinput"
                type="search"
                placeholder="Search"
              />

              <button data-testid="searchButton" onClick={this.makesearchdata}>
                <AiOutlineSearch className="searchlogo" />
              </button>
            </div>
            <div data-testid="banner" className={`prime ${classs}`}>
              <div className="crossmarkcontainer">
                <img
                  className="logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="nxt watch logo"
                />
                <button
                  className="crossbutton"
                  onClick={this.removetag}
                  type="button"
                  data-testid="close"
                >
                  x
                </button>
              </div>

              <p>Buy Nxt Watch Premium Prepaid plan with UPI</p>
              <button type="button">GET IT NOW</button>
            </div>
            <VideoSection videos={videos} />
          </>
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

  makesearchdata = () => {
    const {inputtext} = this.state
    this.setState({search: inputtext}, this.getdetais)
  }

  render() {
    const {classs, search, videos, display} = this.state

    return (
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
                    <div className="bodycontent">{this.callswitch()}</div>
                  </div>
                </>
              ) : (
                <>
                  <Header />
                  <div className="homemaincontainer">
                    <Sidebar />
                    <div className="bodycontent">{this.callswitch()}</div>
                  </div>
                </>
              )}
            </>
          )
        }}
      </Contextdata.Consumer>
    )
  }
}

export default Home
