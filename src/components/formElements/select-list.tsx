import React, { useState } from "react";
import { Label } from "./label";
import IOption from "./../../interfaces/IOption";

interface ISelectListProps {
  id: string;
  options: IOption[];
  required: boolean;
  labelText?: string;
  labelClasses?: string;
  onSelectChange: (selectedValue: any) => void;
  classes?: string;
  selectedValue: any;
  isInline: boolean;
}

export const SelectList = (props: ISelectListProps) => {
  const [selectedValue, setSelectedValue] = useState(props.selectedValue);
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: any) => {
    setSelectedValue(e.target.value);

    if (props.required === true) {
      const validElement: boolean = Validate();
      if (validElement) {
        props.onSelectChange(e.target.value);
      }
    } else {
      props.onSelectChange(e.target.value);
    }
  };

  const Validate = () => {
    let localIsValid = true;
    if (props.required === true && selectedValue.length === 0) {
      localIsValid = false;
    }
    setIsValid(localIsValid);
    return localIsValid;
  };

  let titleMessage = "";
  const classes = ["form-control"];

  if (props.classes) {
    classes.push(props.classes);
  }

  if (!isValid) {
    classes.push("invalid-element");
    titleMessage = props.labelText + " is required.";
  }

  const inlineClasses = ["inline-control"];
  if (props.isInline && props.classes) {
    inlineClasses.push(props.classes);
  }

  return (
    <React.Fragment>
      {!props.isInline && (
        <div className={"form-group " + (props.classes || "")}>
          {props.labelText && props.labelText !== "" && (
            <Label forId={props.id} text={props.labelText} classes={props.labelClasses} />
          )}
          <select id={props.id} value={props.selectedValue} onChange={handleChange} className={classes.join(" ")} title={titleMessage}>{props.options.map((x, y) => <option value={x.value} key={y}>{x.text}</option>)}</select>
        </div>
      )}
      {props.isInline && props.labelText && props.labelText !== "" && (
        <React.Fragment>
          <Label forId={props.id} text={props.labelText} classes={props.labelClasses} />
          <select id={props.id} value={props.selectedValue} onChange={handleChange} className={inlineClasses.join(" ")} title={titleMessage}>{props.options.map((x, y) => <option value={x.value} key={y}>{x.text}</option>)}</select>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
