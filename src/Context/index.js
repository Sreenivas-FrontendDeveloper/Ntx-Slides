import React from 'react'

const SlideContext = React.createContext({
  initiallist: [],
  activeIndex: 0,
  changeActiveTab: () => {},
  addNewItem: () => 0,
  changeHeading: () => {},
  ChangeDescription: () => {},
})

export default SlideContext
