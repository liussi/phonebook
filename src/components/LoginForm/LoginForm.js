import { useDispatch } from "react-redux";
import { login } from "redux/auth/operations";


export const LoginForm = () => {
  const dispath = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispath(login({email:form.elements.email.value, password:form.elements.password.value}))
    form.reset();
  }
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" name="email"></input>
        </label>
        <label>
          Password
          <input type="password" name="password"></input>
        </label>
        <button type="submit">Log In</button>
      </form>
    );
};
