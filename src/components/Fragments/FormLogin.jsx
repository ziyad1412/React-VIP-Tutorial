import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/products";
  };
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        placeholder="Example@gmail.com"
        label="Email"
        type="email"
        name="email"
      />
      <InputForm
        placeholder="*********"
        label="Password"
        type="password"
        name="password"
      />
      <Button className="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};
export default FormLogin;
