import React, { useEffect } from "react"
import PropTypes from "prop-types"
import "./layout.css"
import styled from "styled-components"
// import { ThemeProvider } from 'styled-components';
// import { lightTheme, darkTheme } from './themes';
// import { GlobalStyles } from './global';
import CheatCard from "./CheatCard/CheatCard"
import Tag from "./Tag/Tag"
import Masonry from 'masonry-layout';

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
const MainHeading = styled.h1`
display: flex;
flex-flow: row wrap;
justify-content: center;
background-color:#2E3440;
font-family: 'Work Sans',sans-serif;
font-style: italic;
font-weight: 900;
font-size:16vw;
color:#3B414D;
padding-top:100px;
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

  return (
    // <ThemeProvider theme={lightTheme}>
    <>
      <MainHeading>
        react native
      </MainHeading>
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
    // </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
