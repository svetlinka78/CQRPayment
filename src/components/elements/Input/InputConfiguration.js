import moment from "moment";

export const inputConfiguration = () => {
  return {
    name: {
      element: "input",
      type: "text",
      value: "",
      validation: { required: true },
      valid: false,
      touched: false,
      errorMessage: "",
      label: "Name:",
    },
    email: {
      element: "input",
      type: "text",
      value: "",
      validation: { required: true, maxLength: 60 },
      valid: false,
      touched: false,
      errorMessage: "",
      label: "E-mail:",
    },
    birthDate: {
      element: "datePicker",
      type: "text",
      value: moment().toDate(),
      valid: true,
      touched: false,
      errorMessage: "",
      label: "Date of birth:",
    },
  };
};

//export default inputConfiguration;
