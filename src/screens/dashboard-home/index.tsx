import { DashboardBoxInfo } from "src/components/dashboard-box-info";
import { useProductsContext } from "src/contexts/products-context";
import { Container } from "src/styles/components/container";
import { DashboardHomeHeader, DashboardHomeWrapper } from "src/styles/screens/dashboard-home";
import { formatDate } from "src/utils/formatDate";

export function DashboardHome() {
  const {  deletedCount, createdCount, updatedCount } = useProductsContext();

  return (
    <DashboardHomeWrapper>
      <Container>
        <DashboardHomeHeader>
          <DashboardBoxInfo 
            title="Total" 
            value={createdCount.count ?? 0} 
            updatedAt={ createdCount.count !== undefined ? formatDate(createdCount.updatedDateCount) : "Loading"} 
            bgType="created"/>
          <DashboardBoxInfo 
            title="Deletados" 
            value={deletedCount.deletedCount ?? 0} 
            updatedAt={ deletedCount.deletedCount !== undefined ? formatDate(deletedCount.updatedDateDaletedCount) : "Loading"}
            bgType="deleted"/>
          <DashboardBoxInfo 
            title="Atualizados" 
            value={updatedCount.updatedCount ?? 0} 
            updatedAt={ updatedCount.updatedCount !== undefined ? formatDate(updatedCount.updatedDateUpdatedCount) : "Loading"}
            bgType="updated"/>
        </DashboardHomeHeader>
      </Container>
    </DashboardHomeWrapper>
  )
}