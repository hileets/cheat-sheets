import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import "./layout.css"
import styled, { ThemeProvider } from "styled-components"
import CheatCard from "./CheatCard/CheatCard"
import Tag from "./Tag/Tag"
import { lightTheme, darkTheme } from "../Themes/theme"
import { GlobalStyles } from "../Themes/global"
import { Sun } from "styled-icons/boxicons-regular/Sun"
import { Moon } from "styled-icons/boxicons-regular/Moon"
// import Masonry from 'masonry-layout'
// const Masonry = require('masonry-layout');
const data = [
  {
    heading: `Defaults`,
    cheats: [
      {
        title: "Setting default props",
        text: `Hello.defaultProps = {
    color: 'blue'
  }`,
      },
      {
        title: "Setting default state",
        text: `class Hello extends Component {
    constructor (props) {
      super(props)
      this.state = { visible: true }
    }
  }

  class Hello extends Component {
      state = { visible: true }
    }
  }
  `,
      },
      {
        title: "Setting default state",
        text: `class Hello extends Component {
    constructor (props) {
      super(props)
      this.state = { visible: true }
    }
  }

  class Hello extends Component {
      state = { visible: true }
    }
  }
  `,
      },
      {
        title: "Setting default state",
        text: `class Hello extends Component {
    constructor (props) {
      super(props)
      this.state = { visible: true }
    }
  }

  class Hello extends Component {
      state = { visible: true }
    }
  }
  `,
      },
      {
        title: "Setting default state",
        text: `class Hello extends Component {
    constructor (props) {
      super(props)
      this.state = { visible: true }
    }
  }

  class Hello extends Component {
      state = { visible: true }
    }
  }
  `,
      },
      {
        title: "Setting default state",
        text: `class Hello extends Component {
    constructor (props) {
      super(props)
      this.state = { visible: true }
    }
  }

  class Hello extends Component {
      state = { visible: true }
    }
  }
  `,
      },
      {
        title: "Setting default state",
        text: `class Hello extends Component {
    constructor (props) {
      super(props)
      this.state = { visible: true }
    }
  }

  class Hello extends Component {
      state = { visible: true }
    }
  }
  `,
      },
      {
        title: "Setting default props",
        text: `Hello.defaultProps = {
    color: 'blue'
  }`,
      },
      {
        title: "Setting default props",
        text: `Hello.defaultProps = {
    color: 'blue'
  }`,
      },
    ],
  },
  {
    heading: "Other Components",
    cheats: [
      {
        title: "Import multiple exports",
        text: `import React, {Component} from 'react'
  import ReactDOM from 'react-dom'
  class Hello extends Component {
    ...
  }`,
      },
      {
        title: "Children",
        text: `<AlertBox>
    <h1>You have pending notifications</h1>
  </AlertBox>

  class AlertBox extends Component {
    render () {
      return <div className='alert-box'>
        {this.props.children}
      </div>
    }
  }`,
      },
    ],
  },
]

const LayoutContainerWrapper = styled.div`
  position: relative;
`
const LayoutContainer = styled.div`
  display: flex;
  flex-flow: column;
  /* padding:50px 50px 50px 50px; */
`
const Heading = styled.div`
  display: flex;
  flex-flow: column wrap;
`
const MainHeading = styled.h1`
  flex: 1 1 auto;
  font-family: "Work Sans", sans-serif;
  font-style: italic;
  font-size: 210px;
  padding-right:5px;
  margin-bottom:-20px;
`
const SubHeading = styled.h3`
  flex: 1 1 auto;
  font-family: "Work Sans", sans-serif;
  font-style: italic;
  font-size: 50px;
  align-self:flex-end;
  padding-right:10px;
`

const ToggleButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
const LightIcon = styled(Moon)`
  color: #bf616a;
  :hover {
    cursor: pointer;
  }
`
const DarkIcon = styled(Sun)`
  color: #88c0d0;
  :hover {
    cursor: pointer;
  }
`

const Layout = () => {
  useEffect(() => {
    const grids = document.querySelector(".grid")
    const Masonry = require("masonry-layout")
    new Masonry(grids, {
      itemSelector: ".grid-item",
      columnWidth: 40,
      gutter: 30,
    })
  }, [])

  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <LayoutContainerWrapper>
          <ToggleButtonWrapper className="toggleButtonWrapper">
            {theme === "light" && <LightIcon onClick={toggleTheme} size="35" />}
            {theme === "dark" && <DarkIcon onClick={toggleTheme} size="35" />}
          </ToggleButtonWrapper>
          <LayoutContainer className="layoutContainer">
            <Heading>
              <MainHeading className="mainHeading">react native</MainHeading>
              <SubHeading className="subHeading">cheat sheet</SubHeading>
            </Heading>
            {data.map(head => (
              <>
                <Tag tagTitle={head.heading} />
                <div className="grid">
                  {head.cheats.map(cheat => (
                    <CheatCard
                      cardTitle={cheat.title}
                      cardText={cheat.text}
                      className="grid-item"
                    />
                  ))}
                </div>
              </>
            ))}
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
