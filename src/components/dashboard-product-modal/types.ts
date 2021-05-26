import { Dispatch, SetStateAction } from "react";

export type DashboardProductModalProps = {
  title: string;
  message?: string;
  isSuccess: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}