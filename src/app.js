'use strict'

import React from 'react'
import Title from './title'

var App = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <Title name='Heresson' lastname='Mendes' />
      </div>
    )
  }
})

export default App
