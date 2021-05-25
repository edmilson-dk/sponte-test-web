import { FiHome, FiList, FiPlusSquare } from "react-icons/fi";

import { NavigatorButton } from "./navigator-button";
import { DashboardWrapperSideBarWrapper } from "src/styles/components/dashboard-wrapper/dashboard-wrapper-sidebar";

import logoSvg from "src/assets/logo.svg";

export function DashboardWrapperSideBar() {
  return (
    <DashboardWrapperSideBarWrapper>
      <div>
        <img src={logoSvg} alt="Product flow logotipo"/>
      </div>
      <nav>
        <NavigatorButton
          router="/"
          icon={<FiHome size="100%"/>}
          label="Home"
        />
         <NavigatorButton
          router="/new"
          icon={<FiPlusSquare size="100%"/>}
          label="Novo produto"
        />
         <NavigatorButton
          router="/list"
          icon={<FiList size="100%"/>}
          label="Produtos"
        />
      </nav>
    </DashboardWrapperSideBarWrapper>
  )
}