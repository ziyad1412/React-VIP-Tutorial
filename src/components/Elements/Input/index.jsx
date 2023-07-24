import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { label, placeholder, type, name } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} placeholder={placeholder} name={name} />
    </div>
  );
};
export default InputForm;
