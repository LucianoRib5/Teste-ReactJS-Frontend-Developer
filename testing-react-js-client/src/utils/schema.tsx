import * as yup from "yup";

const name = /^[a-zA-Z\u00C0-\u00FF ]+/i
const password = /^.{6,}/

export const schema = yup.object({
    name: yup.string().required().matches(name),
    password: yup.string().required().matches(password)
});