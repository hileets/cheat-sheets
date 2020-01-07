import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
// import "./layout.css"
import styled, { ThemeProvider } from "styled-components"
import CheatCard from "../components/CheatCard"
import Tag from "../components/Tag"
import { lightTheme, darkTheme } from "../Themes/theme"
import { GlobalStyles } from "../Themes/global"
import { Sun } from "styled-icons/boxicons-regular/Sun"
import { Moon } from "styled-icons/boxicons-regular/Moon"

const LayoutContainerWrapper = styled.div`
  position: relative;
`

const LayoutContainer = styled.div`
  padding: 100px;
  margin-top: -30px;
  display: flex;
  flex-flow: column;
`
const Heading = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  background-color: #2e3440;
`
const MainHeading = styled.h1`
  flex: 1 1 auto;
  font-family: "Work Sans", sans-serif;
  font-style: italic;
  font-weight: 900;
  font-size: 16vw;
  margin-bottom: -20px;
`
const SubHeading = styled.h3`
  flex: 1 1 auto;
  margin-top: -30px;
  margin-right: 60px;
  margin-bottom: -50px;
  align-self: flex-end;
  font-family: "Work Sans", sans-serif;
  font-style: italic;
  font-weight: 600;
  font-size: 5vw;
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

const CheatSheetTemplate = ({ pageContext }) => {
  const { title, content } = pageContext
  useEffect(() => {
    const grids = document.querySelector(".grid")
    const Masonry = require("masonry-layout")
    new Masonry(grids, {
      itemSelector: ".grid-item",
      columnWidth: 50,
      gutter: 20,
    })
  }, [])

  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === "light") {
      setTheme("dark")
      // otherwise, it should be light
    } else {
      setTheme("light")
    }
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <LayoutContainerWrapper>
        <ToggleButtonWrapper className="toggleButtonWrapper">
          {theme === "light" && <LightIcon onClick={toggleTheme} size="35" />}
          {theme === "dark" && <DarkIcon onClick={toggleTheme} size="35" />}
        </ToggleButtonWrapper>
        <Heading>
          <MainHeading className="mainHeading">{title}</MainHeading>
          <SubHeading className="subHeading">Cheat Sheet</SubHeading>
        </Heading>
        <LayoutContainer className="layoutContainer">
          {content.map(piece => (
            <>
              <Tag tagTitle={piece.title} />
              <div className="grid">
                {piece.cheats.map(cheat => (
                  <CheatCard
                    cardTitle={cheat.heading}
                    cardText={cheat.text}
                    className="grid-item"
                  />
                ))}
              </div>
            </>
          ))}
        </LayoutContainer>
      </LayoutContainerWrapper>
    </ThemeProvider>
  )
}

CheatSheetTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}
export default CheatSheetTemplate
