import { DashboardWrapperSideBar } from "./dashboard-wrapper-sidebar";
import { 
  DashboarWrapperContainer, 
  DashboarWrapperContent, 
  DashboarWrapperNavigator 
} from "src/styles/components/dashboard-wrapper";
import { DashboardWrapperProps } from "./types";

export function DashboarWrapper({ children }: DashboardWrapperProps) {
  return (
    <DashboarWrapperContainer>
      <DashboarWrapperNavigator>
        <DashboardWrapperSideBar/>
      </DashboarWrapperNavigator>
      <DashboarWrapperContent>
        { children }
      </DashboarWrapperContent>
    </DashboarWrapperContainer>
  )
}