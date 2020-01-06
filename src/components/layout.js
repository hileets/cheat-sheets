import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import "./layout.css"
import styled, { ThemeProvider } from "styled-components"
import CheatCard from "./CheatCard/CheatCard"
import Tag from "./Tag/Tag"
import Masonry from 'masonry-layout'
import { lightTheme, darkTheme } from '../Themes/theme'
import { GlobalStyles } from '../Themes/global'
import { Sun } from "styled-icons/boxicons-regular/Sun"
import { Moon } from "styled-icons/boxicons-regular/Moon"

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

const LayoutContainerWrapper = styled.div`
position:relative;
`

const LayoutContainer = styled.div`
padding: 100px;
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
`
const ToggleButtonWrapper = styled.div`
display:flex;
justify-content: flex-end;
`
const ThemeToggleIcon = styled(Sun)``

const Layout = () => {
  useEffect(() => {
    const grids = document.querySelector('.grid');
    new Masonry(grids, {
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
        <LayoutContainerWrapper>
          <ToggleButtonWrapper className='toggleButtonWrapper'>
            <ThemeToggleIcon onClick={toggleTheme} size="35" />


          </ToggleButtonWrapper>
          <Heading>
            <MainHeading className='mainHeading'>
              react native
          </MainHeading>
            <SubHeading className='subHeading'>
              Cheat Sheet
          </SubHeading>
          </Heading>
          <LayoutContainer className='layoutContainer'>
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
        </LayoutContainerWrapper>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
