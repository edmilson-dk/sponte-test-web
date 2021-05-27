export type DashboardProductPaginateProps = {
  nextCbFetch: () => void;
  prevCbFetch: () => void;
  nextDisabled?: boolean;
  prevDisabled?: boolean;
}