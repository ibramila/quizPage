import React, { useEffect, useState } from 'react'
import "./style.scss"
import { useForm } from "react-hook-form";
import { loginFormSchema } from "../../schema/formSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios"
function AddSection() {
  const [users, setUsers] = useState([]);
  const [state, setState] = useState({
    name: "",
    job: "",
    comment: ""
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
  });


  const getData = async () => {
    const res = await axios.get("http://localhost:8080/users");
    setUsers(res.data);
    console.log(res.data)
  };

  useEffect(() => {
    getData();
  }, []);


  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value, [e.target.job]: e.target.value, [e.target.comment]: e.target.value });

  };


  const formSubmit = (data) => {
    console.log(data);
    data.preventDefault();
    axios.post("http://localhost:8080/users", state);
    getData();
    setState(
      {
        name: "",
        age: "",
        hobbies: ""
      }
    )
  };


  // console.log(watch("example"));

  return (

    <div>
      <div className="container">
        <div className='wrapper'>
          <form onSubmit={handleSubmit(formSubmit)}>
            <h1 style={{ textAlign: "center" }}>Feedback</h1>
            <label htmlFor="name">Name and Surname</label>
            <input {...register("name")}
              value={state.name}
              type="text"
              onChange={handleChange}
              name="name"
              id="name" />
            {errors.name ? (
              <span style={{ color: "red" }}>{errors.name.message}</span>
            ) : (
              <></>
            )}
            <label htmlFor="job">Job</label>
            <input {...register("job")}
              type="text"
              value={state.job}
              name="job"
              onChange={handleChange}
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
              value={state.comment}
              id="comment"
              onChange={handleChange}

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
    </div>
  )
}
export default AddSection
