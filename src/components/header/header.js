import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './header.scss';
import { withTranslation} from 'react-i18next';
import i18n from "i18next";
import logo from '../../assets/logo.svg';

class Header extends Component {
  render() {
    const { t } = this.props;
    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    return (
      <nav className="navbar flex items-center justify-between flex-wrap bg-teal-500 p-6 shadow">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src={logo} className="fill-current w-12 mr-2" alt="Logo Xcaret" />
          <span className="font-semibold text-xl tracking-tight">{t('title')}</span>
        </div>
        <div className="block flex">
          <button
            onClick={() => changeLanguage('en')}
            type="button"
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white mx-2">
            <svg className="w-6" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 viewBox="0 0 512 512">
                <circle className="navbar__icon usa usa--color-white"  cx="256" cy="256" r="256"/>
                <g>
                  <path className="navbar__icon usa usa--color-red" d="M244.87,256H512c0-23.106-3.08-45.49-8.819-66.783H244.87V256z"/>
                  <path className="navbar__icon usa usa--color-red" d="M244.87,122.435h229.556c-15.671-25.572-35.708-48.175-59.07-66.783H244.87V122.435z"/>
                  <path className="navbar__icon usa usa--color-red" d="M256,512c60.249,0,115.626-20.824,159.356-55.652H96.644C140.374,491.176,195.751,512,256,512z"/>
                  <path className="navbar__icon usa usa--color-red" d="M37.574,389.565h436.852c12.581-20.529,22.338-42.969,28.755-66.783H8.819 C15.236,346.596,24.993,369.036,37.574,389.565z"/>
                </g>
                  <path className="navbar__icon usa usa--color-blue" d="M118.584,39.978h23.329l-21.7,15.765l8.289,25.509l-21.699-15.765L85.104,81.252l7.16-22.037
                  C73.158,75.13,56.412,93.776,42.612,114.552h7.475l-13.813,10.035c-2.152,3.59-4.216,7.237-6.194,10.938l6.596,20.301l-12.306-8.941
                  c-3.059,6.481-5.857,13.108-8.372,19.873l7.267,22.368h26.822l-21.7,15.765l8.289,25.509l-21.699-15.765l-12.998,9.444
                  C0.678,234.537,0,245.189,0,256h256c0-141.384,0-158.052,0-256C205.428,0,158.285,14.67,118.584,39.978z M128.502,230.4
                  l-21.699-15.765L85.104,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822l-21.7,15.765L128.502,230.4z
                   M120.213,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822
                  L120.213,130.317z M220.328,230.4l-21.699-15.765L176.93,230.4l8.289-25.509l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822
                  l-21.7,15.765L220.328,230.4z M212.039,130.317l8.289,25.509l-21.699-15.765l-21.699,15.765l8.289-25.509l-21.7-15.765h26.822
                  l8.288-25.509l8.288,25.509h26.822L212.039,130.317z M212.039,55.743l8.289,25.509l-21.699-15.765L176.93,81.252l8.289-25.509
                  l-21.7-15.765h26.822l8.288-25.509l8.288,25.509h26.822L212.039,55.743z"/>
                </svg>
          </button>
          <button
            type="button"
            onClick={() => changeLanguage('es')}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white mx-2">
            <svg className="w-6" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
              <circle className="navbar__icon mex mex--color-white" cx="256" cy="256" r="256"/>
                <path className="navbar__icon mex mex--color-red" d="M512,256c0-101.494-59.065-189.19-144.696-230.598v461.195C452.935,445.19,512,357.494,512,256z"/>
                <g>
                  <path className="navbar__icon mex mex--color-green" d="M0,256c0,101.494,59.065,189.19,144.696,230.598V25.402C59.065,66.81,0,154.506,0,256z"/>
                  <path className="navbar__icon mex mex--color-green" d="M189.217,256c0,36.883,29.9,66.783,66.783,66.783s66.783-29.9,66.783-66.783v-22.261H189.217V256z"
                  />
                </g>
                <path className="navbar__icon mex mex--color-orange" d="M345.043,211.478h-66.783c0-12.294-9.967-22.261-22.261-22.261s-22.261,9.967-22.261,22.261h-66.783
                c0,12.295,10.709,22.261,23.002,22.261h-0.741c0,12.295,9.966,22.261,22.261,22.261c0,12.295,9.966,22.261,22.261,22.261h44.522
                c12.295,0,22.261-9.966,22.261-22.261c12.295,0,22.261-9.966,22.261-22.261h-0.742C334.335,233.739,345.043,223.773,345.043,211.478
                z"/>
              </svg>
          </button>
        </div>
      </nav>
    );
  }
}
Header.propTypes = {
  t: PropTypes.func.isRequired
};
export default withTranslation()(Header);
