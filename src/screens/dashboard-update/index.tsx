import { useLocation } from "react-router";
import { DashboardProductForm } from "src/components/dashboard-product-form";
import { useProductsContext } from "src/contexts/products-context";
import { Container } from "src/styles/components/container";
import { TitlePrimary } from "src/styles/components/titles";
import { DashboardCreateWrapper } from "src/styles/screens/dashboard-create";
import { formatArrayCategories } from "src/utils/formatCategories";

type r = {
  id: string;
}

export function DashboardUpdate() {
  const history = useLocation<r>();
  const { getOneProduct } = useProductsContext();
  const data = getOneProduct(history.state.id);

  return (
    <DashboardCreateWrapper>
      <Container>
        <TitlePrimary>Atualizar produto</TitlePrimary>
        <DashboardProductForm 
          data={data || undefined} 
          categories={ data ? formatArrayCategories(data.category) : undefined }
          isUpdate={true}
        />
      </Container>
    </DashboardCreateWrapper>
  )
}