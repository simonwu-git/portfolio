import React from 'react'
import '../assets/scss/main.scss'

import Footer from './Footer'
import topology from 'vanta/dist/vanta.topology.min'

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 'is-loading'
    }
    this.vantaRef = React.createRef();
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);

    this.vantaEffect = topology({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xa6b37a
    })
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }

    if (this.vantaEffect) this.vantaEffect.destroy();
  }

  render() {
    const { children } = this.props

    return (
      <div ref={this.vantaRef} className={`body ${this.state.loading}`}>
        <div id="wrapper">

          {children}
          <Footer />
        </div>
      </div>
    )
  }
}

export default Template
