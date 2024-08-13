import * as yup from "yup";

const loginFormValidationSchema = yup
  .object({
    username: yup.string().required("Поле должно быть заполнено"),
    password: yup
      .string()
      .required("Поле должно быть заполнено")
      .min(6, "Пароль должен быть не менее 6 символов"),
  })
  .required();

// eslint-disable-next-line import/prefer-default-export
export { loginFormValidationSchema };
