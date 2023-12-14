import React from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from './../store'
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from '@coreui/react-pro'

import { SiBankofamerica } from "react-icons/si";


import AppSidebarNav from './AppSidebarNav'

import CIcon from '@coreui/icons-react'

import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

import { logoNegative } from '@/public/brand/logo-negative'
import { sygnet } from '@/public/brand/sygnet'
// sidebar nav config
import navigation from '../_nav'

const AppSidebar = (): JSX.Element => {
  const dispatch = useDispatch()
  const unfoldable = useTypedSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useTypedSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      style={{backgroundColor: "#121b28"}}
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex">
        <div className="sidebar-brand-full flex items-center gap-2">        <SiBankofamerica className="sidebar-brand-full" size={30}/> <span>eazyBank</span>
</div>
        <SiBankofamerica className="sidebar-brand-narrow" size={40}/>

        {/* <h3>eazy bank</h3> */}
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() =>
          dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })
        }
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
