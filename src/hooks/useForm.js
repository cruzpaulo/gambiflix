import { useState } from 'react';

function useForm(iniValues) {
  const [values, setValues] = useState(iniValues);

  function setValue(key, value) {
    setValues({ ...values, [key]: value });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValue(name, value);
    // setValue(e.target.getAttribute('name'), e.target.value);
  }

  function clearForm() {
    setValues(iniValues);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
