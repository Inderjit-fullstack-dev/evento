import { useField } from "formik";
import { FormField, Label, Select } from "semantic-ui-react";

const SelectControl = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  return (
    <FormField error={meta.touched && meta.error}>
      <label>{label}</label>
      <Select
        clearable
        value={field.value}
        onChange={(e, d) => {
          helpers.setValue(d.value);
        }}
        onBlur={() => {
          helpers.setTouched(true);
        }}
        onFocus={() => helpers.setTouched(false)}
        {...props}
      />
      {meta.touched && meta.error ? (
        <Label basic content={meta.error} className="error-message red" />
      ) : null}
    </FormField>
  );
};
export default SelectControl;
