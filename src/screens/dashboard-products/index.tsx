import { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";

import { DashboardProductIsEmpty } from "src/components/dashboard-product-is-empty";
import { DashboardProductPaginate } from "src/components/dashboard-product-paginate";
import { useProductsContext } from "src/contexts/products-context";
import { ProductsStoreType } from "src/services/api/product-api/types";
import { Container } from "src/styles/components/container";
import { TitlePrimary } from "src/styles/components/titles";
import { DashboardProductsWrapper, DashboardProductsContent } from "src/styles/screens/dashboard-products";
import { returnBoxs } from "../generic";

export function DashboardProducts() {
  const { deletedCount, createdCount, getAllProducts, getProductsByTitle } = useProductsContext();
  const searchProductInputRef = useRef<HTMLInputElement>(null);
  const data = getAllProducts();
  const count: number = data ? data.data.length : 0;

  const [page, setPage] = useState({ start: 0, end: 12, actual: 1 });
  const [products, setProducts] = useState<ProductsStoreType | null>(data);

  useEffect(() => {
    setProducts(getAllProducts());
  }, [deletedCount, createdCount]);

  function handleSearchProduct() {
    if (searchProductInputRef.current && searchProductInputRef.current.value.length > 2) {
      const products = getProductsByTitle(searchProductInputRef.current.value);
      setProducts(products);
    }
  }

  function handlerNextDataClick() {
    const data = getAllProducts();

    if (!data) return;

    const start = page.start + 12;
    const end = page.end + 12;
    const actual = page.actual + 1;

    setPage({ end, start, actual });
    setProducts({ data: data.data.slice(start, end) });
  }

  function handlerPrevDataClick() {
    const data = getAllProducts();

    if (!data) return;

    const start = page.start - 12;
    const end = page.end - 12;
    const actual = page.actual - 1;

    setPage({ end, start, actual });
    setProducts({ data: data.data.slice(start, end) });
  }

  return (
    <DashboardProductsWrapper>
      <Container>
        <DashboardProductsContent>
          <header id="header-search">
            <TitlePrimary>
              {
                (products && products.data.length > 0)
                  ? "Todos os produtos"
                  : "Nenhum produto encontrado"
              }
            </TitlePrimary>

            <div>
              <input name="search" type="text" ref={searchProductInputRef}/>
              <button type="button" onClick={handleSearchProduct}>
                <span>
                  <FiSearch />
                </span>
              </button>
            </div>
          </header>
          {(products && products.data.length > 0)
            ? (
              <section>
                {
                  (products && page.actual === 1)
                    ? products.data.slice(page.start, page.end).map(item => returnBoxs(item))
                    : products && products.data.map(item => returnBoxs(item))
                }
              </section>
            ) : (<DashboardProductIsEmpty />)
          }

          {(products && products.data.length > 0) && (
            <DashboardProductPaginate
              nextCbFetch={handlerNextDataClick}
              prevCbFetch={handlerPrevDataClick}
              prevDisabled={page.actual === 1}
              nextDisabled={page.actual === Math.ceil(count / 12)}
            />
          )}
        </DashboardProductsContent>
      </Container>
    </DashboardProductsWrapper>
  )
}