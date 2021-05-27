import { useLocation } from "react-router";

import { DashboardProductForm } from "src/components/dashboard-product-form";
import { useProductsContext } from "src/contexts/products-context";
import { Container } from "src/styles/components/container";
import { TitlePrimary } from "src/styles/components/titles";
import { DashboardUpdateWrapper } from "src/styles/screens/dashboard-update";
import { formatArrayCategories } from "src/utils/formatCategories";

type locationState = {
  id: string;
}

export function DashboardUpdate() {
  const history = useLocation<locationState>();
  const { getOneProduct } = useProductsContext();
  const data = getOneProduct(history.state.id);

  return (
    <DashboardUpdateWrapper>
      <Container>
        <TitlePrimary>Atualizar produto</TitlePrimary>
        <DashboardProductForm 
          data={data || undefined} 
          categories={ data ? formatArrayCategories(data.category) : undefined }
          isUpdate={true}
        />
      </Container>
    </DashboardUpdateWrapper>
  )
}