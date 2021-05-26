import { FiCheckCircle, FiX, FiXCircle } from "react-icons/fi";
import { DashboardProductModalContent, DashboardProductModalWrapper } from "src/styles/components/dashboard-product-modal";

import { DashboardProductModalProps } from "./types";

export function DashboardProductModal({ title, message, isSuccess, setIsOpen }: DashboardProductModalProps) {
  return (
    <DashboardProductModalWrapper>
      <DashboardProductModalContent isSuccess={isSuccess}>
        <button type="button" onClick={() => setIsOpen(false)}>
          <span><FiX size="100%"/></span>
        </button>

        <span>
          {
            isSuccess 
            ? ( <FiCheckCircle size="100%" color="#26BF87"/> )
            : ( <FiXCircle size="100%" color="#F03C47"/> )
          }
        </span>

        <h3>{ title }</h3>
        <p>{ message }</p>
      </DashboardProductModalContent>
    </DashboardProductModalWrapper>
  );
}