import React, { ElementType } from 'react'
import {
  cilBell,
  cilCalculator,
  cilCalendar,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilEnvelopeOpen,
  cilGrid,
  cilLayers,
  cilHome,
  cilMap,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilSpreadsheet,
  cilStar,
  cilCreditCard,
  cilCropRotate,
  cilChart,
  cilCog,
  cilTransfer,
  cilAccountLogout,
  cilBank


} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react-pro'

export type Badge = {
  color: string
  text: string
}

export type NavItem = {
  component: string | ElementType
  name: string | JSX.Element
  icon?: string | JSX.Element
  badge?: Badge
  href?: string
  items?: NavItem[]
}

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon " />,
    badge: {
      color: 'info-gradient',
    },
    href: '/',
  },


  {
    component: CNavItem,
    name: 'Transaction',
    href: '/transactions',
    icon: <CIcon icon={cilTransfer
    } customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Payment',
    href: '/theme/colors',
    icon: <CIcon icon={cilBank} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Card',
    href: '/theme/typography',
    icon: <CIcon icon={cilCreditCard} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Insights',
    href: '/components/widgets',
    icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
    badge: {
      color: 'info-gradient',
      text: 'PRO',
    },
  },
  {
    component: CNavItem,
    name: 'Settings',
    icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
    badge: {
      color: 'danger-gradient',
    },
    href: '/components/smart-table',
  },
  {
    component: CNavItem,
    name: 'Logout',
    icon: <CIcon icon={cilAccountLogout
    } customClassName="nav-icon" />,
    badge: {
      color: 'danger-gradient',
    },
    href: '/components/smart-table',
  },
]

export default _nav
