import React, { useState } from "react";
import { Label } from "./label";

interface ICheckboxProps {
  id: string;
  checkIt: boolean;
  required: boolean;
  labelText: string;
  labelClasses?: string;
  onCheckChange: (id: string, checked: boolean) => void;
  classes?: string;
}

export const Checkbox = (props: ICheckboxProps) => {
  const [isValid, setIsValid] = useState(true);
  // eslint-disable-next-line
  const [isChecked, setIsChecked] = useState(props.checkIt ? true : false);

  const handleChecked = (e: any) => {
    Validate();
    if (isValid) {
      props.onCheckChange(e.target.id, e.target.checked);
    }
  };

  const Validate = () => {
    let validElement = true;
    if (props.required && !isChecked) {
      validElement = false;
    }
    setIsValid(validElement);
  };

  let titleMessage = "";
  const classes = ["form-check form-check-inline"];

  if (!isValid) {
    classes.push("invalid-element");
    titleMessage = props.labelText + " is required.";
  }

  let inputProps: any;
  inputProps = {
    id: props.id,
    onChange: handleChecked,
    required: props.required,
    type: "checkbox",
    title: titleMessage,
    className: "form-check-input",
    defaultChecked: props.checkIt
  };

  inputProps.autoComplete = "false";

  return (
    // <div className="container d-flex h-100">
    //   <div className="row align-items-center h-100">
    //     <div className="col-12 mx-auto">
    <div className={"form-check " + (props.classes || "")}>
      {<input {...inputProps} />}
      {props.labelText && props.labelText !== "" && (
        <Label
          forId={props.id}
          text={props.labelText}
          classes={"form-check-label " + props.labelClasses}
        />
      )}
    </div>
    //     </div>
    //   </div>
    // </div>
  );
};
