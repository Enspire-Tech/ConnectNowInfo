import React from "react";
import { Label } from "./label";

export enum TextInputType {
    Email = "email",
    Hidden = "hidden",
    Number = "number",
    Password = "password",
    Tel = "tel",
    Text = "text",
    Url = "url"
}

interface ITextInputProps {
    id: string;
    inputValue?: any;
    labelText: string;
    labelClasses?: string;
    onChange?: (id: string, value: any, isValid: boolean) => void;
    classes?: string;
    placeholderText?: string;
    required: boolean;
    inputType: TextInputType;
    minimumPasswordLength?: number;
    maxLength?: number;
}

// export default TextInputType;

export const TextInput = (props: ITextInputProps) => {

    const onChange = (e: any) => {
        const inputValue = e.target.value;
        const id = e.target.id;
        const isValid = Validate(e.target, inputValue);

        if (props.onChange !== undefined) {
            if (
                props.inputType === TextInputType.Text ||
                props.inputType === TextInputType.Password ||
                props.inputType === TextInputType.Email
            ) {
                props.onChange(id, inputValue, isValid);
            } else if (isValid) {
                props.onChange(id, inputValue, isValid);
            }
        } else {
            console.log("props undefined.");
        }
    };

    const Validate = (element: any, inputValue: any) => {
        element.classList.remove("invalid-element");
        element.title = "";

        let isValid = true;
        let invalidTitleMessage = "";

        if (inputValue && inputValue.length > 0) {
            switch (props.inputType) {
                case TextInputType.Number:
                    if (isNaN(inputValue)) {
                        invalidTitleMessage = "Must be a number";
                    }
                    break;
                case TextInputType.Password:
                    const minimumLength = props.minimumPasswordLength === undefined ? 7 : props.minimumPasswordLength;
                    if (inputValue.length < minimumLength) {
                        invalidTitleMessage =
                        "Passwords must be longer than " + minimumLength + " characters.";
                    }
                    break;
                case TextInputType.Email:
                    // eslint-disable-next-line
                    const isValidEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
                        inputValue
                    );
                    if (!isValidEmail) {
                        invalidTitleMessage = "Must be a valid email address.";
                    }
                    break;
                default:
                    break;
            }
        } else if (props.required) {
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

    /*
    if (props.required && !props.inputValue) {
        classes.push("invalid-element");
    }
    */

    const value = props.inputValue;
    let inputProps: any;

    inputProps = {
        id: props.id,
        onBlur: onChange,
        type: props.inputType,
        required: props.required,
        defaultValue: value,
        placeholder: props.placeholderText
    };
    if (props.maxLength) {
        inputProps.maxLength = props.maxLength;
    }

    if (props.inputType !== TextInputType.Hidden) {
        inputProps.className = classes.join(" ");
    }

    let input: any;

    inputProps.autoComplete = "false";

    input = <input {...inputProps} />;
    if (props.inputType === TextInputType.Hidden) {
        return input;
    }

    return (
    <div className={"form-group " + (props.classes || "")}>
        {props.labelText && props.labelText !== "" && (
            <Label forId={props.id} text={props.labelText} classes={props.labelClasses} />
        )}
        {input}
    </div>
    );
};
