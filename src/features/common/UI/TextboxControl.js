import { useField } from "formik";
import { FormField, Label } from "semantic-ui-react";

const TextBox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormField error={meta.touched && meta.error}>
      <label>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <Label basic content={meta.error} className="error-message red" />
      ) : null}
    </FormField>
  );
};
export default TextBox;
