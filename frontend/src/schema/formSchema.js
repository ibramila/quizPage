import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
    name: yup.string().required("Name and Surname is required"),
    job: yup
        .string("Job should be a string")
        .required("Job is required"),
    comment: yup.string()
        .max(100, "This is max")
        .required("Comment is required"),
});