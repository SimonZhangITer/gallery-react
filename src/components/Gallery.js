require('styles/Gallery.styl')

import React from 'react'

let imageDatas = require('../data/imageDatas.js')

console.log(imageDatas);

class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <section className="stage">
        <section className="img-sec">
          section
        </section>
        <nav className="ctrl-nav">

        </nav>
      </section>
    )
  }
}

export default Gallery
