import { FiEye, FiSettings, FiTrash2 } from "react-icons/fi";
import { DashboardProductBoxWrapper } from "src/styles/components/dashboard-product-box";
import { formatValueToMoney } from "src/utils/formatValueToMoney";

import { DashboardProductBoxProps } from "./types";

export function DashboardProductBox({ title, category, image, value, id }: DashboardProductBoxProps) {
  return (
    <DashboardProductBoxWrapper>
      <div>
        <img src={image} alt="Produto infos" />
      </div>
      <article>
        <p>
          <strong>Titúlo:</strong>
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
        <button id="update-product">
          <span>
            <FiSettings size="100%"/>
          </span>
        </button>
        <button id="delete-product">
          <span>
            <FiTrash2 size="100%"/>
          </span>
        </button>
      </footer>
    </DashboardProductBoxWrapper>
  )
}