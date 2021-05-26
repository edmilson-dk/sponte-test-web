import { useEffect, useState } from "react";

import defaultProductImagePng from "src/assets/default-product-image.png";

import { DashboardBoxInfo } from "src/components/dashboard-box-info";
import { DashboardProductBox } from "src/components/dashboard-product-box";
import { useProductsContext } from "src/contexts/products-context";
import { Container } from "src/styles/components/container";
import { TitlePrimary } from "src/styles/components/titles";
import { DashboardHomeContent, DashboardHomeHeader, DashboardHomeWrapper } from "src/styles/screens/dashboard-home";
import { formatDate } from "src/utils/formatDate";

export function DashboardHome() {
  const {  deletedCount, createdCount, updatedCount, getAllProducts } = useProductsContext();
 
  const [ products, setProducts ] = useState(getAllProducts());

  useEffect(() => {
    setProducts(getAllProducts());
  }, [ deletedCount, createdCount ])

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
            bgType="created"/>
          <DashboardBoxInfo 
            title="Deletados" 
            value={deletedCount.deletedCount ?? 0} 
            updatedAt={ 
              deletedCount.deletedCount !== undefined 
                ? formatDate(deletedCount.updatedDateDaletedCount) 
                : "Não disponível"
            }
            bgType="deleted"/>
          <DashboardBoxInfo 
            title="Atualizados" 
            value={updatedCount.updatedCount ?? 0} 
            updatedAt={ 
              updatedCount.updatedCount !== undefined 
                ? formatDate(updatedCount.updatedDateUpdatedCount) 
                : "Não disponível"
            }
            bgType="updated"/>
        </DashboardHomeHeader>
        
        <DashboardHomeContent>
          <TitlePrimary>Produtos mais recentes</TitlePrimary>

          <section>
            {
              products && products.data.slice(0, 9).reverse().map((item, index) => (
                <DashboardProductBox 
                  key={item.id}
                  title={item.title}
                  value={item.value}
                  category={item.category}
                  id={item.id}
                  image={item.image || defaultProductImagePng}
                  createdAt={item.createdAt}
                />
              ))
            }
          </section>
        </DashboardHomeContent>
      </Container>
    </DashboardHomeWrapper>
  )
}