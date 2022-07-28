import React, { useState, useEffect } from "react";
import "../styles/LandingPage.scss";
import "../styles/LandingSky-Spring.scss";

import logo from "../assets/logo.webp";
import introKcook from "../assets/intro-kcook.svg";
import coupon from "../assets/coupon.webp";
import menuIcon from "../assets/icon-menu.svg";
import searchIcon from "../assets/search.svg";

import axios from 'axios';

import City from "src/components/landing/City";
import Location from "src/components/landing/Locations";
import dDayCount from "./dDayCount";

function LandingPage() {
  // 디데이
  useEffect(()=>{
    getdDay();
    setInterval(getdDay, 1000);
  });

  const [day, setDay] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  // 디데이
  const getdDay = () => {
    const setDate = new Date("2022-09-05T01:00:00+0900");
    const setDateYear = setDate.getFullYear();
    const setDateMonth = setDate.getMonth() + 1;
    const setDateDay = setDate.getDate();
  
    const now = new Date();
    const distance = setDate.getTime() - now.getTime();
  
    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setDay(day); setHours(hours); setMinutes(minutes); setSeconds(seconds);
  };

  const [phoneNumber, setPhone] = useState("");
  const handlePhone = (e: any) => {
    setPhone(e.target.value.replace("-", ""));
    const numRegex = /[^0-9]/
    if (!numRegex.test(e.target.value))
      setPhone(e.target.value.replace("-", ""));
  };

  //지원자 신청 보내기
  const [failModal, setFailModal] = useState(false);
  const [failModalContext, setFailModalContext] = useState("");
  const PostAxios = () => {
    if (cityIndex < 1) {
      setFailModalContext("지역을 선택해주세요.");
      setFailModal(true);
      setTimeout(() => {
        setFailModal(false);
      }, 1000);
      return;
    }
    if (locationIndex < 1) {
      setFailModalContext("시/군을 선택해주세요.");
      setFailModal(true);
      setTimeout(() => {
        setFailModal(false);
      }, 1000);
      return;
    }
    if (phoneNumber == "") {
      setFailModalContext("휴대폰 번호를 입력해주세요.");
      setFailModal(true);
      setTimeout(() => {
        setFailModal(false);
      }, 1000);
      return;
    }
    axios.post(`/app/applicants`,{
      cityIndex: cityIndex,
      locationIndex: locationIndex,
      phoneNumber: phoneNumber,
    })
    .then(res =>{
      document.location.href = "/";
      setFailModalContext("신청이 완료되었습니다!");
      setFailModal(true);
      setTimeout(() => {
        setFailModal(false);
      }, 2000);
    });
  }

  const [city, setCity] = useState([]);
  const [location, setLocation] = useState([]);
  const [cityIndex, setCityIndex] = useState(0);
  const [locationIndex, setLocationIndex] = useState(0);
  const LocationAxios = (i: any) => {
    setCityIndex(i);
    axios.get(`/app/locations/${i}`)
    .then(res =>{
      setLocation(res.data.result);
    });
  }
  
  useEffect(()=>{
    axios.get(`/app/cities`)
    .then(res =>{
      setCity(res.data.result);
    });
    LocationAxios(0);
  },[]);
  
  return (
    <div id="landing" className="landing-page">
      <header className="landing-header">
        <img src={menuIcon} alt="menu" className="menu landing-mobile" />
        <img src={logo} alt="logo" className="logo"/>
        <img src={searchIcon} alt="search" className="search landing-mobile"/>
      </header>

      <div className="intro">
        {/* <div style={{ width: "5px", height: "50px", }}></div> */}
        <div className="kcook-img">
          <img src={introKcook} alt="kcook-logo" className="kcook-logo" />
        </div>
        <p className="intro-span">
          <span>쉽게! 간편하게!</span>
          <br />
          커스텀케이크 주문 플랫폼이 온다.
        </p>
        <div className="end-time" id="end-time">
          {/* {dDayCount} */}
          <div className="end-time-timer">
            <div className="end-time-timer-1">
              {day < 10 ? 
              <>
                <div className="end-time-timer-3">{0}</div>
                <div className="end-time-timer-4">{day%10}</div>
              </>:
              <>
                <div className="end-time-timer-3">{Math.floor(day/10)}</div>
                <div className="end-time-timer-4">{day%10}</div>
              </>}
            </div>
            <div className="end-time-timer-2">일</div>
          </div>
          <div className="end-time-comma">:</div>

          <div className="end-time-timer">
            <div className="end-time-timer-1">
              {day < 10 ? 
              <>
                <div className="end-time-timer-3">{0}</div>
                <div className="end-time-timer-4">{hours%10}</div>
              </>:
              <>
                <div className="end-time-timer-3">{Math.floor(hours/10)}</div>
                <div className="end-time-timer-4">{hours%10}</div>
              </>}
            </div>
            <div className="end-time-timer-2">시간</div>
          </div>
          <div className="end-time-comma">:</div>

          <div className="end-time-timer">
            <div className="end-time-timer-1">
              {day < 10 ? 
              <>
                <div className="end-time-timer-3">{0}</div>
                <div className="end-time-timer-4">{minutes%10}</div>
              </>:
              <>
                <div className="end-time-timer-3">{Math.floor(minutes/10)}</div>
                <div className="end-time-timer-4">{minutes%10}</div>
              </>}
            </div>
            <div className="end-time-timer-2">분</div>
          </div>
          <div className="end-time-comma">:</div>

          <div className="end-time-timer">
            <div className="end-time-timer-1">
              {day < 10 ? 
              <>
                <div className="end-time-timer-3">{0}</div>
                <div className="end-time-timer-4">{seconds%10}</div>
              </>:
              <>
                <div className="end-time-timer-3">{Math.floor(seconds/10)}</div>
                <div className="end-time-timer-4">{seconds%10}</div>
              </>}
            </div>
            <div className="end-time-timer-2">초</div>
          </div>
        </div>
        <div style={{ padding: "21.5px 0px" }}>
          <hr className="end-time-hr"/>
        </div>
        <p className="intro-title">
          <span>케이쿡 Beta 0.1.0</span>
          <br />
          출시 알림 신청 이벤트
        </p>
        <p className="title-desc">출시 알림 신청하고, 랜덤 쿠폰 받자!</p>
        <div className="coupon-img">
          <img src={coupon} className="kcook-coupon" alt="kcook-coupon" />
        </div>
        <span className="intro-footer">
          *이벤트 및 베타 서비스 일정은 내부 사정 등에 의해 변경될 수 있습니다.
        </span>
      </div>
      <div className="center-footer"></div>
      <div className="get-email-flex">
        <div className="get-email">
          <h1 className="get-email-title">출시 알림 신청하기</h1>
          {failModal === true ? (
            <div className="lp-incorrect">
              {failModalContext}
            </div>
            ) :
          null}
          <p className="get-email-form-title">고객 정보(필수)</p>
          <div style={{ display: "flex", }}>
            <form className="get-email-form">
            <dl>휴대폰 번호</dl>
            <div className="input-email">
              {/* <span className="landing-mobile">휴대폰번호</span> */}
              <input
                type="tel"
                onChange={handlePhone}
                value={phoneNumber}
              ></input>
            </div>
            <dl>거주 지역</dl>
            <City
              getData={city}
              LocationAxiosF={LocationAxios}
            />
            <Location
              getData={location}
              setLocationIndexF={setLocationIndex}
            />
          </form>
          <div className="landing-pc" style={{ width: "35px", height: "5px", }}></div>
          </div>
          <p className="get-email-sub">개인정보 제공 및 SMS 수신에 동의합니다.</p>
          <button
            className="get-email-btn"
            onClick={()=>{
              PostAxios();
            }}
          >출시 알림 신청</button>

          <footer className="kcook-info">
            케이쿡 | 대표 정예빈 | 입점 문의 : cakeorder.kcook@gmail.com{" "}<br/>
            서울특별시 동작구 상도로 369 창신관 313호
          </footer>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;