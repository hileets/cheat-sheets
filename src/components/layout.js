import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import styled from "styled-components"
import CheatCard from "./CheatCard/CheatCard"
import Tag from "./Tag/Tag"

const data = [{
  heading: `Defaults`,
  cheats: [{
    title: "Components", text: `
import React from 'react'
import ReactDOM from 'react-dom'

class Hello extends React.Component {
  render () {
    return <div className='message-box'>
      Hello {this.props.name}
    </div>
  }
}

const el = document.body
ReactDOM.render(<Hello name='John' />, el)

`,
  }]
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
  }],
}]


const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: 700,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        {
          data.map(head =>
            (<div>
              <Tag tagTitle={head.heading} />
              {head.cheats.map(cheat =>
                <CheatCard cardTitle={cheat.title} cardText={cheat.text} />
              )}
            </div>))
        }
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
