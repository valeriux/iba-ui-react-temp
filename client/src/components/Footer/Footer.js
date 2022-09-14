import React from 'react';
// import Logo from '../Logo/Logo';

const Footer = () => (
  <footer className="govuk-footer " role="contentinfo">
    <div className="govuk-width-container ">
      <div className="govuk-footer__meta">
        <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">
          {/* <Logo file="govuk-footer-license-logo" /> */}
          <span className="govuk-footer__licence-description">
            &nbsp; &nbsp; All content is available under the &nbsp;
            <a className="govuk-footer__link" href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">
              Open Government Licence v3.0
            </a>
            , except where otherwise stated
          </span>
        </div>
        <div className="govuk-footer__meta-item">
          <a
            className="govuk-footer__link govuk-footer__copyright-logo"
            href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/"
          >
            © Crown copyright
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
