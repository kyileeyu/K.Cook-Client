import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../../../styles/header/HMMobile.scss';

import $ from 'jquery';

import isSession from '../../../utils/isSession';
import LinkClick from '../../../utils/LinkClick';
import sellerLinkClick from 'src/utils/sellerLinkClick';
import mypageLinkClick from 'src/utils/mypageLinkClick';

function HMCard({ setNumLeftMobileF }) {
    //로그인 여부
    const [session, setSession] = useState(false);
    const [auth, setAuth] = useState({
        accountId: 0,
        address: "",
        dateOfBirth: "",
        email: "",
        nickname: "",
        phoneNumber: "",
        signInId: "",
    });

    useEffect(()=> {
        //pathname, parameter 가져오기
        var pathname = window.location.pathname;
        if (pathname == "/") pathname = "/Home";
        pathname = pathname.split("/")[1];
        LinkClick(pathname);
        isSession(
            (s)=>{
            if (s) setSession(s);
            },
            (a)=>{
            setAuth(a);
            },
        );
        $(".header-flex").on('scroll touchmove mousewheel', (e) => {
            e.preventDefault();
            e.stopPropagation();
            });
        $(".hm-mobile-title").on('scroll touchmove mousewheel', (e) => {
            e.preventDefault();
            e.stopPropagation();
            });
        $(".hm-mobile-background").on('scroll touchmove mousewheel', (e) => {
            e.preventDefault();
            e.stopPropagation();
        });
    }, []);
    return (
        <>
            <div className="hm-mobile-left">
                <div className="hm-mobile-title">케이쿡</div>
                <hr/>
                <div className="hm-mobile-link-flex">
                    {session ? 
                        <div className="hm-mobile-link">
                            <Link
                                to="/"
                                className="header-link Logout"
                                onClick={() => {
                                    sessionStorage.removeItem("jwToken")
                                    sessionStorage.removeItem("session")
                                    if (sessionStorage.session === undefined) document.location.href = "/";
                                }}
                            >
                                로그아웃
                            </Link>
                        </div>:
                        <>
                            <div className="hm-mobile-link">
                                <Link
                                    to="/SignUp"
                                    className="header-link SignUp"
                                    onClick={()=>{
                                        setNumLeftMobileF(1);
                                        LinkClick("SignUp");
                                        $(".hm-mobile").hide();
                                    }}
                                >
                                    회원가입
                                </Link>
                            </div>
                            <div className="hm-mobile-link">
                                <Link
                                    to="/Login"
                                    className="header-link Login"
                                    onClick={()=>{
                                        setNumLeftMobileF(1);
                                        LinkClick("Login");
                                        $(".hm-mobile").hide();
                                    }}
                                >
                                    로그인
                                </Link>
                            </div>
                        </>
                    }
                    <div className="hm-mobile-link">
                        <Link
                            to="/"
                            className="header-link Home"
                            onClick={()=>{
                                setNumLeftMobileF(1);
                                LinkClick("Home");
                                $(".hm-mobile").hide();
                            }}
                        >
                            홈
                        </Link>
                    </div>
                    <div className="hm-mobile-link">
                        <Link
                            to="/TodaysRec"
                            className="header-link TodaysRec"
                            onClick={()=>{
                                setNumLeftMobileF(1);
                                LinkClick("TodaysRec");
                                $(".hm-mobile").hide();
                            }}
                        >
                            오늘의 추천
                        </Link>
                    </div>
                    <div className="hm-mobile-link">
                        <Link
                            to="/Cake"
                            className="header-link Cake"
                            onClick={()=>{
                                setNumLeftMobileF(1);
                                LinkClick("Cake");
                                $(".hm-mobile").hide();
                            }}
                        >
                            케이크
                        </Link>
                    </div>
                    <div className="hm-mobile-link">
                        <Link
                            to="/Store"
                            className="header-link Store"
                            onClick={()=>{
                                setNumLeftMobileF(1);
                                LinkClick("Store");
                                $(".hm-mobile").hide();
                            }}
                        >
                            추가 상품
                        </Link>
                    </div>
                    <div className="hm-mobile-link">
                        <Link
                            to="/CS"
                            className="header-link CS"
                            onClick={()=>{
                                setNumLeftMobileF(1);
                                LinkClick("CS");
                                $(".hm-mobile").hide();
                            }}
                        >
                            고객지원
                        </Link>
                    </div>
                    {session ? 
                        <>
                        <div className="hm-mobile-link">
                            <Link
                                to="/SellerOrder"
                                className="header-link SellerOrder"
                                onClick={()=>{
                                    setNumLeftMobileF(2);
                                    LinkClick("SellerOrder");
                                    sellerLinkClick("SellerOrder");
                                    $(".hm-mobile").hide();
                                }}
                            >
                                판매자로 전환
                            </Link>
                        </div>
                        <div className="hm-mobile-link">
                            <Link
                                to="/MypageOrder"
                                className="header-link MypageOrder"
                                onClick={()=>{
                                    setNumLeftMobileF(3);
                                    LinkClick("MypageOrder");
                                    mypageLinkClick("MypageOrder");
                                    $(".hm-mobile").hide();
                                }}
                            >
                                마이페이지
                            </Link>
                        </div>
                        </>
                        : <></>
                    }
                </div>
            </div>
        </>
    );
}

export default HMCard;