import * as React from "react";
interface ILabelProps {
  showLabel?: boolean;
  forId: string;
  text: string;
  classes?: any;
}

export const Label = (props: ILabelProps) => {
  const classes = ["col-form-label"];
  if (classes) {
    classes.push(props.classes);
  }

  return (
    <label className={props.classes} htmlFor={props.forId}>
      {props.text}
    </label>
  );
};
