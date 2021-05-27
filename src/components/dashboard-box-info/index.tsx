import { DashboardBoxInfoWrapper } from "src/styles/components/dashboard-box-info";
import { DashboardBoxInfoProps } from "./types";

export function DashboardBoxInfo({ title, bgType, value, updatedAt}: DashboardBoxInfoProps) {
  
  return (
    <DashboardBoxInfoWrapper bgType={bgType}>
      <div>
        <span>{ value > 999 ? `${value.toString().slice(0, 3)}+` : value }</span>
      </div>
      <article>
        <h3>{title}</h3>
        <span>{updatedAt}</span>
      </article>
    </DashboardBoxInfoWrapper>
  )
}