import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

import { DashboardBoxInfo } from "src/components/dashboard-box-info";
import { DashboardProductIsEmpty } from "src/components/dashboard-product-is-empty";
import { useProductsContext } from "src/contexts/products-context";
import { Container } from "src/styles/components/container";
import { TitlePrimary } from "src/styles/components/titles";
import { DashboardHomeContent, DashboardHomeHeader, DashboardHomeWrapper } from "src/styles/screens/dashboard-home";
import { formatDate } from "src/utils/formatDate";
import { returnBoxs } from "../generic";

export function DashboardHome() {
  const { deletedCount, createdCount, updatedCount, getAllProducts } = useProductsContext();

  const [products, setProducts] = useState(getAllProducts());

  useEffect(() => {
    setProducts(getAllProducts());
  }, [deletedCount, createdCount])

  return (
    <DashboardHomeWrapper>
      <Container>
        <DashboardHomeHeader>
          <DashboardBoxInfo
            title="Total"
            value={createdCount.count ?? 0}
            updatedAt={
              createdCount.count !== undefined
                ? formatDate(createdCount.updatedDateCount)
                : "Não disponível"
            }
            bgType="created" />
          <DashboardBoxInfo
            title="Deletados"
            value={deletedCount.deletedCount ?? 0}
            updatedAt={
              deletedCount.deletedCount !== undefined
                ? formatDate(deletedCount.updatedDateDaletedCount)
                : "Não disponível"
            }
            bgType="deleted" />
          <DashboardBoxInfo
            title="Atualizações"
            value={updatedCount.updatedCount ?? 0}
            updatedAt={
              updatedCount.updatedCount !== undefined
                ? formatDate(updatedCount.updatedDateUpdatedCount)
                : "Não disponível"
            }
            bgType="updated" />
        </DashboardHomeHeader>

        <span id="arrow">
          <FiArrowRight size="100%" />
        </span>

        <DashboardHomeContent>
          <TitlePrimary>
            {
              (products && products.data.length > 0) 
                ? "Produtos mais recentes" 
                : "Nenhum produto cadastrado"
            }
          </TitlePrimary>

          { 
            (products && products.data.length > 0) 
              ? (
              <section>
                {
                  products && products.data
                    .slice(products.data.length - 9, products.data.length)
                    .reverse()
                    .map(item => returnBoxs(item))
                }
              </section>
            ) : ( <DashboardProductIsEmpty /> )
          }
        </DashboardHomeContent>
      </Container>
    </DashboardHomeWrapper>
  )
}