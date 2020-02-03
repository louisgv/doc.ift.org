import React from "react"
import SideBarNav from "gatsby-theme-apollo-core/src/components/sidebar-nav/index"
import styled from "@emotion/styled"
import { ReactComponent as IFTLogo } from "../../../assets/IFT_LogoStgSvg.svg"

const AuthorShipContainer = styled.div({
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})

const year = new Date().getFullYear()

export default function CustomSidebarNav(props) {
  return (
    <>
      <SideBarNav {...props} />
      <AuthorShipContainer>
        © {year}
        <IFTLogo viewBox="0 0 100 100" height="1em" width="30px" />
        . All rights reserved.
      </AuthorShipContainer>
    </>
  )
}
