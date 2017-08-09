import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './common.css';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="headerwrap">
                <h1 className="serlogo">아워오피스</h1>
                    <div className="search">
                        <a href="" className="go_search">
                        </a>
                    </div>
                    <span className="text_srch">
                        <input type="text" placeholder="검색어를 입력하세요"></input>
                        <a href="" className="find_btn">검색</a>
                    </span>
                    <div className="mymenu">
                        <NavLink to="/Teams"  className="myteam" activeClassName="myteam"><span className="blind">팀</span></NavLink>
                        <NavLink exact to="/" className="myhome" activeClassName="myhome"><span className="blind">홈</span></NavLink>
                        <a href="" className="plusmenu"><span className="blind">더보기</span></a>
                        <ul className="submenu">
                            <li><a href="">개인정보 수정</a></li>
                            <li><a href="">문의사항</a></li>
                            <li><a href="">QnA</a></li>
                            <li><a href="">로그아웃</a></li>
                        </ul>
                    </div>
            </div>

        );
    }
}

export default Header;
