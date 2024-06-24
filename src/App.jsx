import styled, { ThemeProvider } from "styled-components"
import { darkTheme } from "./assets/utils/Themes"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { BrowserRouter } from "react-router-dom"
import Hero from "./components/sections/Hero"
import Skills from "./components/sections/Skills"
import Experience from "./components/sections/Experience"
import Education from "./components/sections/Education"
import StyledStarsCanvas from "./components/canvas/Stars"
import Projects from "./components/sections/Projects"
import Contact from "./components/sections/Contact"



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

  return (
    <>
      <ThemeProvider theme={darkTheme}>


        <BrowserRouter>
          <Navbar />

          <Body>
            <StyledStarsCanvas/>

            <div>

              <Hero />
              <Skills />

              <Wrapper>
                {/* <Skills /> */}
                <Experience />
              </Wrapper>

              <Projects/>

              <Wrapper>
              <Education />
              <Contact/>
              </Wrapper>
          <Footer />

            </div>

          </Body>

        </BrowserRouter>

      </ThemeProvider>

    </>
  )
}

export default App
