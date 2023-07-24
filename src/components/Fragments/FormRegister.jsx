import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        placeholder="Input your name"
        label="Fullname"
        type="text"
        name="fullname"
      />
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
      <InputForm
        placeholder="*********"
        label="Confirm Password"
        type="password"
        name="confirmPassword"
      />
      <Button className="bg-blue-600 w-full">Register</Button>
    </form>
  );
};
export default FormRegister;
