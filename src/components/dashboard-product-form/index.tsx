import { useFormik } from "formik";
import { Fragment, useState } from "react";

import { constants } from "src/constants";
import { ProductData } from "src/services/api/product-api/types";
import { ProductInput } from "./input";
import { DashboardProductFormWrapper } from "src/styles/components/dashboard-product-form";
import { ProductValidateSchema, validate } from "src/services/product-validate";
import { ProductMultipleInputValue } from "./multiple-input-values";
import { formatCategories } from "src/utils/formatCategories";
import { useProductsContext } from "src/contexts/products-context";
import { DashboardProductModal } from "../dashboard-product-modal";
import { DashboardProductFormProps } from "./types";
import { CategoriesType } from "src/utils/types";

export function DashboardProductForm({ data, categories, isUpdate }: DashboardProductFormProps) {
  const [ category, setCategory ] = useState(categories || [] as CategoriesType[]);

  const [ isOpenModal, setIsOpenModal ] = useState(false);
  const { addProduct, updateProduct } = useProductsContext();

  const initialValues: ProductData = data || constants.initialProductValues;

  const formik = useFormik<ProductData>({
    initialValues: initialValues,
    validate,
    validationSchema: ProductValidateSchema,
    onSubmit: values => {
      const categories = formatCategories(category);
      isUpdate 
        ? updateProduct({ ...values, 
            createdAt: data?.createdAt ?? "", 
            updatedAt: data?.updatedAt ?? "", 
            category: categories,
            id: data?.id ?? "" 
          })
        : addProduct({...values, category: categories });
      setIsOpenModal(true);
    },
  });

  return (
    <Fragment>
       {
        isOpenModal &&  (
          <DashboardProductModal 
            title="Novo produto adicionado."
            message="Todos os dados já estão disponíveis para visualização."
            isSuccess={true}
            setIsOpen={setIsOpenModal}
          />
        )
      }
      <DashboardProductFormWrapper onSubmit={formik.handleSubmit}>
        <section>
          <div>
            <ProductInput
              type="text"
              id="title"
              name="title"
              label="Nome"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
              isTextArea={false}
            />
            {formik.touched.title && formik.errors.title ? <p>{formik.errors.title}</p> : null}
          </div>
          <article>
            <div>
              <ProductInput
                id="value"
                name="value"
                label="Valor"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.value}
                isTextArea={false}
                type="number"
              />
              {formik.touched.value && formik.errors.value ? <p>{formik.errors.value}</p> : null}
            </div>
            <div>
              <ProductInput
                id="height"
                name="height"
                label="Altura"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.height}
                isTextArea={false}
                type="number"
              />
              {formik.touched.height && formik.errors.height ? <p>{formik.errors.height}</p> : null}
            </div>
            <div>
              <ProductInput
                id="width"
                name="width"
                label="Largura"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.width}
                isTextArea={false}
                type="number"
              />
              {formik.touched.width && formik.errors.width ? <p>{formik.errors.width}</p> : null}
            </div>
            <div>
              <ProductInput
                id="length"
                name="length"
                label="Comprimento"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.length}
                isTextArea={false}
                type="number"
              />
              {formik.touched.length && formik.errors.length ? <p>{formik.errors.length}</p> : null}
            </div>
          </article>
          <div>
            <ProductInput
              id="image"
              name="image"
              label="Link para imagem do produto"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.image}
              isTextArea={false}
              type="text"
            />
            {formik.touched.image && formik.errors.image ? <p>{formik.errors.image}</p> : null}
          </div>
          <div>
            <ProductMultipleInputValue 
              state={category}
              setState={setCategory}
              name="category"
              label="Catégorias"
            />
          </div>
        </section>

        <section>
          <div>
            <ProductInput
              id="acquisition"
              name="acquisition"
              label="Aquirido em"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.acquisition}
              isTextArea={false}
              type="date"
            />
            {formik.touched.acquisition && formik.errors.acquisition ? <p>{formik.errors.acquisition}</p> : null}
          </div>
          <div>
            <ProductInput
              id="barCode"
              name="barCode"
              label="Código de barras"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.barCode}
              isTextArea={false}
              type="text"
            />
            {formik.touched.barCode && formik.errors.barCode ? <p>{formik.errors.barCode}</p> : null}
          </div>
          <div>
            <ProductInput
              id="description"
              name="description"
              label="Descrição"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
              isTextArea={true}
              type="text"
            />
            {formik.touched.description && formik.errors.description ? <p>{formik.errors.description}</p> : null}
          </div>
        </section>
        <button 
          type="submit" 
          id="form-submit-button"
        >
          { isUpdate ? "Atualizar" : "Adicionar" }
        </button>
      </DashboardProductFormWrapper>
    </Fragment>
  )
}