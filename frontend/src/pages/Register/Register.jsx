import { useForm } from "react-hook-form";
import styles from "./register.module.css";
import Button from "../../components/Button/Button";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
      receiveEmails: false,
      datenschutz: false,
    },
  });

  const onSubmit = (data) => {
    console.log("Registering", data);
  };

  return (
    <div className={styles.container}>
      <h2>Create an account</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputContainer}>
          <FaUser className={styles.icon} />
          <input
            type="text"
            placeholder="First Name"
            {...register("firstName", { required: "First Name is required" })}
          />
          {errors.firstName && (
            <p className={styles.error}>{errors.firstName.message}</p>
          )}
        </div>

        <div className={styles.inputContainer}>
          <FaUser className={styles.icon} />
          <input
            type="text"
            placeholder="Last Name"
            {...register("lastName", { required: "Last Name is required" })}
          />
          {errors.lastName && (
            <p className={styles.error}>{errors.lastName.message}</p>
          )}
        </div>

        <div className={styles.inputContainer}>
          <MdEmail className={styles.icon} />
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>

        <div className={styles.inputContainer}>
          <RiLockPasswordFill className={styles.icon} />
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}
        </div>

        <div className={styles.inputContainer}>
          <RiLockPasswordFill className={styles.icon} />
          <input
            type="password"
            placeholder="Repeat Password"
            {...register("repeatPassword", {
              required: "Please repeat your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
          {errors.repeatPassword && (
            <p className={styles.error}>{errors.repeatPassword.message}</p>
          )}
        </div>

        <div className={styles.checkboxGroup}>
          <div className={styles.remember}>
            <label htmlFor="receiveEmails">Receive promotional emails</label>
            <input
              type="checkbox"
              id="receiveEmails"
              {...register("receiveEmails")}
            />
          </div>

          <div className={styles.remember}>
            <label htmlFor="datenschutz">
              I agree to the Datenschutzerklärung
            </label>
            <input
              type="checkbox"
              id="datenschutz"
              {...register("datenschutz", {
                required: "You must agree to the Datenschutzerklärung",
              })}
            />
            {errors.datenschutz && (
              <p className={styles.error}>{errors.datenschutz.message}</p>
            )}
          </div>
        </div>

        <Button text="Register" width="440px" height="43px" fontSize="16px" />
      </form>

      <p className={styles.changeButton}>
        Already have an account?{" "}
        <Link to="/login" className="text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default Register;
