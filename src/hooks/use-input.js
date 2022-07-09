import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case "RESET":
      return { isTouched: false, value: "" };
    case "BLUR":
      return { ...state, isTouched: true };
    case "INPUT":
      return { ...state, value: action.value };
    default:
      return state;
  }
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const isValid = validateValue(inputState.value);
  const hasError = inputState.isTouched && !isValid;

  const onValueChange = (event) => {
    const action = {
        value: event.target.value,
        type: "INPUT",
      };
      dispatch(action);
  };

  const onBlurChange = (event) => {
    const action = {
        type: "BLUR"
    }
    dispatch(action)
  };

  const onReset = () => {
    const action = {
        type: "RESET"
    }
    dispatch(action);
  };

  return {
    value: inputState.value,
    isValid: isValid,
    hasError: hasError,
    onValueChange,
    onBlurChange,
    onReset
  };
};

export default useInput