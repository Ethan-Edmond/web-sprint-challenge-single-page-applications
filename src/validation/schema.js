import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "name must be at least 2 characters")
    .required(),
  size: yup
    .string()
    .required()
    .oneOf(["small", "medium", "large", "super-large"]),
  sauce: yup
    .string()
    .required()
    .oneOf(["original red", "garlic ranch", "bbq sauce", "spinach alfredo"]),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  canadianBacon: yup.boolean(),
  spicySausage: yup.boolean(),
  grilledChicken: yup.boolean(),
  onions: yup.boolean(),
  greenPepper: yup.boolean(),
  dicedTomatoes: yup.boolean(),
  blackOlives: yup.boolean(),
  roastedGarlic: yup.boolean(),
  artichokeHearts: yup.boolean(),
  threeCheese: yup.boolean(),
  pineapple: yup.boolean(),
  extraCheese: yup.boolean(),
  special: yup.string(),
  orderAmt: yup
    .number()
    .required("Order amount is required")
    .positive("Order amount must be positive")
    .integer("Order amount must be an integer")
});

export default formSchema;
