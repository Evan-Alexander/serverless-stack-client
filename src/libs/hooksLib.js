import { useState } from "react";

export function useFormFields(intitialState) {
  const [fields, setValues] = useState(intitialState);

  return [
    fields,
    function(event) {
      setValues({
        ...fields,
        [event.target.id]: event.target.value
      });
    }
  ];
}
