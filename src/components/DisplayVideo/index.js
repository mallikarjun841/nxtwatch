import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import ReactPlayer from 'react-player'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Contextdata from '../../Context/Context'

import './index.css'

class DisplayVideo extends Component {
  state = {videos: {}, channel: {}}

  componentDidMount() {
    this.getvideodetails()
  }

  getvideodetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    console.log('start')
    const response = await fetch(url, options)
    const responsedata = await response.json()
    console.log(responsedata)
    console.log('stop')
    const updatelist = {
      id: responsedata.video_details.id,
      publishedAt: responsedata.video_details.published_at,
      thumbnailUrl: responsedata.video_details.thumbnail_url,
      title: responsedata.video_details.title,
      viewCount: responsedata.video_details.view_count,
      description: responsedata.video_details.description,
      videoUrl: responsedata.video_details.video_url,
    }
    const channel = {
      name: responsedata.video_details.channel.name,
      profileimgUrl: responsedata.video_details.channel.profile_image_url,
      subscribeCount: responsedata.video_details.channel.subscriber_count,
    }
    console.log('1')
    console.log(updatelist)
    if (response.ok === true) {
      this.setState({videos: updatelist, channel})
    }
  }

  render() {
    const {videos, channel} = this.state
    console.log(videos)
    const {videoUrl, title, description, publishedAt, viewCount} = videos
    const {profileimgUrl, name, subscribeCount} = channel

    return (
      <Contextdata.Consumer>
        {value => {
          const {status, addvideos} = value
          const savevideo = () => {
            console.log('click')
            addvideos(videos, channel)
          }
          return (
            <>
              {status ? (
                <>
                  <Header />
                  <div className="homemaincontainer homedark">
                    <Sidebar />
                    <div className="videocontainer">
                      <ReactPlayer
                        width="100%"
                        height="450px"
                        url={videoUrl}
                        controls="true"
                      />
                      <p>{title}</p>
                      <div className="publishcontainer">
                        <div className="reactioncontainer">
                          <p className="p1">{viewCount} views</p>
                          <p className="p1">{publishedAt}</p>
                        </div>
                        <div className="reactioncontainer">
                          <button className="p1">
                            <AiOutlineLike />
                            Like
                          </button>
                          <button className="p1">
                            <AiOutlineDislike />
                            Dislike
                          </button>
                          <buttn onClick={savevideo} className="p1">
                            <MdPlaylistAdd />
                            Save
                          </buttn>
                        </div>
                      </div>
                      <hr />
                      <div className="profilecontainer">
                        <img
                          alt="channel logo"
                          className="profileimg"
                          src={profileimgUrl}
                        />

                        <div>
                          <p className="c1">{name}</p>
                          <p className="c1">{subscribeCount}</p>
                          <p>{description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Header />
                  <div className="homemaincontainer">
                    <Sidebar />
                    <div className="videocontainer">
                      <ReactPlayer
                        width="100%"
                        height="450px"
                        url={videoUrl}
                        controls="true"
                      />
                      <p>{title}</p>
                      <div className="publishcontainer">
                        <div className="reactioncontainer">
                          <p className="p1">{viewCount} views</p>
                          <p className="p1">{publishedAt}</p>
                        </div>
                        <div className="reactioncontainer">
                          <button className="p1">
                            <AiOutlineLike />
                            Like
                          </button>
                          <button className="p1">
                            <AiOutlineDislike />
                            Dislike
                          </button>
                          <button onClick={savevideo} className="p1">
                            <MdPlaylistAdd />
                            Save
                          </button>
                        </div>
                      </div>
                      <hr />
                      <div className="profilecontainer">
                        <img
                          className="profileimg"
                          src={profileimgUrl}
                          alt="channel logo"
                        />
                        <div>
                          <p className="c1">{name}</p>
                          <p className="c1">{subscribeCount}</p>
                          <p>{description}</p>
                        </div>
                      </div>
                    </div>
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
export default DisplayVideo
