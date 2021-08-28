import React,{useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import * as FaIcon from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {SidebarData} from './sidebar';
import SubMenu from './subMenu';
import {IconContext} from 'react-icons/lib';

// background:#15171c;
const Nav = styled.div`

height:80px;
display:flex;
justify-content:flex-end;
align-items:center;

`;

const NavIcon =styled(Link)`
margin-right:2rem; 
font-size:2rem;
height:80px;
display:flex;
justify-content:flex-end;
align-Items:center;
`;

//opacity:0.5;
const SidebarNav = styled.nav`
background:#15171c;
opacity:0.9;
width:100vw;
height:70vh;
display:flex;
justify-content:center;
position:fixed;
top:0;
right: ${({sidebar }) =>(sidebar ? '0' : '-100%')};
transition:350ms;
z-index:10;
overflow:auto;
`;

const SidebarWrap = styled.div` 
width:100%;
`;


const Sidebars = () => {

    const  [sidebar,setSidebar] = useState(false);

    const showSidebar = ()=>setSidebar(!sidebar);
    return (
        <div>
             <IconContext.Provider value={{color:'#55bc7e'}}> 
            <Nav>
                <NavIcon to='#'  >
                    <FaIcon.FaBars onClick={showSidebar} value={{color:'black'}}/>
                </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcon to="#">
                        <AiIcons.AiOutlineClose onClick={showSidebar}/>
                    </NavIcon>
                    {SidebarData.map((item, index)=>{
                   return<SubMenu item ={item} key={index}/>;
                    })}
                </SidebarWrap>
            </SidebarNav>
             </IconContext.Provider> 
        </div>
    )
}

export default Sidebars;
