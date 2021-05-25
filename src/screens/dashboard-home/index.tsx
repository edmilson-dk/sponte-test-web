import { DashboardBoxInfo } from "src/components/dashboard-box-info";
import { Container } from "src/styles/components/container";
import { DashboardHomeHeader, DashboardHomeWrapper } from "src/styles/screens/dashboard-home";

export function DashboardHome() {

  return (
    <DashboardHomeWrapper>
      <Container>
        <DashboardHomeHeader>
          <DashboardBoxInfo 
            title="Total" 
            value={10} 
            updatedAt="10 Mar 20" 
            bgType="created"/>
          <DashboardBoxInfo 
            title="Deletados" 
            value={2} 
            updatedAt="10 Mar 20" 
            bgType="deleted"/>
          <DashboardBoxInfo 
            title="Atualizados" 
            value={4} 
            updatedAt="10 Mar 20" 
            bgType="updated"/>
        </DashboardHomeHeader>
      </Container>
    </DashboardHomeWrapper>
  )
}