import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display:flex;
  color:#e1e9fc;
  justify-content:space-between;
  align-items:center;
  padding:20px;
  list-style:none;
  height:40px;
  text-decoration:none;
  font-size:18px;

  &:hover{
      background:#252831;
      border-left:4px solid #55bc7e;
      cursor:pointer;
  }
`;

const SidebarLabel = styled.span` 
margin-left:16px;

`;

const DropdownLink =styled(Link)`
  background:#414757;
  height:60px;
  padding-left:3rem;
  display:flex;
  align-item:center;
  text-decoration:none;
  color:#f5f5f5;
  font-size:18px;

  &:hover{
      background:#632ce4;
       border-left:4px solid #55bc7e;
      cursor: pointer;
  }
`;
const SubMenu = ({item}) =>{

    const [sub_nav, setSub_nav] = useState(false);

    const showSubnav = () => setSub_nav(!sub_nav);

    return(
        <>
           <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>

          <div>
              {item.item}
              <SidebarLabel>{item.title}</SidebarLabel>
          </div>
          <div>
              {item.subNav && sub_nav ? item.iconOpened :item.subNav ? item.iconClosed : null}
          </div>
            </SidebarLink>
            {sub_nav && item.subNav.map((item,index)=>{
               return(
                   <DropdownLink to={item.path} key={index}>
                       {item.icon}
                       <SidebarLabel>{item.title}</SidebarLabel>
                   </DropdownLink>
               ) 
            })}
        </>
    )
}
export default SubMenu;