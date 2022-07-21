import React from "react";
import { useForm } from "react-hook-form";
import axios from "commonFunctions/axios";

// import "../css/app.scss";
// import "../css/style.scss";
import { toast } from "react-toastify";

export default function Register(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    //deal with register logic
    try {
      const { nickname, email, password } = data;
      const res = await axios.post("/auth/register", {
        nickname,
        email,
        password,
        type: 0,
      });
      const jwToken = res.data;
      global.auth.setToken(jwToken);
      toast.success("Register Success");
      //page jump
      props.history.push("/");
    } catch (error) {
      const message = error.response.data.message;
      toast.error(message);
    }
  };
  return (
    <div className="login-wrapper">
      <form className="box login-box" onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label className="label">Nickname</label>
          <div className="control">
            <input
              className={`input ${errors.nickname && "is-danger"}`}
              type="nickname"
              placeholder="Nickname"
              {...register("nickname", { required: true })}
            />
            {errors.nickname && (
              <p className="helper has-text-danger">Nickname is required</p>
            )}
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className={`input ${errors.email && "is-danger"}`}
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="helper has-text-danger">Email is required</p>
            )}
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className={`input ${errors.password && "is-danger"}`}
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Cannot be less than 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="helper has-text-danger">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>
        <div className="control">
          <button className="button is-fullwidth is-primary">Summit</button>
        </div>
      </form>
    </div>
  );
}
