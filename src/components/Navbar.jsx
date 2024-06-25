import styled, { useTheme } from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Bio } from "../data/constants";
import { MenuOpenRounded } from '@mui/icons-material';
import { useState } from 'react';
import { DiCssdeck } from 'react-icons/di';

const Nav = styled.div`
    background-color:${({ theme }) => theme.bg};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content:center;
    font-size:1rem;
    position:sticky;
    top: 0;
    z-index:10;
    color: white;
`

const NavbarContainer = styled.div`
    width:100%;
    max-width:1200px;
    padding:0 24px;
    display: flex;
    align-items: center;
    justify-content:space-between;
    font-size:1rem;
   
`

const NavLogo = styled(LinkR)`
    width: 80%;
    padding: 0 6px;
    /* background-color:red; */
    text-decoration:none;
    color: inherit;
    font-weight:500;
    font-size: 18px;
`
const NavItems = styled.ul`
    /* background-color:aqua; */
    width: 100%;
    display: flex;
    align-items:center;
    justify-content:center;
    gap:32px;
    padding: 0 6px;
    list-style:none;
    @media screen and (max-width:768px){
        display:none;
        
     }

`
const NavLink = styled.a`
     color: ${({ theme }) => theme.text_primary};
     font-weight:500;
     text-decoration:none;
     cursor: pointer;
     transition:all 0.2s ease-in-out;
     &:hover{
        color: ${({ theme }) => theme.primary} ;
     }
    
`

const ButtonContainer = styled.div`
     width: 80%;
     height: 100%;
     /* background-color:orange; */
     display: flex;
     justify-content:end;
     align-items:center;
     padding: 0 6px;
     @media screen and (max-width:768px){
        display:none;
        
     }
    
`
const GithubButton = styled.a`
     border: 1px solid ${({ theme }) => theme.primary};
     display:flex;
     justify-content:center;
     align-items:center;
     border-radius:20px;
     cursor: pointer;
     padding: 10px 20px;
     font-size:16px;
     font-weight:500;
     text-decoration:none;
     color: ${({ theme }) => theme.primary};
     /* background-color:brown; */
     transition:all 0.6s ease-in-out;
     &:hover{
        background-color:${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.text_primary} ;
     }

`

const MobileIcon = styled.div`
     height: 100%;
     color: ${({ theme }) => theme.text_primary} ;
     /* background-color:red; */
     display:flex;
     align-items:center;
     display: none;
     @media screen and (max-width:768px){
        display:block;
        
     }
`
const MobileMenu = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    align-items:start;
    justify-content:center;
    gap:16px;
    background-color:blue;
    padding: 0 6px;
    list-style:none;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light + 90};
    position: absolute;
    top:80px;
    right: 0;
   
    transition: all 0.6s ease-in-out;
    transform: ${({ open }) =>
        open ? "translateY(0)" : "translateY(-100%)"};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ open }) => (open ? "100%" : "0")};
    z-index: ${({ open }) => (open ? "1000" : "-1000")};
    
`
function Navbar() {
    const [open, setOpen] = useState(false)
    const theme = useTheme()
    return (

        <Nav >
            <NavbarContainer>
                {/*Logo */}
                <NavLogo to='/'>
                    <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
                        <DiCssdeck size="3rem" /> <span>Portfolio</span>
                    </a>
                </NavLogo>

                {/* Icon */}
                <MobileIcon onClick={() => setOpen(!open)}>
                    <MenuOpenRounded style={{ color: "inherit" }} />
                </MobileIcon>
                {open && (
                    <MobileMenu open={open}>
                        <NavLink onClick={() => setOpen(!open)} href="#Hero">
                            About
                        </NavLink>
                        <NavLink onClick={() => setOpen(!open)} href="#Skills">
                            Skills
                        </NavLink>
                        <NavLink onClick={() => setOpen(!open)} href="#Experience">
                            Experience
                        </NavLink>
                        <NavLink onClick={() => setOpen(!open)} href="#Projects">
                            Projects
                        </NavLink>
                        <NavLink onClick={() => setOpen(!open)} href="#Education">
                            Education
                        </NavLink>
                        <NavLink onClick={() => setOpen(!open)} href="#Contact">
                            Contact
                        </NavLink>
                        <GithubButton
                            href={Bio.github}
                            target="_Blank"
                            style={{
                                background: theme.primary,
                                color: theme.text_primary,
                            }}
                        >
                            Github Profile
                        </GithubButton>
                    </MobileMenu>
                )}
                {/*Nav Items */}
                <NavItems>
                    <NavLink href='#Hero'>About</NavLink>
                    <NavLink href='#Skills'>Skills</NavLink>
                    <NavLink href='#Experience'>Experience</NavLink>
                    <NavLink href='#Projects'>Projects</NavLink>
                    <NavLink href='#Education'>Education</NavLink>
                    <NavLink href='#Contact'>Contact</NavLink>
                </NavItems>
                {/* GitHub Button  */}
                <ButtonContainer>
                    <GithubButton href={Bio.github} target="_Blank">Github Profile</GithubButton>
                </ButtonContainer>

            </NavbarContainer>
        </Nav>
    )
}

export default Navbar
















