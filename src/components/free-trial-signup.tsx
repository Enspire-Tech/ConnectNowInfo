import React, { useState } from "react";
import { resources, authorization } from "../config.json";
import { TextInput, TextInputType } from "./formElements/text-input";
import { SelectList } from "./formElements/select-list";
import { StateCodes} from "../constants";
import IOption from "../interfaces/IOption";
import httpSettings from "../services/httpService";
import { IconEnvelope } from "./icons/envelope";

import $ from "jquery";

require ("../styles/free-trial-signup.css");

interface ISignupData {
    [key: string ]: string;
    provisionedByFirstName: string;
    provisionedByLastName: string;
    provisionedByUserName: string;
    name: string;
    city: string;
    stateCode: string;
    zipCode: string;
}

const signupSteps = {
    CLOSED: "CLOSED",
    OPEN: "OPEN",
    PROVISIONING: "Provisioning your trial account.  This will take several seconds - please don't refresh your browser.",
    DONE: "https://flow.manywho.com/b7493b27-2215-4de8-a0b5-17bbcd94a2e7/play/prod?flow-id=5f1f3608-da36-4de8-ac1c-2ba3e9a0bc62#",
    ERROR: "There was a problem provisioning a trial account.  Please try again soon."
};

const initSignupData = (): ISignupData => {
    return {
        provisionedByFirstName: "",
        provisionedByLastName: "",
        provisionedByUserName: "",
        name: "",
        city: "",
        stateCode: "",
        zipCode: "",
        status: "trial"
    };
};

export const FreeTrialSignup: React.FC = () => {

    const [signupState, setSignupState] = useState(
        {
            isValid: true,
            signupStep: signupSteps.CLOSED,
            accountId: ""
        }
    );
    const [signupData, setSignupData] = useState<ISignupData>(initSignupData());

    const stateOptions: IOption[] = StateCodes.map((code: string) => {
        return {
            text: code,
            value: code
        };
    });

    const toggleOpen = () => {

        setSignupData(initSignupData);

        setSignupState(
            {
                signupStep: signupState.signupStep === signupSteps.CLOSED ? signupSteps.OPEN : signupSteps.CLOSED,
                isValid: signupState.isValid,
                accountId: ""
            }
        );
    };

    const signUp = () => {
        let valid = true;
        for (const property in signupData as ISignupData) {
            if (signupData[property] === "") {
                $(`#${property}`).addClass("invalid-element");
                valid = false;
            }
        }

        setSignupState(
            {
                signupStep: valid ? signupSteps.PROVISIONING : signupSteps.OPEN,
                isValid: valid,
                accountId: ""
            }
        );

        if (!valid) { return; }
        httpSettings.url = `${httpSettings.url}${resources.freeTrialSignup};boomi_auth=${authorization}`;
        httpSettings.method = "POST";
        httpSettings.data = JSON.stringify(signupData);
        httpSettings.withCredentials = true;

        // *** switch to below URL for dev / design work
        // httpSettings.url = `${httpSettings.url}${resources.heartbeat};boomi_auth=${authorization}`;
        // httpSettings.method = "GET";

        // console.log("settings", httpSettings);

        $.ajax(httpSettings)
        .done((response: any) => {
            if (response.errorMessage) {
                console.log("signup error", response.errorMessage);
                console.log("settings", httpSettings);
                signupState.signupStep = signupSteps.ERROR;
                setSignupState(signupState);
            } else {
                console.log("provision complete", response);
                setSignupState({
                    signupStep: signupSteps.DONE,
                    isValid: valid,
                    accountId: response.accountId
                });
            }
        })
        .fail((err: any, message: any) => {
            console.log("signup error",  JSON.stringify(err), JSON.stringify(message));
            console.log("settings", httpSettings);
            signupState.signupStep = signupSteps.ERROR;
            setSignupState(signupState);
        })
        .always(() => {
            doProgress(true);
        });

        doProgress(false);

    };

    const doProgress = (done: boolean) => {

        if (done) {
            return;
        }

        let i = 0;

        const steps = ["Submitting request",
            "Provisioning account",
            "Configuring account",
            "Configuring Connect Now",
            "Initializing Integration library",
            `Adding user account '${signupData.provisionedByUserName}'`];

        $("#progress").html(steps[i]);

        let interval = 1;

        const updateProgress = () => {

            if (i > steps.length - 1 || done) { return; }

            i++;
            $("#progress").fadeOut(
                300,
                () => {
                    $("#progress").html(steps[i]).fadeIn(300);
                });
            interval = (Math.floor(Math.random() * 12) * 1000) + 6;
            // console.log("i", i, "interval", interval);
            if (i < steps.length - 1) {
                setTimeout(updateProgress, interval);
            }
        };

        setTimeout(updateProgress, interval);

    };

    // console.log("signupState", signupState);
    const mailLink = `mailto:${signupData.provisionedByUserName}?subject=Connect Now Link&body=Log in to Connect Now Here:  ${signupSteps.DONE}`;

    return <div className="row signup-container">
        {signupState.signupStep === signupSteps.CLOSED &&
        <span className="invite" onClick={toggleOpen}>
            Free Trial - Sign Up!
        </span>
        }
        {signupState.signupStep === signupSteps.OPEN &&
        <div className="signup-data container">
            <div className="signup-form row center-text">
                <div className="col-12 center-text pad-bottom">
                    Provide the information below for a free 60 day trial of<br/><span className="larger">Boomi Connect Now</span> *
                    <br/><span className="smaller">all fields are required</span>
                </div>
                <div className="col-6">
                    <TextInput
                        inputType={TextInputType.Text}
                        id="firstName"
                        inputValue={signupData.provisionedByFirstName}
                        placeholderText="first name"
                        labelText="First Name"
                        required = {true}
                        onChange = {(id: string, value: any, isValid: boolean) => {
                            signupData.provisionedByFirstName = value;
                            setSignupData(signupData);
                        }} />
                </div>
                <div className="col-6">
                    <TextInput
                        inputType={TextInputType.Text}
                        id="lastName"
                        inputValue={signupData.provisionedByLastName}
                        placeholderText="last name"
                        labelText="Last Name"
                        required = {true}
                        onChange = {(id: string, value: any, isValid: boolean) => {
                            signupData.provisionedByLastName = value;
                            setSignupData(signupData);
                        }} />
                </div>
                <div className="col-12">
                    <TextInput
                        inputType={TextInputType.Email}
                        id="email"
                        inputValue={signupData.provisionedByUserName}
                        placeholderText="email"
                        labelText="Email"
                        required = {true}
                        onChange = {(id: string, value: any, isValid: boolean) => {
                            signupData.provisionedByUserName = value;
                            setSignupData(signupData);
                        }} />
                </div>
                <div className="col-12">
                    <TextInput
                        inputType={TextInputType.Text}
                        id="companyName"
                        inputValue={signupData.name}
                        placeholderText="company name"
                        labelText="Company Name"
                        required = {true}
                        onChange = {(id: string, value: any, isValid: boolean) => {
                            signupData.name = value;
                            setSignupData(signupData);
                        }} />
                </div>
                <div className="col-6">
                    <TextInput
                        inputType={TextInputType.Text}
                        id="city"
                        inputValue={signupData.city}
                        placeholderText="city"
                        labelText="City"
                        required = {true}
                        onChange = {(id: string, value: any, isValid: boolean) => {
                            signupData.city = value;
                            setSignupData(signupData);
                        }} />
                </div>
                <div className="col-3">
                    <SelectList
                        id="state"
                        selectedValue={signupData.stateCode}
                        required={true}
                        options= {stateOptions}
                        isInline={false}
                        labelText="State"
                        onSelectChange={(value: any) => {
                            signupData.stateCode = value;
                            setSignupData(signupData);
                        }}
                    />
                </div>
                <div className="col-3">
                    <TextInput
                        inputType={TextInputType.Number}
                        id="zip"
                        inputValue={signupData.zipCode}
                        placeholderText="zip"
                        labelText="Zip"
                        required = {true}
                        maxLength={5}
                        onChange = {(id: string, value: any, isValid: boolean) => {
                            signupData.zipCode = value;
                            setSignupData(signupData);
                        }} />
                </div>
                <div className="col-6 pad-top pad-bottom">
                    <button className="btn btn-secondary" onClick={toggleOpen}>Cancel</button>
                </div>
                <div className="col-6 pad-top pad-bottom">
                    <button className="btn btn-primary" onClick={signUp}>Let's Go!</button>
                </div>
                <div className="signup-form-footer col-12">
                    * by submitting this information, you agree than a representative of Dell Boomi may contact you via email.
                </div>
            </div>
        </div>
        }
        {signupState.signupStep === signupSteps.PROVISIONING &&
            <div className=" center-text">
                <div className="col-xs-12 padded">
                    {signupState.signupStep}
                </div>
                <div className="col-xs-12 pad-bottom">
                    <div className="wait-spinner"></div>
                    <div id="progress" className="pad-top"></div>
                </div>
            </div>
        }
        {signupState.signupStep === signupSteps.DONE &&
        <div className="col-xs-12 padded">
            <h3>Success!</h3>
            <p>Your trial account, <strong>{signupState.accountId}</strong>, has been provisioned.  The account will expire in 60 days.</p>
            <p>Your username is your email address, <strong>{signupData.provisionedByUserName}</strong> and your password is <strong>changeme</strong>.</p>
            <p>
                You can <a href={signupState.signupStep} target="_blank" rel="noopener noreferrer">log in to Connect Now here</a> or&nbsp;
                <IconEnvelope />
                <a href={mailLink}>
                    share the login link
                </a>.
            </p>
            <p>For any questions or to discuss next steps, please <a href={resources.contactEmail}>contact us</a>.</p>
            <div className="row">
                <div className="col-12 center-text">
                    <button className="btn btn-primary" onClick={toggleOpen}>Ok</button>
                </div>
            </div>
        </div>
        }
        {signupState.signupStep === signupSteps.ERROR &&
        <div className="col-xs-12 text-center">
            <p>{signupState.signupStep}</p>
        </div>
        }
    </div>;
};
