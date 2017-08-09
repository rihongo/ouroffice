/**
 * Created by rihongo on 2017. 8. 1..
 */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
                <div className="footerwrap">
                    <div className="footer">
                        <div className="company_menu">
                            <NavLink to="/about/Key">회사소개</NavLink>
                            |
                            <a href="">
                                이용약관
                            </a>|
                            <a href="">
                                개인정보처리방침
                            </a>|
                            <a href="">
                                제휴안내
                            </a>|
                            <a href="">
                                고객센터
                            </a>
                        </div>
                        <span className="copyright">
                            Copyright © 2017 Ouroffice™. All rights reserved.
                        </span>
                    </div>
                </div>
        );
    }
}

export default Footer;
