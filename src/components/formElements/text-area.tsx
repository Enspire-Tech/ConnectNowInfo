import React from "react";
import { Label } from "./label";

interface ITextAreaProps {
  id: string;
  inputValue?: any;
  labelText: string;
  labelClasses?: string;
  onChange?: (id: string, value: any, isValid: boolean) => void;
  classes?: string;
  placeholderText?: string;
  required: boolean;
}

export const TextArea = (props: ITextAreaProps) => {

  const onChange = (e: any) => {
    const inputValue = e.target.value;
    const id = e.target.id;
    const isValid = Validate(e.target, inputValue);
    if (props.onChange !== undefined) {
        props.onChange(id, inputValue, isValid);
    } else {
      console.log("props undefined.");
    }
  };

  const Validate = (element: any, inputValue: any) => {
    element.classList.remove("invalid-element");
    element.title = "";

    let isValid = true;
    let invalidTitleMessage = "";

    if (inputValue.length < 1 && props.required) {
      invalidTitleMessage = props.labelText + " is required.";
    }

    if (invalidTitleMessage.length > 0) {
      element.classList.add("invalid-element");
      element.title = invalidTitleMessage;
      isValid = false;
    }

    return isValid;
  };

  const classes = ["form-control"];

  if (props.required && !props.inputValue) {
    classes.push("invalid-element");
  }

  const value = props.inputValue;
  let inputProps: any;

  inputProps = {
    id: props.id,
    onBlur: onChange,
    required: props.required,
    defaultValue: value,
    placeholder: props.placeholderText
  };

  inputProps.className = classes.join(" ");

  let input: any;

  inputProps.autoComplete = "false";

  input = <textarea {...inputProps} />;

  return (
    <div className={"form-group " + (props.classes || "")}>
      {props.labelText && props.labelText !== "" && (
        <Label forId={props.id} text={props.labelText} classes={props.labelClasses} />
      )}
      {input}
    </div>
  );
};
