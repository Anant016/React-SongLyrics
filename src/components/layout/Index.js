import React, { Component } from 'react'

import Tracks from '../tracks/Tracks'
import Search from '../tracks/Search'
export default class Index extends Component {
  render() {
    return (
      <div>
          <Search />
        <Tracks />
      </div>
    )
  }
}
