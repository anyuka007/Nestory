import { useForm } from "react-hook-form";
import styles from "./login.module.css";
import Button from "../../components/Button/Button";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (data) => {
    console.log("Signing in", data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2>Sign in with</h2>

        <div className={styles.socialButtons}>
          <button className={styles.buttonGithub}>
            <FaGithub /> GitHub
          </button>
          <button className={styles.buttonGoogle}>
            <FaGoogle /> Google
          </button>
        </div>

        <hr />

        <p className={styles.credentials}>Or sign in with credentials</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputContainer}>
            <MdEmail className={styles.icon} />
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
          <div className={styles.inputContainer}>
            <RiLockPasswordFill className={styles.icon} />

            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
            />
          </div>
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}

          <div className={styles.remember}>
            <label htmlFor="rememberMe">Remember me</label>
            <label className={styles.switch}>
              <input
                type="checkbox"
                id="rememberMe"
                {...register("rememberMe")}
              />
              <span className={styles.slider}></span>
            </label>
          </div>
          {/* <button className="sign-in-button" type="submit">
          {isSignUp ? "Create account" : "Sign in"}
        </button> */}
          <Button text="Sign in" width="440px" height="43px" fontSize="16px" />
        </form>

        {/* <p className={styles.changeButton}>
        {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
        <a href="#" onClick={toggleForm}>
          {isSignUp ? "Sign in" : "Sign up"}
        </a>
      </p> */}
        <p className={styles.changeButton}>
          Do not have an account?{" "}
          <Link to="/register" className="text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="/images/logo/logo.png"
          alt="Logo or decorative image"
          className="logo"
          style={{ width: "400px", height: "auto", borderRadius: "23px" }}
        />
      </div>
    </div>
  );
};

export default App;
