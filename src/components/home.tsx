import React, { useState } from "react";
import jumbotron_background from "./../assets/media/Boomi-Solutions-Boomi-Connect-Now-Header.jpg";
import "../styles/home.css";
import { NavBar } from "./navbar";
import ReactPlayer from "react-player";
import { FreeTrialSignup } from "./free-trial-signup";

const bcnDataMapsVideoUrl = "./assets/media/cn.data-maps.mp4";
const bcnDeployConfigureRunVideoUrl = "./assets/media/cn.deploy-configure-run.mp4";
const bcnEnvironmentManagementVideoUrl = "./assets/media/cn.no-ipacks.mp4";
const bcnHelpBotVideoUrl = "./assets/media/cn.helpbot.mp4";
const bcnProcessParametersVideoUrl = "./assets/media/cn.process-parameters.mp4";
const bcnProvisioningVideoUrl = "./assets/media/cn.provisioning.mp4";
const bcnVideoUrl = "./assets/media/Boomi_preview.mp4";

const factSheetUrl = "./assets/documents/BCNFactSheet.pdf";

export const Home: React.FC = () => {

    const [videoUrl, setVideoUrl] = useState(bcnVideoUrl);
    const [videoLoop, setVideoLoop] = useState(true);
    const [videoControls, setVideoControls] = useState(false);
    const [videoVolume, setVideoVolume] = useState(0);

    return (
        <React.Fragment>
            <NavBar />
            <FreeTrialSignup />
            <div className="row outer-container">
                <div className="col-12 align-items-end">
                    <div id="jumbotron_image_container">
                    <div id="jumbotron_image" className="align-items-center">
                        <img src={jumbotron_background} alt="CONNECT-NOW" />
                    </div>
                    </div>
                </div>
            </div>
            <div className="jumbotron">
                <div className="jumbotron-particles">
                    <div className="row">
                        <div className="col-sm-1">&nbsp;</div>
                        <div className="col-lg-8 col-sm-12">
                            <h1 className="display-1">Connect Now</h1>
                            <p className="lead">
                            Turn business users into citizen integrators with self-service
                            connectivity
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
            <div className="row">
                <div className="col-lg-2 col-sm-12"></div>
                <div className="col-lg-8 col-sm-12">
                    <ReactPlayer
                        url={videoUrl}
                        width="100%"
                        height="100%"
                        playing
                        loop={videoLoop}
                        controls={videoControls}
                        volume={videoVolume}
                    />
                </div>
            </div>
            <hr className="my-4" />
            <div className="container">
                <div className="row mt-2">
                    <div className="col-lg-6 col-sm-12 p-4 pl-5">
                        <p className="lead-text">
                            Boomi Connect Now
                            <br />
                            <span className="smaller">
                                Demos
                            </span>
                        </p>
                        <p>
                            Watch video demonstrations of Boomi Connect Now features.
                        </p>
                    </div>
                    <div className="col-lg-6 col-sm-12 p-4 pl-5 pad-top">
                        <p className="lead-text">
                            <a
                                href={factSheetUrl}
                                target="blank"
                                className="btn-primary btn-lg navy"
                                title="Fact sheet">Fact sheet
                            </a>
                        </p>
                    </div>
                    <div className="col-sm-12 flex-center">
                        <button
                            className="btn-primary btn-lg navy"
                            title="CN Production"
                            onClick={() => {
                                setVideoLoop(false);
                                setVideoControls(true);
                                setVideoVolume(1);
                                setVideoUrl(bcnProvisioningVideoUrl);
                            }}>
                            Account Provisioning
                        </button>
                        <button
                            className="btn-primary btn-lg navy"
                            title="CN Production"
                            onClick={() => {
                                setVideoLoop(false);
                                setVideoControls(true);
                                setVideoVolume(1);
                                setVideoUrl(bcnHelpBotVideoUrl);
                            }}>
                            Custom Help Bot
                        </button>
                        <button
                            className="btn-primary btn-lg navy"
                            title="CN Production"
                            onClick={() => {
                                setVideoLoop(false);
                                setVideoControls(true);
                                setVideoVolume(1);
                                setVideoUrl(bcnDataMapsVideoUrl);
                            }}>
                            Data Maps
                        </button>
                        <button
                            className="btn-primary btn-lg navy"
                            title="CN Production"
                            onClick={() => {
                                setVideoLoop(false);
                                setVideoControls(true);
                                setVideoVolume(1);
                                setVideoUrl(bcnDeployConfigureRunVideoUrl);
                            }}>
                            Deploy. Configure. Run.
                        </button>
                    </div>
                    <div className="col-sm-12 flex-center">
                        <button
                            className="btn-primary btn-lg navy"
                            title="CN Production"
                            onClick={() => {
                                setVideoLoop(false);
                                setVideoControls(true);
                                setVideoVolume(1);
                                setVideoUrl(bcnEnvironmentManagementVideoUrl);
                            }}>
                            Environment Management
                        </button>
                        <button
                            className="btn-primary btn-lg navy"
                            title="CN Production"
                            onClick={() => {
                                setVideoLoop(false);
                                setVideoControls(true);
                                setVideoVolume(1);
                                setVideoUrl(bcnProcessParametersVideoUrl);
                            }}>
                            Process Parameters
                        </button>
                        <button
                            className="btn-primary btn-lg navy"
                            title="CN Production"
                            onClick={() => {
                                setVideoLoop(true);
                                setVideoControls(false);
                                setVideoVolume(0);
                                setVideoUrl(bcnVideoUrl);
                            }}>
                            Reset
                        </button>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="row mt-10">
                    <div className="col-lg-6 col-sm-12 p-4 pl-5">
                        <p className="lead-text">
                        Boomi Connect Now
                        <br />
                        <span className="smaller">Production</span>
                        </p>
                        <p>
                        Boomi Connect Now empowers your business users with self-service
                        integration capabilities – speeding business results, improving
                        productivity and eliminating delays. Through a marketplace of
                        pre-built integrations published by developers, non-technical
                        business users can quickly and easily find, configure and deploy
                        their own integrations – while IT maintains central control and
                        governance.
                        </p>
                        <p className="text-center">
                        <a
                            href="https://flow.manywho.com/b7493b27-2215-4de8-a0b5-17bbcd94a2e7/play/prod?flow-id=5f1f3608-da36-4de8-ac1c-2ba3e9a0bc62"
                            className="btn-primary btn-lg navy"
                            title="CN Production"
                            target="blank"
                        >
                            Launch
                        </a>
                        </p>
                    </div>
                    <div
                        className="col-lg-6 col-sm-12 img-page-cn-production"
                        title="CN Productions">
                        &nbsp;
                    </div>
                </div>
                <hr className="my-4" />
                <div className="row mt-10">
                    <div
                        className="col-lg-6 col-sm-12 align-items-end img-page-documentation"
                        title="Service Desk">
                        &nbsp;
                    </div>
                    <div className="col-lg-6 col-sm-12 p-4">
                    <p className="lead-tagline">Documented Processes</p>
                    <p className="lead-text">API Reference</p>
                    <p>
                        The Connect Now API.
                    </p>
                    <p className="text-center">
                        <a
                        href="/Documentation"
                        className="btn-primary btn-lg navy"
                        title="Service Desk"
                        target="blank"
                        >
                        API Reference
                        </a>
                    </p>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="row mt-10">
                    <div className="col-lg-6 col-sm-12 p-4">
                    <p className="lead-tagline">Always Ready</p>
                    <p className="lead-text">Contact Support</p>
                    <p>
                        Do you have a question, need some help, or have an issue
                        with Connect Now? Report it to our support center for prompt
                        resolution!
                    </p>
                    <p className="text-center">
                        <a
                        href="https://enspire-tech.atlassian.net/servicedesk/customer/portal/2"
                        className="btn-primary btn-lg navy"
                        title="Service Desk"
                        target="blank"
                        >
                        Service Desk
                        </a>
                    </p>
                    </div>
                    <div
                        className="col-lg-6 col-sm-12 align-items-end img-page-service-desk"
                        title="Service Desk">
                        &nbsp;
                    </div>
                </div>
                <hr className="my-4" />
                <div className="row mt-10">
                    <div
                        className="col-lg-6 col-sm-12 img-page-cn-solutions"
                        title="CN Solutions">
                    </div>
                    <div className="col-lg-6 col-sm-12 p-4">
                        <p className="lead-tagline">Embedded Example</p>
                        <p className="lead-text">Boomi Connect Now <br />
                            <span className="smaller">Embedded</span></p>
                        <p>
                            You can embed Boomi Connect Now in existing web apps without using
                            inline frames (iframe). Connect Now's CSS code is namespaced so it
                            will not clash with existing styles in your app.
                        </p>
                        <p className="text-center">
                            <a
                            href="./embedded-bcn/index.html"
                            className="btn-primary btn-lg navy"
                            title="CN Solutions"
                            target="blank"
                            >
                            Launch Demo
                            </a>
                        </p>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="row mt-10">
                    <div className="col-lg-6 col-sm-12 p-4 pl-5">
                    <p className="lead-tagline">Test</p>
                    <p className="lead-text">Boomi Connect Now
                        <br />
                        <span className="smaller">Pre-Release Candidate</span>
                    </p>
                    <p className="text-center">
                        <a
                        href="https://flow.manywho.com/760e8d2f-c96c-4b5c-b2d7-ac64b0dc8a90/play/bcn-test?flow-id=5f1f3608-da36-4de8-ac1c-2ba3e9a0bc62"
                        className="btn-primary btn-lg navy"
                        title="CN Test"
                        target="blank"
                        >
                        CN Test
                        </a>
                    </p>
                    </div>
                    <div
                        className="col-lg-6 col-sm-12 img-page-cn-production"
                        title="CN Productions">
                        &nbsp;
                    </div>
                </div>
            </div>
            <section id="questions_section">
                <div className="container">
                    <div className="row h-100">
                        <div className="col-12 my-auto text-center">
                            Have Questions? We Got You!{" "}
                            <a
                            href="https://enspire-tech.atlassian.net/servicedesk/customer/portal/2"
                            className="btn-primary btn-xl navy ml-3"
                            title="Service Desk">
                                Contact Support
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
      );

};
