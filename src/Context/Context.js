import React from 'react'

const Contextdata = React.createContext({
  status: false,
  savedvideos: [],
  id: '',
  addid: () => {},
  addvideos: () => {},
  updatestatus: () => {},
})
export default Contextdata
