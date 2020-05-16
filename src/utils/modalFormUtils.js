export const convertStateToObjArray = (objects) => {
  let elementArray = [];
  for (let key in objects) {
    elementArray.push({
      id: key,
      config: objects[key],
    });
  }
  return elementArray;
};

const executeValidation = (value, validation) => {
  let validationObj = {
    isValid: true,
    errorMessage: "",
  };

  if (validation) {
    if (validation.required) {
      validationObj.isValid = value.trim() !== "";
      validationObj.errorMessage = validationObj.isValid
        ? ""
        : "Field is required";
    }

    if (validationObj.isValid && validation.maxLength) {
      validationObj.isValid = value.length <= 40;
      validationObj.errorMessage = "No more than 40 charactes";
    }

    return validationObj;
  } else {
    return validationObj;
  }
};

export const validateElement = (event, updateForm, id) => {
  let forValidateionElement = { ...updateForm[id] };
  forValidateionElement.value = id === "birthDate" ? event : event.target.value;
  forValidateionElement.touched = true;
  const validation = executeValidation(
    forValidateionElement.value,
    forValidateionElement.validation
  );
  forValidateionElement.valid = validation.isValid;
  forValidateionElement.errorMessage = validation.errorMessage;
  return forValidateionElement;
};

export const countInvalidElement = (updateForm) => {
  let countInvalid = 0;
  for (let element in updateForm) {
    if (!updateForm[element].valid) {
      countInvalid++;
      break; // one element is invalid -> all the loop is invalid =>use break no return
    }
  }
  return countInvalid;
};
