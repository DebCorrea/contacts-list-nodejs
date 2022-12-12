import * as yup from "yup";

const validateUserSchema = yup.object().shape({
  fullName: yup.string().required().min(3).max(80),
  username: yup.string().required().min(3).max(20),
  password: yup.string().required(),
  email: yup.string().email().required(),
  number: yup
    .string()
    .matches(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/)

    .required(),
});

export { validateUserSchema };
