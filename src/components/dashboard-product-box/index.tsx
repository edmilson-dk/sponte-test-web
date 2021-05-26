import { useRef } from "react";
import { FiEye, FiSettings, FiTrash2 } from "react-icons/fi";
import { useHistory } from "react-router";
import { useProductsContext } from "src/contexts/products-context";
import { DashboardProductBoxWrapper } from "src/styles/components/dashboard-product-box";
import { formatValueToMoney } from "src/utils/formatValueToMoney";

import { DashboardProductBoxProps } from "./types";

export function DashboardProductBox({ title, category, image, value, id }: DashboardProductBoxProps) {
  const { deleteProduct } = useProductsContext();
  const history = useHistory();
  const boxRef = useRef<HTMLDivElement>(null);

  function hadlerDelete() {
    deleteProduct(id);

    if (!boxRef.current) return;

    boxRef.current.style.display = "none";
  }

  function handlerUpdate() {
    history.push("/update", {
      id,
    });
  }

  return (
    <DashboardProductBoxWrapper ref={boxRef}>
      <div>
        <img src={image} alt="Produto infos" />
      </div>
      <article>
        <p>
          <strong>Nome:</strong>
          <span>{title}</span>
        </p>
        <p>
          <strong>Valor:</strong>
          <span>{formatValueToMoney(String(value))}</span>
        </p>
        <p id="product-category">
          <strong>Catégorias:</strong>
          {
            category.map(c => <span key={c}>{c}</span>)
          }
        </p>
      </article>
      <footer>
        <button id="view-product">
          <span>
            <FiEye size="100%"/>
          </span>
        </button>
        <button id="update-product" onClick={handlerUpdate}>
          <span>
            <FiSettings size="100%"/>
          </span>
        </button>
        <button type="button" id="delete-product" onClick={hadlerDelete}>
          <span>
            <FiTrash2 size="100%"/>
          </span>
        </button>
      </footer>
    </DashboardProductBoxWrapper>
  )
}