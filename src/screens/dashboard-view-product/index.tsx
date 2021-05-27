import { useLocation } from "react-router";

import { DashboardProductInfos } from "src/components/dashboard-product-infos";
import { useProductsContext } from "src/contexts/products-context";
import { Container } from "src/styles/components/container";
import { TitlePrimary } from "src/styles/components/titles";
import { DashboardCreateWrapper } from "src/styles/screens/dashboard-create";

type locationState = {
  id: string;
}

export function DashboardViewProduct() {
  const history = useLocation<locationState>();
  const { getOneProduct } = useProductsContext();
  const data = getOneProduct(history.state.id);

  return (
    <DashboardCreateWrapper>
      <Container>
        <TitlePrimary>Dados do produto</TitlePrimary>
        <DashboardProductInfos data={data}/>
      </Container>
    </DashboardCreateWrapper>
  )
}