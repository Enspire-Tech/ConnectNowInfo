import React from "react";
import jumbotron_background from "./../assets/jumbotron-background.jpg";
import "../styles/home.css";
import { NavBar } from "./navbar";

export const Home: React.FC = () => {
    return (
        <React.Fragment>
          <NavBar />
          <div className="row">
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
                <div className="col-1">&nbsp;</div>
                <div className="col-lg-6 col-md-8 col-sm-12">
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
          <div className="container">
            <div className="row mt-10">
              <div className="col-lg-6 col-md-6 col-sm-12 p-4 pl-5">
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
                    href="https://flow.manywho.com/abc01a4e-3f09-4f37-a175-643eae3edfcb/play/GA105?flow-id=5f1f3608-da36-4de8-ac1c-2ba3e9a0bc62"
                    className="btn-primary btn-lg navy"
                    title="CN Production"
                    target="blank"
                  >
                    Launch
                  </a>
                </p>
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-12 img-page-cn-productions"
                title="CN Productions"
              >
                &nbsp;
              </div>
            </div>
            <hr className="my-4" />
            <div className="row mt-10">
              <div
                className="col-lg-6 col-md-6 col-sm-12 align-items-end img-page-service-desk"
                title="Service Desk"
              >
                &nbsp;
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 p-4">
                <p className="lead-tagline">Always Ready</p>
                <p className="lead-text">Contact Support</p>
                <p>
                  Do you have a question, need some help, or have found an issue
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
            </div>
            <hr className="my-4" />
            <div className="row mt-10">
              <div className="col-lg-6 col-md-6 col-sm-12 p-4">
                <p className="lead-tagline">Documented Processes</p>
                <p className="lead-text">API Reference</p>
                <p>
                  Count on our documentation to guide you in using Connect Now
                  services.
                </p>
                <p className="text-center">
                  <a
                    href="documentation.html"
                    className="btn-primary btn-lg navy"
                    title="Service Desk"
                    target="blank"
                  >
                    API Reference
                  </a>
                </p>
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-12 align-items-end img-page-documentation"
                title="Service Desk"
              >
                &nbsp;
              </div>
            </div>
            <hr className="my-4" />
            <div className="row mt-10">
              <div
                className="col-lg-6 col-md-6 col-sm-12 img-page-cn-solutions"
                title="CN Solutions"
              ></div>
              <div className="col-lg-6 col-md-6 col-sm-12 p-4">
                <p className="lead-tagline">Embedded Example</p>
                <p className="lead-text">Boomi Connect Now</p>
                <p>
                  We can embed Boomi Connect Now in existing web apps without using
                  inline frames (iframe). Connect Now's CSS code is namespaced so it
                  will not clash with any existing styles on the page.
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
              <div className="col-lg-6 col-md-6 col-sm-12 p-4 pl-5">
                <p className="lead-tagline">Test</p>
                <p className="lead-text">Boomi Connect Now</p>
                <p>This is the Connect Now Test site</p>
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
                className="col-lg-6 col-md-6 col-sm-12 img-page-cn-productions"
                title="CN Productions"
              >
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
                    title="Service Desk"
                  >
                    Contact Support
                  </a>
                </div>
              </div>
            </div>
          </section>
          <div className="row">
            <div className="top-navigation col-12">&nbsp;</div>
          </div>
        </React.Fragment>
      );
};
