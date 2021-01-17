import React from 'react'

import * as CgIcons from "react-icons/cg";
import * as FiIcons from "react-icons/fi"
import * as SiIcons from "react-icons/si"

export const SidebarData = [
    {
        title: 'Servers',
        path: '/',
        icon: <CgIcons.CgServer />,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <FiIcons.FiSettings />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <SiIcons.SiAboutDotMe />,
        cName: 'nav-text'
    }

]