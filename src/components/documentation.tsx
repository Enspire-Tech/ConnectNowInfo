import React from "react";
import logo from "./../assets/media/boomi-website-logo.svg";

require ("../styles/documentation.css");

export const Documentation: React.FC = () => {
        return (
            <React.Fragment>
                <header className="header fixed-top">
                    <div className="branding docs-branding">
                        <div className="container-fluid position-relative py-2">
                            <div className="docs-logo-wrapper">
                                <button id="docs-sidebar-toggler" className="docs-sidebar-toggler docs-sidebar-visible mr-2 d-xl-none" type="button">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                                <div className="site-logo"><a className="navbar-brand" href="https://boomi.com"><img className="navbar-brand docs-image" src={logo} alt="boomi logo" /></a> <span className="text-alt">API Reference</span></div>
                            </div>
                            <div className="docs-top-utilities d-flex justify-content-end align-items-center">
                                &nbsp;
                            </div>
                        </div>
                    </div>
                </header>
                <div className="docs-wrapper">
<div id="docs-sidebar" className="docs-sidebar">
    <div className="top-search-box d-lg-none p-3">
                <form className="search-form">
                    <input type="text" placeholder="Search the docs..." name="search" className="form-control search-input" />
                    <button type="submit" className="btn search-btn" value="Search"><i className="fas fa-search"></i></button>
                </form>
            </div>
            <nav id="docs-nav" className="docs-nav navbar">
                <ul className="section-items list-unstyled nav flex-column pb-3">
                    <li className="nav-item section-title mt-3"><a className="nav-link scrollto active" href="#content" data-section-id="api"><span className="theme-icon-holder mr-2"><i className="fas fa-box"></i></span>API</a></li>
                    <li className="nav-item"><a className="nav-link scrollto" href="#content" data-section-id="item-1-1">Attach Integration Pack to Environment</a></li>
                    <li className="nav-item"><a className="nav-link scrollto" href="#content" data-section-id="item-1-2">Execute Integration Process</a></li>
                    <li className="nav-item"><a className="nav-link scrollto" href="#content" data-section-id="item-1-21">Get Atom Detail</a></li>
                    <li className="nav-item"><a className="nav-link scrollto" href="#content" data-section-id="item-1-19">Get Atoms for Account</a></li>
                    <li className="nav-item"><a className="nav-link scrollto" href="#content" data-section-id="item-1-3">Get Available Integration Packs</a></li>
                    <li className="nav-item"><a className="nav-link scrollto" href="#content" data-section-id="item-1-4">Get Boomi Account Profile</a></li>
                    <li className="nav-item"><a className="nav-link scrollto" href="#content" data-section-id="item-1-5">Get Environments for Account</a></li>
                    <li className="nav-item"><a className="nav-link scrollto" href="#content" data-section-id="item-1-6">Get Extended Connections for Installed Integration Pack</a></li>
                    <li className="nav-item"><a className="nav-link scrollto" href="#content" data-section-id="item-1-7">Get Extended Cross Reference Tables for Installed Integration Pack</a></li>
                    <li className="nav-item"><a className="nav-link scrollto" href="#content" data-section-id="item-1-8">Get Extended Maps for Installed Integration Pack</a></li>
                    <li className="nav-item"><a className="nav-link scrollto" href="#content" data-section-id="item-1-9">Get Extended Process Properties for Installed Integration Pack</a></li>
                    <li className="nav-item"><a className="nav-link scrollto" href="#content" data-section-id="item-1-10">Get Execution Records</a></li>
                    <li className="nav-item"><a className="nav-link scrollto" href="#content" data-section-id="item-1-11">Get Installed Integration Packs</a></li>
                    <li className="nav-item"><a className="nav-link scrollto" href="#content" data-section-id="item-1-20">Get Installer Token</a></li>
                    <li className="nav-item"><a className="nav-link scrollto" href="#content" data-section-id="item-1-12">Get OAuth2 Access Token URL</a></li>
                    <li className="nav-item"><a className="nav-link scrollto" href="#content" data-section-id="item-1-13">Get Process Schedule</a></li>
                    <li className="nav-item"><a className="nav-link scrollto" href="#content" data-section-id="item-1-14">Get Processes in a Deployed Integration Pack</a></li>
                    <li className="nav-item"><a className="nav-link scrollto" href="#content" data-section-id="item-1-15">Removed Installed Integration Pack Instance</a></li>
                    <li className="nav-item"><a className="nav-link scrollto" href="#content" data-section-id="item-1-22">Upsert Account Profile</a></li>
                    <li className="nav-item"><a className="nav-link scrollto" href="#content" data-section-id="item-1-16">Upsert Environment Extensions</a></li>
                    <li className="nav-item"><a className="nav-link scrollto" href="#content" data-section-id="item-1-17">Upsert Map Extensions</a></li>
                    <li className="nav-item"><a className="nav-link scrollto" href="#content" data-section-id="item-1-18">Upsert Process Schedule</a></li>
                    <li className="nav-item"><a className="nav-link scrollto" href="#content" data-section-id="item-1-23">Upsert User Profile</a></li>
                </ul>
            </nav>
        </div>
        <div className="docs-content">
            <div className="container">
                <p>&nbsp;</p>
                <article className="docs-article" id="introduction">
                    <header className="docs-header">
                        <section className="docs-intro"></section>
                    </header>
                </article>
                <article className="docs-article" id="api">
                    <header className="docs-header">
                        <h1 className="docs-heading">API <span className="docs-time">Last updated: 2020-04-10</span></h1>
                        <section className="docs-intro">
                            <p>Documentation for the Boomi Connect Now API.</p>
                        </section>
                    </header>
                    <section className="docs-section" id="item-1-1">
                        <h2 className="section-heading">Attach Integration Pack to Environment</h2>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">POST:</strong> <code>ws/simple/createIntegrationPackDeployment HTTPS/1.1</code></li>
                            <li><strong className="mr-1">HOST:</strong> <code>connect.boomi.com</code></li>
                        </ul>
                        <h3>HEADERS</h3>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Accept:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Content-Type:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Authorization:</strong> <code>Basic</code></li>
                        </ul>
                        <h3>BODY</h3>
                        <div className="docs-code-block">
                            <pre className="shadow-lg rounded">
                                <code className="json hljs">
{`{
    "auth": "...",
    "accountId": "",
    "environmentId": "",
    "integrationPackId": "",
    "integrationPackOverrideName": ""
}`}
                                </code>
                            </pre>
                        </div>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Auth:</strong> <code>username:password of the service account, base-64 encoded.</code></li>
                            <li><strong className="mr-1">AccountId:</strong> <code>the AAID of the sub-account to which the integration pack was deployed.</code></li>
                            <li><strong className="mr-1">EnvironmentId:</strong> <code>the Id of the environment to which the integration pack will be deployed as returned by <a className="internal-link" href="#content" data-section-id="item-1-5">Get Environments for Account</a>.</code></li>
                            <li><strong className="mr-1">Integration Pack Id:</strong> <code>the Id of the integration pack to deploy as returned by <a className="internal-link" href="#content" data-section-id="item-1-3">Get Available Integration Packs</a>.</code></li>
                            <li><strong className="mr-1">Integration Pack Override Name:</strong> <code>the name to give to the integration pack instance being deployed. Applicable only to multi-install integration packs.</code></li>
                        </ul>
                    </section>
                    <section className="docs-section" id="item-1-2">
                        <h2 className="section-heading">Execute Integration Process</h2>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">POST:</strong> <code>ws/simple/executeIntegrationProcess HTTPS/1.1</code></li>
                            <li><strong className="mr-1">HOST:</strong> <code>connect.boomi.com</code></li>
                        </ul>
                        <h3>HEADERS</h3>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Accept:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Content-Type:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Authorization:</strong> <code>Basic</code></li>
                        </ul>
                        <h3>BODY</h3>
                        <div className="docs-code-block">
                            <pre className="shadow-lg rounded">
                                <code className="json hljs">
{`{
    "id": "",
    "auth": "...",
    "accountId": ""
}`}
                                </code>
                            </pre>
                        </div>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Id:</strong> <code>the ID of the integration process, as reported by <a className="internal-link" href="#content" data-section-id="item-1-14">Get Processes in a Deployed Integration Pack</a>.</code></li>
                            <li><strong className="mr-1">Auth:</strong> <code>username:password of the service account, base-64 encoded.</code></li>
                            <li><strong className="mr-1">AccountId:</strong> <code>the AAID of the sub-account to which the integration pack was deployed.</code></li>
                        </ul>
                    </section>
                    <section className="docs-section" id="item-1-3">
                        <h2 className="section-heading">Get Available Integration Packs</h2>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">POST:</strong> <code>/ws/simple/getAllIPacksAvailableToAccount HTTPS/1.1</code></li>
                            <li><strong className="mr-1">HOST:</strong> <code>connect.boomi.com</code></li>
                        </ul>
                        <h3>HEADERS</h3>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Accept:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Content-Type:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Authorization:</strong> <code>Basic</code></li>
                        </ul>
                        <h3>BODY</h3>
                        <div className="docs-code-block">
                            <pre className="shadow-lg rounded">
                                <code className="json hljs">
{`{
    "auth": "...",
    "accountId": "",
    "@type": ""
}`}
                                </code>
                            </pre>
                        </div>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Auth:</strong> <code>username:password of the service account, base-64 encoded.</code></li>
                            <li><strong className="mr-1">AccountId:</strong> <code>the AAID of the sub-account for which you want available IPacks.</code></li>
                            <li><strong className="mr-1">@type:</strong> <code>(optional) BOTH to return both SINGLE and MULTI install iPacks.  Only MULTI install iPacks are returned by default.</code></li>
                        </ul>
                    </section>
                    <section className="docs-section" id="item-1-4">
                        <h2 className="section-heading">Get Boomi Account Profile</h2>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">POST:</strong> <code>ws/simple/getBoomiAccountProfile HTTPS/1.1</code></li>
                            <li><strong className="mr-1">HOST:</strong> <code>connect.boomi.com</code></li>
                        </ul>
                        <h3>HEADERS</h3>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Accept:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Content-Type:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Authorization:</strong> <code>Basic</code></li>
                        </ul>
                        <h3>BODY</h3>
                        <div className="docs-code-block">
                            <pre className="shadow-lg rounded">
                                <code className="json hljs">
{`{
    "auth": "...",
    "accountId": ""
}`}
                                </code>
                            </pre>
                        </div>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Auth:</strong> <code>username:password of the service account, base-64 encoded.</code></li>
                            <li><strong className="mr-1">AccountId:</strong> <code>the AAID of the account for which the profile is being requested.</code></li>
                        </ul>
                    </section>
                    <section className="docs-section" id="item-1-5">
                        <h2 className="section-heading">Get Environments for Account</h2>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">POST:</strong> <code>ws/simple/getEnvironmentsForAccount HTTPS/1.1</code></li>
                            <li><strong className="mr-1">HOST:</strong> <code>connect.boomi.com</code></li>
                        </ul>
                        <h3>HEADERS</h3>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Accept:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Content-Type:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Authorization:</strong> <code>Basic</code></li>
                        </ul>
                        <h3>BODY</h3>
                        <div className="docs-code-block">
                            <pre className="shadow-lg rounded">
                                <code className="json hljs">
{`{
    "auth": "...",
    "accountId": ""
}`}
                                </code>
                            </pre>
                        </div>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Auth:</strong> <code>username:password of the service account, base-64 encoded.</code></li>
                            <li><strong className="mr-1">AccountId:</strong> <code>the AAID of the sub-account for which to retrieve environments.</code></li>
                        </ul>
                    </section>
                    <section className="docs-section" id="item-1-6">
                        <h2 className="section-heading">Get Extended Connections for Installed Integration Pack</h2>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">POST:</strong> <code>ws/simple/getExtendedConnectionsForInstalledIPack HTTPS/1.1</code></li>
                            <li><strong className="mr-1">HOST:</strong> <code>connect.boomi.com</code></li>
                        </ul>
                        <h3>HEADERS</h3>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Accept:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Content-Type:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Authorization:</strong> <code>Basic</code></li>
                        </ul>
                        <h3>BODY</h3>
                        <div className="docs-code-block">
                            <pre className="shadow-lg rounded">
                                <code className="json hljs">
{`{
    "auth": "...",
    "accountId": "",
    "id": "",
    "@type": ""
}`}
                                </code>
                            </pre>
                        </div>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Auth:</strong> <code>username:password of the service account, base-64 encoded.</code></li>
                            <li><strong className="mr-1">AccountId:</strong> <code>the AAID of the sub-account to which the integration pack is deployed.</code></li>
                            <li><strong className="mr-1">Id:</strong> <code>the Id of the integration pack instance for which to retrieve extended connections.</code></li>
                            <li><strong className="mr-1">@type:</strong> <code>the install type of integration pack (“SINGLE” or “MULTI”).</code></li>
                        </ul>
                    </section>
                    <section className="docs-section" id="item-1-7">
                        <h2 className="section-heading">Get Extended Cross Reference Tables for Installed Integration Pack</h2>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">POST:</strong> <code>ws/simple/getExtendedConnectionsForInstalledIPack HTTPS/1.1</code></li>
                            <li><strong className="mr-1">HOST:</strong> <code>connect.boomi.com</code></li>
                        </ul>
                        <h3>HEADERS</h3>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Accept:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Content-Type:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Authorization:</strong> <code>Basic</code></li>
                        </ul>
                        <h3>BODY</h3>
                        <div className="docs-code-block">
                            <pre className="shadow-lg rounded">
                                <code className="json hljs">
{`{
    "auth": "...",
    "accountId": "",
    "id": "",
    "@type": ""
}`}
                                </code>
                            </pre>
                        </div>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Auth:</strong> <code>username:password of the service account, base-64 encoded.</code></li>
                            <li><strong className="mr-1">AccountId:</strong> <code>the AAID of the sub-account to which the integration pack is deployed.</code></li>
                            <li><strong className="mr-1">Id:</strong> <code>the Id of the integration pack instance for which to retrieve extended cross reference tables.</code></li>
                            <li><strong className="mr-1">@type:</strong> <code>the install type of integration pack (“SINGLE” or “MULTI”).</code></li>
                        </ul>
                    </section>
                    <section className="docs-section" id="item-1-8">
                        <h2 className="section-heading">Get Extended Maps for Installed Integration Pack</h2>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">POST:</strong> <code>ws/simple/getExtendedMapsForInstalledIPackHTTPS/1.1</code></li>
                            <li><strong className="mr-1">HOST:</strong> <code>connect.boomi.com</code></li>
                        </ul>
                        <h3>HEADERS</h3>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Accept:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Content-Type:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Authorization:</strong> <code>Basic</code></li>
                        </ul>
                        <h3>BODY</h3>
                        <div className="docs-code-block">
                            <pre className="shadow-lg rounded">
                                <code className="json hljs">
{`{
    "auth": "...",
    "accountId": "",
    "id": "",
    "@type": "",
    "connection": [{}]
}`}
                                </code>
                            </pre>
                        </div>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Auth:</strong> <code>username:password of the service account, base-64 encoded.</code></li>
                            <li><strong className="mr-1">AccountId:</strong> <code>the AAID of the sub-account to which the integration pack is deployed.</code></li>
                            <li><strong className="mr-1">Id:</strong> <code>the Id of the integration pack instance for which to retrieve extended maps.</code></li>
                            <li><strong className="mr-1">@type:</strong> <code>the install type of integration pack (“SINGLE” or “MULTI”).</code></li>
                            <li><strong className="mr-1">Connection:</strong> <code>an array of connection objects extended by the integration pack as return by <a className="internal-link" href="#content" data-section-id="item-1-6">Get Extended Connections for Installed IPack</a>.  These are needed to support dynamic browse profiles.</code></li>
                        </ul>
                    </section>
                    <section className="docs-section" id="item-1-9">
                        <h2 className="section-heading">Get Extended Process Properties for Installed Integration Pack</h2>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">POST:</strong> <code>ws/simple/getExtendedProcessPropertiesForInstalledIPack /1.1</code></li>
                            <li><strong className="mr-1">HOST:</strong> <code>connect.boomi.com</code></li>
                        </ul>
                        <h3>HEADERS</h3>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Accept:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Content-Type:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Authorization:</strong> <code>Basic</code></li>
                        </ul>
                        <h3>BODY</h3>
                        <div className="docs-code-block">
                            <pre className="shadow-lg rounded">
                                <code className="json hljs">
{`{
    "auth": "...",
    "accountId": "",
    "id": "",
    "@type": ""
}`}
                                </code>
                            </pre>
                        </div>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Auth:</strong> <code>username:password of the service account, base-64 encoded.</code></li>
                            <li><strong className="mr-1">AccountId:</strong> <code>the AAID of the sub-account to which the integration pack is deployed.</code></li>
                            <li><strong className="mr-1">Id:</strong> <code>the Id of the integration pack instance for which to retrieve extended maps.</code></li>
                            <li><strong className="mr-1">@type:</strong> <code>the install type of integration pack (“SINGLE” or “MULTI”).</code></li>
                        </ul>
                    </section>
                    <section className="docs-section" id="item-1-10">
                        <h2 className="section-heading">Get Execution Records</h2>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">POST:</strong> <code>/ws/simple/getProcessExecutionRecords HTTPS/1.1</code></li>
                            <li><strong className="mr-1">HOST:</strong> <code>connect.boomi.com</code></li>
                        </ul>
                        <h3>HEADERS</h3>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Accept:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Content-Type:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Authorization:</strong> <code>Basic</code></li>
                        </ul>
                        <h3>BODY</h3>
                        <div className="docs-code-block">
                            <pre className="shadow-lg rounded">
                                <code className="json hljs">
{`{
    "date": "yyyy-MM-dd’T’hh:mm:ss.nnn",
    "auth": "...",
    "accountId": ""
}`}
                                </code>
                            </pre>
                        </div>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Date:</strong> <code>the "from" date for execution logs.  The endpoint will return the first 1000 records beginning with that date/time.</code></li>
                            <li><strong className="mr-1">Auth:</strong> <code>username:password of the service account, base-64 encoded.</code></li>
                            <li><strong className="mr-1">AccountId:</strong> <code>the AAID of the sub-account for which you want execution records.</code></li>
                        </ul>
                    </section>
                    <section className="docs-section" id="item-1-11">
                        <h2 className="section-heading">Get Installed Integration Packs</h2>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">POST:</strong> <code>/ws/simple/getInstalledIPacks HTTPS/1.1</code></li>
                            <li><strong className="mr-1">HOST:</strong> <code>connect.boomi.com</code></li>
                        </ul>
                        <h3>HEADERS</h3>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Accept:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Content-Type:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Authorization:</strong> <code>Basic</code></li>
                        </ul>
                        <h3>BODY</h3>
                        <div className="docs-code-block">
                            <pre className="shadow-lg rounded">
                                <code className="json hljs">
{`{
    "auth": "...",
    "accountId": ""
}`}
                                </code>
                            </pre>
                        </div>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Auth:</strong> <code>username:password of the service account, base-64 encoded.</code></li>
                            <li><strong className="mr-1">AccountId:</strong> <code>the AAID of the sub-account for which you want installed IPacks.</code></li>
                        </ul>
                    </section>
                    <section className="docs-section" id="item-1-12">
                        <h2 className="section-heading">Get OAuth2 Access Token URL</h2>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">POST:</strong> <code>ws/simple/getOAuth2AccessTokenURL HTTPS/1.1</code></li>
                            <li><strong className="mr-1">HOST:</strong> <code>connect.boomi.com</code></li>
                        </ul>
                        <h3>HEADERS</h3>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Accept:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Content-Type:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Authorization:</strong> <code>Basic</code></li>
                        </ul>
                        <h3>BODY</h3>
                        <div className="docs-code-block">
                            <pre className="shadow-lg rounded">
                                <code className="json hljs">
{`{
    "accountId": "",
    "auth”: "...",
    "connectionId": "",
    "environmentId": "",
    "extensionGroupId": "",
    "fieldId": ""
}`}
                                </code>
                            </pre>
                        </div>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">AccountId:</strong> <code>the AAID of the sub-account to which the integration pack was deployed.</code></li>
                            <li><strong className="mr-1">Auth:</strong> <code>username:password of the service account, base-64 encoded.</code></li>
                            <li><strong className="mr-1">ConnectionId:</strong> <code>the ID of the connection object as returned by <a className="internal-link" href="#content" data-section-id="item-1-6">Get Extended Connections for Deployed Integration Pack</a>.</code></li>
                            <li><strong className="mr-1">EnvironmentId:</strong> <code>the ID of the environment to which the integration process is deployed as returned by <a className="internal-link" href="#content" data-section-id="item-1-5">Get Environments for Account</a>.</code></li>
                            <li><strong className="mr-1">ExtensionGroupId:</strong> <code>the ID of the integration process as returned by <a className="internal-link" href="#content" data-section-id="item-1-15">Get Processes in a Deployed Integration Pack</a>.</code></li>
                            <li><strong className="mr-1">FieldId:</strong> <code>the ID of connection field that will contain the OAuth2 token, contained in the response from <a className="internal-link" href="#content" data-section-id="item-1-6">Get Extended Connections for Deployed Integration Pack</a>.</code></li>
                        </ul>
                    </section>
                    <section className="docs-section" id="item-1-13">
                        <h2 className="section-heading">Get Process Schedule</h2>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">POST:</strong> <code>ws/simple/getProcessSchedules HTTPS/1.1</code></li>
                            <li><strong className="mr-1">HOST:</strong> <code>connect.boomi.com</code></li>
                        </ul>
                        <h3>HEADERS</h3>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Accept:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Content-Type:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Authorization:</strong> <code>Basic</code></li>
                        </ul>
                        <h3>BODY</h3>
                        <div className="docs-code-block">
                            <pre className="shadow-lg rounded">
                                <code className="json hljs">
{`{
    "accountId": "",
    "auth”: "...",
    "id": ""
}`}
                                </code>
                            </pre>
                        </div>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">AccountId:</strong> <code>the AAID of the sub-account to which the integration pack was deployed.</code></li>
                            <li><strong className="mr-1">Auth:</strong> <code>username:password of the service account, base-64 encoded.</code></li>
                            <li><strong className="mr-1">ConnectionId:</strong> <code>the ID of the connection object as returned by <a className="internal-link" href="#content" data-section-id="item-1-6">Get Extended Connections for Deployed Integration Pack</a>.</code></li>
                            <li><strong className="mr-1">EnvironmentId:</strong> <code>the ID of the environment to which the integration process is deployed as returned by <a className="internal-link" href="#content" data-section-id="item-1-5">Get Environments for Account</a>.</code></li>
                            <li><strong className="mr-1">ExtensionGroupId:</strong> <code>the ID of the integration process as returned by <a className="internal-link" href="#content" data-section-id="item-1-15">Get Processes in a Deployed Integration Pack</a>.</code></li>
                            <li><strong className="mr-1">FieldId:</strong> <code>the ID of connection field that will contain the OAuth2 token, contained in the response from <a className="internal-link" href="#content" data-section-id="item-1-6">Get Extended Connections for Deployed Integration Pack</a>.</code></li>
                        </ul>
                    </section>
                    <section className="docs-section" id="item-1-14">
                        <h2 className="section-heading">Get Processes in a Deployed Integration Pack</h2>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">POST:</strong> <code>ws/simple/getInstalledIPackInstanceProcesses HTTPS/1.1</code></li>
                            <li><strong className="mr-1">HOST:</strong> <code>connect.boomi.com</code></li>
                        </ul>
                        <h3>HEADERS</h3>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Accept:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Content-Type:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Authorization:</strong> <code>Basic</code></li>
                        </ul>
                        <h3>BODY</h3>
                        <div className="docs-code-block">
                            <pre className="shadow-lg rounded">
                                <code className="json hljs">
{`{
    "id": "",
    "auth": "...",
    "accountId": ""
}`}
                                </code>
                            </pre>
                        </div>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Id:</strong> <code>the ID of the deployed integration pack, as reported by <a className="internal-link" href="#content" data-section-id="item-1-11">Get Installed Integration Packs</a>.</code></li>
                            <li><strong className="mr-1">Auth:</strong> <code>username:password of the service account, base-64 encoded.</code></li>
                            <li><strong className="mr-1">AccountId:</strong> <code>the AAID of the sub-account to which the integration pack was deployed.</code></li>
                        </ul>
                    </section>
                    <section className="docs-section" id="item-1-15">
                        <h2 className="section-heading">Removed Installed Integration Pack Instance</h2>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">DELETE:</strong> <code>ws/simple/deleteInstalledIPackInstance HTTPS/1.1</code></li>
                            <li><strong className="mr-1">HOST:</strong> <code>connect.boomi.com</code></li>
                        </ul>
                        <h3>HEADERS</h3>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Accept:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Content-Type:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Authorization:</strong> <code>Basic</code></li>
                        </ul>
                        <h3>BODY</h3>
                        <div className="docs-code-block">
                            <pre className="shadow-lg rounded">
                                <code className="json hljs">
{`{
    "id": "",
    "auth": "...",
    "accountId": ""
}`}
                                </code>
                            </pre>
                        </div>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Id:</strong> <code>the ID of the deployed integration pack, as reported by <a className="internal-link" href="#content" data-section-id="item-1-11">Get Installed Integration Packs</a>.</code></li>
                            <li><strong className="mr-1">Auth:</strong> <code>username:password of the service account, base-64 encoded.</code></li>
                            <li><strong className="mr-1">AccountId:</strong> <code>the AAID of the sub-account to which the integration pack was deployed.</code></li>
                        </ul>
                    </section>
                    <section className="docs-section" id="item-1-16">
                        <h2 className="section-heading">Upsert Environment Extensions</h2>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">POST:</strong> <code>ws/simple/upsertEnvironmentExtensions HTTPS/1.1</code></li>
                            <li><strong className="mr-1">HOST:</strong> <code>connect.boomi.com</code></li>
                        </ul>
                        <h3>HEADERS</h3>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Accept:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Content-Type:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Authorization:</strong> <code>Basic</code></li>
                        </ul>
                        <h3>BODY</h3>
                        <div className="docs-code-block">
                            <pre className="shadow-lg rounded">
                                <code className="json hljs">
{`{
    "accountId": "",
    "iPackInstanceId": "",
    "@ipackType": "",
    "auth": "",
    "processPropertyContainers": [
        {
        "@type": "",
        "environmentId": "",
        "id": "",
        "name": "",
        "processProperties": [
            {
            "key": "",
            "label": "",
            "encryptedValueSet": [true/false],
            "value": ""
            }
        ]
        }
    ],
    "connections": [
        {
        "@type": "",
        "field": [
            {
            "@type": "",
            "id": "",
            "encryptedValueSet": [true/false],
            "usesEncryption": [true/false],
            "componentOverride": [true/false],
            "value": "",
            "isOAuth2": [true/false],
            "oAuth2TokenURL": ""
            }
        ],
        "id": "",
        "name": ""
        }
        ],
        "id": "",
        "name": ""
        }
    ],
    "crossReferenceTables": [
        {
        "@type": "",
        "CrossReferenceRows": {
            "@type": "",
            "row": [
            {
                "@type": "CrossReferenceRow",
                "ref1": "",
                "ref2": "",
                "ref3": "",
                "ref4": "",
                "ref5": "",
                "ref6": "",
                "ref7": "",
                "ref8": "",
                "ref9": "",
                "ref10": "",
                "ref11": "",
                "ref12": "",
                "ref13": "",
                "ref14": "",
                "ref15": "",
                "ref16": "",
                "ref17": "",
                "ref18": "",
                "ref19": "",
                "ref20": ""
            }
            ]
        },
        "id": "",
        "overrideValues": [true/false],
        "name": "",
        "columnNames": ""
        }
    ]
}`}
                                </code>
                            </pre>
                        </div>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">AccountId:</strong> <code>the AAID of the sub-account to which the integration pack was deployed.</code></li>
                            <li><strong className="mr-1">Auth:</strong> <code>username:password of the service account, base-64 encoded.</code></li>
                            <li><strong className="mr-1">iPackInstanceId:</strong> <code>the ID of the deployed integration pack, as reported by <a className="internal-link" href="#content" data-section-id="item-1-11">Get Installed Integration Packs</a>.</code></li>
                            <li><strong className="mr-1">ProcessPropertyContainers:</strong> <code>an array of objects returned by <a className="internal-link" href="#content" data-section-id="item-1-9">Get Extended Process Properties for Installed Integration Pack</a>.</code></li>
                            <li><strong className="mr-1">Connections:</strong> <code>an array of objects returned by <a className="internal-link" href="#content" data-section-id="item-1-6">Get Extended Connections for Installed Integration Pack</a>.</code></li>
                            <li><strong className="mr-1">CrossReferenceTables:</strong> <code>an array of objects returned by <a className="internal-link" href="#content" data-section-id="item-1-7">Get Extended Cross Reference Tables for Installed Integration Pack</a>.</code></li>
                        </ul>
                    </section>
                    <section className="docs-section" id="item-1-17">
                        <h2 className="section-heading">Upsert Map Extensions</h2>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">POST:</strong> <code>ws/simple/upsertMapExtensions HTTPS 1.1</code></li>
                            <li><strong className="mr-1">HOST:</strong> <code>connect.boomi.com</code></li>
                        </ul>
                        <h3>HEADERS</h3>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Accept:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Content-Type:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Authorization:</strong> <code>Basic</code></li>
                        </ul>
                        <h3>BODY</h3>
                        <div className="docs-code-block">
                            <pre className="shadow-lg rounded">
                                <code className="json hljs">
{`{
    "accountId": "",
    "accessToken": "",
    "environmentId": "",
    "extensionGroupId": "",
    "Maps": [
                {
                "id": "",
                "processId": "",
                "mapId": "",
                "name": "",
                "Map": {
                    "SourceProfileNodes": [
                    {
                        "@type": "",
                        "name": "",
                        "componentId": "",
                        "xpath": ""
                    }
                    ],
                    "DestinationProfileNodes": [
                    {
                        "@type": "",
                        "name": "",
                        "componentId": "",
                        "xpath": ""
                    }
                    ],
                    "ExtendedMappings": [
                    {
                        "@type": ""
                        "fromXPath": "",
                        "toXPath": "",
                        "fromFunction": "",
                        "toFunction": ""
                    }
                    ],
                    "ExtendedFunctions": [
                    {
                        "@type": "",
                        "cacheType": "",
                        "id": "",
                        "type": "",
                        "Inputs": {
                        "@type": "",
                        "Input": [
                            {
                            "@type": "",
                            "default": null || "",
                            "name": "",
                            "key": ""
                            }
                        ]
                        },
                        "Outputs": {
                        "@type": "",
                        "Output": [
                            {
                            "@type": "",
                            "name": "",
                            "key": ""
                            }
                        ]
                        }
                    }
                    ]
                }
            }
        ]
}`}
                                </code>
                            </pre>
                        </div>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">AccountId:</strong> <code>the AAID of the sub-account to which the integration pack was deployed.</code></li>
                            <li><strong className="mr-1">AccessToken:</strong> <code>username:password of the service account, base-64 encoded.</code></li>
                            <li><strong className="mr-1">EnvironmentId:</strong> <code>the ID of the environment to which the integration pack containing the map is deployed.</code></li>
                            <li><strong className="mr-1">ExtensionGroupId:</strong> <code>the ID of the deployed integration pack, as reported by <a className="internal-link" href="#content" data-section-id="item-1-11">Get Installed Integration Packs</a>.</code></li>
                            <li><strong className="mr-1">Maps:</strong> <code>array of map objects as returned by <a className="internal-link" href="#content" data-section-id="item-1-8">Get Extended Maps for Installed Integration Pack</a>.</code></li>
                        </ul>
                    </section>
                    <section className="docs-section" id="item-1-18">
                        <h2 className="section-heading">Upsert Process Schedule</h2>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">POST:</strong> <code>ws/simple/upsertProcessSchedules HTTPS 1.1</code></li>
                            <li><strong className="mr-1">HOST:</strong> <code>connect.boomi.com</code></li>
                        </ul>
                        <h3>HEADERS</h3>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Accept:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Content-Type:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Authorization:</strong> <code>Basic</code></li>
                        </ul>
                        <h3>BODY</h3>
                        <div className="docs-code-block">
                            <pre className="shadow-lg rounded">
                                <code className="json hljs">
{`{
    "result": [
        {
        "@type": "ProcessSchedules",
        "Schedule": [
            {
            "@type": "",
            "minutes": "",
            "hours": "",
            "daysOfWeek": "",
            "daysOfMonth": "",
            "months": "",
            "years": ""
            }
        ],
        "Retry": {
            "@type": "ScheduleRetry",
            "Schedule": null,
            "maxRetry": 0
        },
        "processId": "",
        "atomId": "",
        "id": ""
        }
    ],
    "accountId": "",
    "auth": ""
}`}
                                </code>
                            </pre>
                        </div>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">AccountId:</strong> <code>the AAID of the sub-account to which the integration pack was deployed.</code></li>
                            <li><strong className="mr-1">Auth:</strong> <code>username:password of the service account, base-64 encoded.</code></li>
                            <li><strong className="mr-1">Result:</strong> <code>an array of Schedule objects.</code></li>
                        </ul>
                    </section>
                    <section className="docs-section" id="item-1-19">
                        <h2 className="section-heading">Get Atoms for Account</h2>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">POST:</strong> <code>ws/simple/getAtomsForAccount HTTPS/1.1</code></li>
                            <li><strong className="mr-1">HOST:</strong> <code>connect.boomi.com</code></li>
                        </ul>
                        <h3>HEADERS</h3>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Accept:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Content-Type:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Authorization:</strong> <code>Basic</code></li>
                        </ul>
                        <h3>BODY</h3>
                        <div className="docs-code-block">
                            <pre className="shadow-lg rounded">
                                <code className="json hljs">
{`{
    "id": "",
    "auth": "...",
    "accountId": ""
}`}
                                </code>
                            </pre>
                        </div>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Auth:</strong> <code>username:password of the service account, base-64 encoded.</code></li>
                            <li><strong className="mr-1">AccountId:</strong> <code>the AAID of the account for which to retrieve Atom details.</code></li>
                        </ul>
                    </section>
                    <section className="docs-section" id="item-1-20">
                        <h2 className="section-heading">Get Installer Token</h2>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">POST:</strong> <code>ws/simple/getInstallerToken HTTPS/1.1</code></li>
                            <li><strong className="mr-1">HOST:</strong> <code>connect.boomi.com</code></li>
                        </ul>
                        <h3>HEADERS</h3>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Accept:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Content-Type:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Authorization:</strong> <code>Basic</code></li>
                        </ul>
                        <h3>BODY</h3>
                        <div className="docs-code-block">
                            <pre className="shadow-lg rounded">
                                <code className="json hljs">
{`{
    "auth": "...",
    "accountId": ""
}`}
                                </code>
                            </pre>
                        </div>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Auth:</strong> <code>username:password of the service account, base-64 encoded.</code></li>
                            <li><strong className="mr-1">AccountId:</strong> <code>the AAID of the account for which to retrieve Atom details.</code></li>
                        </ul>
                    </section>
                    <section className="docs-section" id="item-1-21">
                        <h2 className="section-heading">Get Atom Detail</h2>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">POST:</strong> <code>ws/simple/getAtomDetail HTTPS/1.1</code></li>
                            <li><strong className="mr-1">HOST:</strong> <code>connect.boomi.com</code></li>
                        </ul>
                        <h3>HEADERS</h3>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Accept:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Content-Type:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Authorization:</strong> <code>Basic</code></li>
                        </ul>
                        <h3>BODY</h3>
                        <div className="docs-code-block">
                            <pre className="shadow-lg rounded">
                                <code className="json hljs">
{`{
    "id": "",
    "auth": "...",
    "accountId": ""
}`}
                                </code>
                            </pre>
                        </div>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Id:</strong> <code>the ID of the Atom.</code></li>
                            <li><strong className="mr-1">Auth:</strong> <code>username:password of the service account, base-64 encoded.</code></li>
                            <li><strong className="mr-1">AccountId:</strong> <code>the AAID of the account for which to retrieve Atom details.</code></li>
                        </ul>
                    </section>
                    <section className="docs-section" id="item-1-22">
                        <h2 className="section-heading">Upsert Account Profile</h2>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">POST:</strong> <code>ws/simple/upsertAccountProfile HTTPS/1.1</code></li>
                            <li><strong className="mr-1">HOST:</strong> <code>connect.boomi.com</code></li>
                        </ul>
                        <h3>HEADERS</h3>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Accept:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Content-Type:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Authorization:</strong> <code>Basic</code></li>
                        </ul>
                        <h3>BODY</h3>
                        <div className="docs-code-block">
                            <pre className="shadow-lg rounded">
                                <code className="json hljs">
{`{
    "accountId": "",
    "logoUrl": "...",
    "nickname": "",
    "owner": "",
    "serviceAccessToken": "",
    "serviceUserName": "",
    "enableIPackOverrideName": "",
    "createdByUsername": "",
    "active": ""
}`}
                                </code>
                            </pre>
                        </div>
                        <ul className="no-bullets">
                        <li><strong className="mr-1">accountId:</strong> <code>the AAID of the account.</code></li>
                            <li><strong className="mr-1">logoUrl:</strong> <code>URL to the logo image to display.  Leave blank to inherit from the master account.</code></li>
                            <li><strong className="mr-1">nickname:</strong> <code>friendly name of the account.</code></li>
                            <li><strong className="mr-1">owner:</strong> <code>the AAID of the owning account.</code></li>
                            <li><strong className="mr-1">serviceAccessToken:</strong> <code>the password of the service account.  Leave blank to inherit from the owning account.</code></li>
                            <li><strong className="mr-1">serviceUserName:</strong> <code>the username of the service account.  Leave blank to inherit from the owning account.</code></li>
                            <li><strong className="mr-1">enableIPackOverrideName:</strong> <code><strong>true</strong> to enable user to enter a name for a deployed multi-install integration pack.  <strong>false</strong> for the deployed instance to inherit the name from the source integration pack.</code></li>
                            <li><strong className="mr-1">createdByUsername:</strong> <code>the user who is configuring the account.</code></li>
                            <li><strong className="mr-1">active:</strong> <code><strong>true</strong> to make this an active account.  <strong>false</strong> to deactivate the account.</code></li>
                        </ul>
                    </section>
                    <section className="docs-section" id="item-1-23">
                        <h2 className="section-heading">Upsert User Profile</h2>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">POST:</strong> <code>ws/simple/upsertUserProfile HTTPS 1.1</code></li>
                            <li><strong className="mr-1">HOST:</strong> <code>connect.boomi.com</code></li>
                        </ul>
                        <h3>HEADERS</h3>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Accept:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Content-Type:</strong> <code>application/json</code></li>
                            <li><strong className="mr-1">Authorization:</strong> <code>Basic</code></li>
                        </ul>
                        <h3>BODY</h3>
                        <div className="docs-code-block">
                            <pre className="shadow-lg rounded">
                                <code className="json hljs">
{`{
    "name": "",
    "username": "...",
    "accountId": "",
    "accessToken": "",
    "active": "",
    "roleId": ""
}`}
                                </code>
                            </pre>
                        </div>
                        <ul className="no-bullets">
                            <li><strong className="mr-1">Name:</strong> <code>the full name of the user</code></li>
                            <li><strong className="mr-1">Username:</strong> <code>the user's email address</code></li>
                            <li><strong className="mr-1">Account Id:</strong> <code>the current account id</code></li>
                            <li><strong className="mr-1">Access Token:</strong> <code>the user's password (optional)</code></li>
                            <li><strong className="mr-1">Active:</strong> <code>active status of the user</code></li>
                            <li><strong className="mr-1">Role Id:</strong> <code>the role of the user</code></li>
                        </ul>
                    </section>
                </article>
            </div>
        </div>
    </div>
            </React.Fragment>
          );
};
