import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { DashboardProductPaginateWrapper } from "src/styles/components/dashboard-product-paginate";
import { DashboardProductPaginateProps } from "./types";

export const DashboardProductPaginate = ({ nextCbFetch, prevCbFetch, nextDisabled, prevDisabled }: DashboardProductPaginateProps) => {

  return (
    <DashboardProductPaginateWrapper>
      <button type="button" onClick={prevCbFetch} disabled={prevDisabled}>
        <span>
          <FiChevronLeft size="100%"/>
        </span>
      </button>
      <button type="button" onClick={nextCbFetch} disabled={nextDisabled}>
        <span>
          <FiChevronRight size="100%"/>
        </span>
      </button>
    </DashboardProductPaginateWrapper>
  );
};