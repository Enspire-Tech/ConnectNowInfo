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
    // const [isValid, setIsValid] = useState(true);

    const handleChange = (e: any) => {

        setSelectedValue(e.target.value);

        if (props.required === true) {
            Validate(e.target, e.target.value);
        }

        props.onSelectChange(e.target.value);

    };

    const Validate = (element: HTMLElement, value: string): boolean => {
        element.classList.remove("invalid-element");
        let result = true;
        if (props.required === true && value.length === 0) {
            element.classList.add("invalid-element");
            result = false;
        }
        return result;
    };

    // let titleMessage = "";
    const classes = ["form-control"];

    if (props.classes) {
        classes.push(props.classes);
    }

    const inlineClasses = ["inline-control"];
    if (props.isInline && props.classes) {
        inlineClasses.push(props.classes);
    }

    // debugger;
    // console.log("props", props);

    return (
        <React.Fragment>
            {!props.isInline && (
                <div className={"form-group " + (props.classes || "")}>
                {props.labelText && props.labelText !== "" && (
                    <Label forId={props.id} text={props.labelText} classes={props.labelClasses} />
                )}
                    <select
                        id={props.id}
                        value={selectedValue}
                        onChange={handleChange}
                        className={classes.join(" ")}
                        title={props.labelText}>

                        {props.options.map((option) =>
                            <option
                                value={option.value}
                                key={option.value}>
                                    {option.text}
                            </option>
                        )}

                    </select>
                </div>
            )}
            {props.isInline && props.labelText && props.labelText !== "" && (
                <React.Fragment>
                    <Label
                        forId={props.id}
                        text={props.labelText}
                        classes={props.labelClasses} />
                    <select
                        id={props.id}
                        value={selectedValue}
                        onChange={handleChange}
                        className={inlineClasses.join(" ")}
                        title={props.labelText}>

                        {props.options.map((option) =>
                            <option
                                value={option.value}
                                key={option.value}>
                                    {option.text}
                            </option>
                        )}

                    </select>
                </React.Fragment>
            )}
        </React.Fragment>
    );
};
