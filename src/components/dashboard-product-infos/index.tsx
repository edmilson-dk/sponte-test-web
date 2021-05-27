import { DashboardProductInfosWrapper } from "src/styles/components/dashboard-product-infos";
import { formatValueToMoney } from "src/utils/formatValueToMoney";
import { DashboardProductInfosProps } from "./types";

export function DashboardProductInfos({ data }: DashboardProductInfosProps) {
  return (
    <DashboardProductInfosWrapper>
      <header>
        <img src={data?.image} />
      </header>
      <article>
        <p>
          <strong>Nome:</strong>
          <span>{data?.title}</span>
        </p>
        <p>
          <strong>Valor:</strong>
          <span>{formatValueToMoney(String(data?.value))}</span>
        </p>
        <p>
          <strong>Altura:</strong>
          <span>{data?.height}cm</span>
        </p>
        <p>
          <strong>Largura:</strong>
          <span>{data?.width}cm</span>
        </p>
        <p>
          <strong>Comprimento:</strong>
          <span>{data?.length}cm</span>
        </p>
        <p>
          <strong>Peso:</strong>
          <span>{data?.weight}kg</span>
        </p>
        <p>
          <strong>Data de aquisição:</strong>
          <span>{data?.acquisition}</span>
        </p>
        <p>
          <strong>Código de barras:</strong>
          <span>{data?.barCode}</span>
        </p>
        <p id="view-product-category">
          <strong>Catégorias:</strong>
          {
            data?.category.map(c => <span key={c}>{c}</span>)
          }
        </p>
        <p>
          <strong>Descrição:</strong>
          <span>{data?.description}</span>
        </p>
      </article>
    </DashboardProductInfosWrapper>
  )
}