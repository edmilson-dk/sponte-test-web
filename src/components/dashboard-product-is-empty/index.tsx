import isEmptySvg from "src/assets/empty.svg";
import { DashboardProductIsEmptyWrapper } from "src/styles/components/dashboard-product-is-empty";

export function DashboardProductIsEmpty() {
  return (
    <DashboardProductIsEmptyWrapper>
      <div>
        <img src={isEmptySvg} alt="Sem produtos" />
      </div>
    </DashboardProductIsEmptyWrapper>
  )
}