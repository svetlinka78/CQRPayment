export const inputRegisterUserConfiguration = () => {
  return {
    firstName: {
      element: "input",
      type: "text",
      value: "",
      validation: { required: true },
      valid: false,
      touched: false,
      errorMessage: "",
      label: "First Name:",
    },
    lastName: {
      element: "input",
      type: "text",
      value: "",
      validation: { required: true },
      valid: false,
      touched: false,
      errorMessage: "",
      label: "Last Name:",
    },
    username: {
      element: "input",
      type: "text",
      value: "",
      validation: { required: true },
      valid: false,
      touched: false,
      errorMessage: "",
      label: "Username:",
    },
    email: {
      element: "input",
      type: "text",
      value: "",
      validation: { required: true },
      valid: false,
      touched: false,
      errorMessage: "",
      label: "E-mail:",
    },
    password: {
      element: "input",
      type: "password",
      value: "",
      validation: { required: true },
      valid: false,
      touched: false,
      errorMessage: "",
      label: "Password:",
    },
    passwordConfirm: {
      element: "input",
      type: "password",
      value: "",
      validation: { required: true },
      valid: false,
      touched: false,
      errorMessage: "",
      label: "Confirm password:",
    },
  };
};

export const inputLoginUserConfiguration = () => {
  return {
    email: {
      element: "input",
      type: "text",
      value: "",
      validation: { required: true },
      valid: false,
      touched: false,
      errorMessage: "",
      label: "E-mail:",
    },
    password: {
      element: "input",
      type: "password",
      value: "",
      validation: { required: true },
      valid: false,
      touched: false,
      errorMessage: "",
      label: "Password:",
    },
  };
};
