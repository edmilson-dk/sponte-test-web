import { FormikErrors } from "formik";
import { formatDateToCalendar } from "src/utils/formatDate";
import * as Yup from "yup";
import { ProductData } from "../api/product-api/types";

export const ProductValidateSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "Nome muito curto!")
    .max(50, "Nome muito longo!")
    .required("Por favor preencha este campo."),
  description: Yup.string()
    .min(3, "Descrição muita curta!")
    .required("Por favor preencha este campo."),
  image: Yup.string()
    .min(8, "Este link pode está mal formatado.")
    .required("Por favor preencha este campo."),
  barCode: Yup.string()
    .min(8, "Este código de barras pode está mal formatado.")
    .required("Por favor preencha este campo."),
  acquisition:  Yup.string()
    .required("Por favor preencha este campo."),
  value: Yup.number()
    .min(0, "Valor negativo é proibido!")
    .max(100000, "Valores muito grande é proibido")
    .required("Por favor preencha este campo."),
  height: Yup.number()
    .min(0, "Valor negativo é proibido!")
    .max(200000000, "Valores muito grande é proibido")
    .required("Por favor preencha este campo."),
  width: Yup.number()
    .min(0, "Valor negativo é proibido!")
    .max(200000000, "Valores muito grande é proibido")
    .required("Por favor preencha este campo."),
  length: Yup.number()
    .min(0, "Valor negativo é proibido!")
    .max(200000000, "Valores muito grande é proibido")
    .required("Por favor preencha este campo."),
});

function validateAcquisitionValue(value: string) {
  const acquisition = formatDateToCalendar(value).split(" ");
  const actualDate = formatDateToCalendar(new Date().toISOString()).split(" ");

  const isInvalid = Number(acquisition[0]) > Number(actualDate[0]) 
    || Number(acquisition[1]) > Number(actualDate[1]) 
    || Number(acquisition[2]) > Number(actualDate[2]);

  return isInvalid;
}

export function validate(values: ProductData){
  const errors: FormikErrors<ProductData> = {};
  const isAcquisitionInvalid = validateAcquisitionValue(values.acquisition);
   
  if (isAcquisitionInvalid) errors.acquisition = "Data inválida";

  return errors;
}