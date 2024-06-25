import styled, { ThemeProvider } from "styled-components"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./App.css"
import { BrowserRouter as Router } from "react-router-dom"
import Hero from "./components/sections/Hero"
import Skills from "./components/sections/Skills"
import Experience from "./components/sections/Experience"
import Education from "./components/sections/Education"
import StyledStarsCanvas from "./components/canvas/Stars"
import Projects from "./components/sections/Projects"
import Contact from "./components/Contact/Contact.jsx"
import { useState } from "react"
import { darkTheme ,lightTheme } from "./utils/Themes.js"



const Body = styled.div`
        background-color:${({ theme }) => theme.bg};
        color:${({ theme }) => theme.text_primary};
        width: 100%;
        height: 100%;
        /* overflow-y:hidden; */
        overflow-x:hidden;
        position:relative;
`
const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [openModal, setOpenModal] = useState({state:false,project:null})

  return (
    <>
      <ThemeProvider theme={darkMode?darkTheme:lightTheme}>
        <Router>
          <Navbar />
          <Body>
              <Hero />

              <Wrapper>
                <Skills />
                <Experience />
              </Wrapper>

              <Projects openModal={openModal} setOpenModal={setOpenModal}/>

              <Wrapper>
                <Education />
                <Contact/>
              </Wrapper>
          <Footer />

          {/* {
            openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal}/>

          } */}


          </Body>

        </Router>

      </ThemeProvider>

    </>
  )
}

export default App
