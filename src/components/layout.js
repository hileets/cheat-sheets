import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import "./layout.css"
import styled, { ThemeProvider } from "styled-components"
import CheatCard from "./CheatCard/CheatCard"
import Tag from "./Tag/Tag"
import Masonry from 'masonry-layout'
import { lightTheme, darkTheme } from '../Themes/theme'
import { GlobalStyles } from '../Themes/global'

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
    },
    {
      title: "Setting default props", text: `Hello.defaultProps = {
    color: 'blue'
  }`
    },
    {
      title: "Setting default props", text: `Hello.defaultProps = {
    color: 'blue'
  }`
    },
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
padding: 100px;
background-color: #2E3440;
margin-top:-30px;
display:flex;
flex-flow:column;
`
const Heading = styled.div`
display: flex;
flex-flow: column wrap;
justify-content: center;
background-color:#2E3440;
`
const MainHeading = styled.h1`
flex: 1 1 auto;
font-family: 'Work Sans',sans-serif;
font-style: italic;
font-weight: 900;
font-size:16vw;
/* color:#88C0D0; */
margin-bottom:-20px;
`
const SubHeading = styled.h3`
flex: 1 1 auto;
margin-top:-30px;
margin-right:60px;
margin-bottom:-50px;
align-self: flex-end;
font-family: 'Work Sans',sans-serif;
font-style: italic;
font-weight: 600;
font-size:5vw;
/* color:#A3BE8C; */
`
const ToggleButtonWrapper = styled.div`
display:flex;
justify-content: center;
background-color:#2E3440;
padding:50px;
`

const ToggleButton = styled.button`
background-color:#A3BE8C;
font-size:bold;
`

const Layout = () => {
  useEffect(() => {
    const grids = document.querySelector('.grid');
    var msnry = new Masonry(grids, {
      itemSelector: '.grid-item',
      columnWidth: 50,
      gutter: 20
    });
  }, []);

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === 'light') {
      setTheme('dark');
      // otherwise, it should be light
    } else {
      setTheme('light');
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <ToggleButtonWrapper className='toggleButton'>
          <ToggleButton onClick={toggleTheme}>Toggle Theme</ToggleButton>
        </ToggleButtonWrapper>
        <Heading>
          <MainHeading className='mainHeading'>
            react native
          </MainHeading>
          <SubHeading className='subHeading'>
            Cheat Sheet
          </SubHeading>
        </Heading>
        <LayoutContainer>
          {
            data.map(head =>
              (<>
                <Tag tagTitle={head.heading} />
                <div className="grid">
                  {head.cheats.map(cheat => (
                    <CheatCard cardTitle={cheat.title} cardText={cheat.text} className="grid-item" />
                  ))}
                </div>
              </>))
          }
        </LayoutContainer>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
