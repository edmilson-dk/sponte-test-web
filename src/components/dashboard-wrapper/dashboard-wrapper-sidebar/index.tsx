import { FiHome, FiList, FiPlusSquare } from "react-icons/fi";

import { NavigatorButton } from "./navigator-button";
import { DashboardWrapperSideBarWrapper } from "src/styles/components/dashboard-wrapper/dashboard-wrapper-sidebar";

export function DashboardWrapperSideBar() {
  return (
    <DashboardWrapperSideBarWrapper>
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