import {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'
import LoginRoute from './components/LoginRoute'
import Header from './components/Header'
import Home from './components/Home'
import Contextdata from './Context/Context'
import DisplayVideo from './components/DisplayVideo'
import Protectpage from './Protectpage/ProtectPage'
import Trending from './components/Trending/index'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

// Replace your code here
class App extends Component {
  state = {status: '', savedvideos: [], id: ''}

  updatestatus = () => {
    this.setState(object => ({status: !object.status}))
  }

  addid = id => {
    this.setState({id})
  }

  addvideos = (videos, channel) => {
    console.log('vdieos')
    console.log(videos)
    this.setState(object => ({
      savedvideos: [...object.savedvideos, {videos, channel}],
    }))
  }

  render() {
    const {status, savedvideos, id} = this.state
    return (
      <Contextdata.Provider
        value={{
          status,
          savedvideos,
          id,
          addid: this.addid,
          addvideos: this.addvideos,
          updatestatus: this.updatestatus,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={LoginRoute} />
            <Protectpage exact path="/" component={Home} />
            <Protectpage exact path="/trending" component={Trending} />
            <Protectpage exact path="/gaming" component={Gaming} />
            <Protectpage exact path="/saved-videos" component={SavedVideos} />
            <Protectpage exact path="/videos/:id" component={DisplayVideo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Contextdata.Provider>
    )
  }
}

export default App
