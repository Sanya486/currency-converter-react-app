import * as Yup from "yup";


export const convertFormValidation = Yup.object().shape({
  inflowAmount: Yup.number().positive("Please enter a positive amount")
    .required("Enter amount of currency to convert"),
  convertedToCurrency: Yup.string()
    .required("Please choose currency to convert"),
});