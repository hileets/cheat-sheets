import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import styled from "styled-components"
import CheatCard from "./CheatCard/CheatCard"
import Tag from "./Tag/Tag"

const data = [{
  heading: `Defaults`,
  cheats: [
    {
      title: "Setting default props", text: `Hello.defaultProps = {
    color: 'blue'
  }`
    },
    {
      title: "Setting default state", text: `class Hello extends Component {
    constructor (props) {
      super(props)
      this.state = { visible: true }
    }
  }
    
  class Hello extends Component {
      state = { visible: true }
    }
  }
  `
    }
    ,
    {
      title: "Setting default state", text: `class Hello extends Component {
    constructor (props) {
      super(props)
      this.state = { visible: true }
    }
  }
    
  class Hello extends Component {
      state = { visible: true }
    }
  }
  `
    },
    {
      title: "Setting default state", text: `class Hello extends Component {
    constructor (props) {
      super(props)
      this.state = { visible: true }
    }
  }
    
  class Hello extends Component {
      state = { visible: true }
    }
  }
  `
    }
  ]
},
{
  heading: 'Other Components', cheats: [{
    title: "Import multiple exports", text: `import React, {Component} from 'react'
  import ReactDOM from 'react-dom'
  class Hello extends Component {
    ...
  }`
  },
  {
    title: "Children", text: `<AlertBox>
    <h1>You have pending notifications</h1>
  </AlertBox>
   
  class AlertBox extends Component {
    render () {
      return <div className='alert-box'>
        {this.props.children}
      </div>
    }
  }`
  }]
}]

const LayoutContainer = styled.div`
padding: 50px;`

const Layout = () => {
  return (

    <LayoutContainer>
      {
        data.map(head =>
          (<>

            <Tag tagTitle={head.heading} />

            {head.cheats.map(cheat => (
              <CheatCard cardTitle={cheat.title} cardText={cheat.text} />
            ))}

          </>))
      }
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
