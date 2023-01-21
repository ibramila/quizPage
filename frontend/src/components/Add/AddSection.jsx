import React from 'react'
import "./style.scss"
import { useForm } from "react-hook-form";
import { loginFormSchema } from "../../schema/formSchema";
import { yupResolver } from "@hookform/resolvers/yup";

function AddSection() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
  });

  const formSubmit = (data) => {
    console.log(data);
  };

  console.log(watch("example")); return (

    <div>
      <div className="container">
        <form onSubmit={handleSubmit(formSubmit)}>
          <h1 style={{textAlign:"center"}}>Feedback</h1>
          <label htmlFor="name">Name and Surname</label>
          <input {...register("name")} type="text" name="name" id="name" />
          {errors.name ? (
            <span style={{ color: "red" }}>{errors.name.message}</span>
          ) : (
            <></>
          )}
          <label htmlFor="job">Job</label>
          <input {...register("job")}
            type="text"
            name="job"
            id="job" />
          {errors.job ? (
            <span style={{ color: "red" }}>{errors.job.message}</span>
          ) : (
            <></>
          )}
          <label htmlFor="comment">Comment</label>
          <input
            {...register("comment")}
            type="comment"
            name="comment"
            id="comment"
          />
          {errors.comment ? (
            <span style={{ color: "red" }}>{errors.comment.message}</span>
          ) : (
            <></>
          )}
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}
export default AddSection
