import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="">
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
      <Button className="bg-blue-600 w-full">Login</Button>
    </form>
  );
};
export default FormLogin;
