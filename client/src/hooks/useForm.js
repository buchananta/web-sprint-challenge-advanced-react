// write your custom hook here to control your checkout form
import { useState } from 'react';

export default function useForm(initialValue, cb) {
  const [values, setValue] = useState(initialValue);
  
  const handleChanges = (e) => {
    setValue({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setValue({ ...values, showSuccessMessage: true});
    console.log(values);
  };
  return [values, handleChanges, handleSubmit]
}