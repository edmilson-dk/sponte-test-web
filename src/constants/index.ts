import { formatDateToBrowser } from "src/utils/formatDate";

export const constants = {
  storagedProductKey: "@stored-product-key",
  storagedProducEventsKey: "@stored-product-events-key",
  initialProductValues: {
    title: "", 
    description: "", 
    height: 0, width: 0, 
    length: 0, weight: 0, 
    barCode: "",
    category: [], 
    value: 0, 
    acquisition: formatDateToBrowser(new Date().toISOString()), 
    image: "",
  }
}