import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from  'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';


export const SidebarData = [
    {
        title: 'Overview',
        path: '/overview',
        icon: <AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title:'Users',
                path: '/overview/users',
                icon:<IoIcons.IoIosPaper />
            },
             {
                title:'Revenue',
                path: '/overview/revenue',
                icon:<IoIcons.IoIosPaper />
            },
        ]
    },
      {
        title: 'Report',
        path: '/reports',
        icon: <AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title:'Reports',
                path: '/reports/reports1',
                icon:<IoIcons.IoIosPaper />
            },
             {
                title:'Reports 2',
                path: '/reports/reports2',
                icon:<IoIcons.IoIosPaper />
            },
            {
                title:'Reports 3',
                path: '/reports/reports3',
                icon:<IoIcons.IoIosPaper />
            }
        ]
    },
    {
     title:'products',
     path:'/products',
     icon: <FaIcons.FaCartPlus/>
    },

    {
        title: 'Messages',
        path: '/messages',
        icon: <AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title:'Messages',
                path: '/messages/messages1',
                icon:<IoIcons.IoIosPaper />
            },
             {
                title:'Messages 2',
                path: '/messages/messages2',
                icon:<IoIcons.IoIosPaper />
            },
            {
                title:'messages 3',
                path: '/messages/messages3',
                icon:<IoIcons.IoIosPaper />
            }
        ]
    },
];

console.log(SidebarData);