import { DashboardProductForm } from "src/components/dashboard-product-form";
import { Container } from "src/styles/components/container";
import { TitlePrimary } from "src/styles/components/titles";
import { DashboardCreateWrapper } from "src/styles/screens/dashboard-create";

export function DashboardCreate() {
  return (
    <DashboardCreateWrapper>
      <Container>
        <TitlePrimary>Adicionar novo produto</TitlePrimary>
        <DashboardProductForm />
      </Container>
    </DashboardCreateWrapper>
  )
}