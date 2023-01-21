import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
    name: yup.string().required("Name and Surname is required"),
    job: yup
        .string("Job should be a string")
        .required("Job is required"),
    comment: yup.string()
        .min(50, "password should have a minimum length of 5")
        .max(500, "password should have a maximum length of 12")
        .required("Comment is required"),
});