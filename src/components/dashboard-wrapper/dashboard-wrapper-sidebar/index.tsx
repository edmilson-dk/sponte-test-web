import { FiHome, FiList, FiMoon, FiPlusSquare, FiSun } from "react-icons/fi";

import { NavigatorButton } from "./navigator-button";
import { DashboardWrapperSideBarWrapper } from "src/styles/components/dashboard-wrapper/dashboard-wrapper-sidebar";

import logoSvg from "src/assets/logo.svg";
import { useCustomThemeContext } from "src/contexts/CustomThemeContext";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

export function DashboardWrapperSideBar() {
  const { toggleTheme } = useCustomThemeContext();
  const { title } = useContext(ThemeContext);

  return (
    <DashboardWrapperSideBarWrapper>
      <div>
        <img src={logoSvg} alt="Product flow logotipo"/>
        <div>
          <span>
            <FiSun size="100%"/>
          </span>
          <button 
            type="button" 
            className={title === "dark" ? "dark" : "light"}
            onClick={toggleTheme}
          ></button>
          <span>
            <FiMoon size="100%"/>
          </span>
        </div>
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