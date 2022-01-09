import React from "react";
import "../styles/SignUp.scss";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

function SignUp() {
  return (
    <div className="login">
      <div className="login-section">
        <img src={logo} className="logo" />
        <h1 className="login-title">나만의 케이크 주문, 케이쿡</h1>
        <p className="login-list">닉네임</p>
        <input
          className="input-id login-input"
          type="text"
          placeholder="3~20자 입력 / 한글, 영어, 숫자만 가능"
        ></input>
        <p className="confirm-text">중복된 이름(닉네임)입니다.</p>
        <p className="login-list">휴대폰 번호(숫자만)</p>
        <div className="login-input phone-confirm">
          <input
            className="input-num"
            type="number"
            placeholder="번호 입력"
          ></input>
          <button className="input-btn">인증문자 발송</button>
        </div>
        <div className="login-input phone-confirm">
          <input
            className="input-num"
            type="number"
            placeholder="인증번호 입력"
          ></input>
          <button className="input-btn">확인하기</button>
        </div>

        <p className="confirm-text">인증번호가 일치하지 않습니다.</p>

        <p className="login-list">아이디</p>
        <input
          className="input-id login-input"
          type="text"
          placeholder="3~20자 입력 / 영어, 숫자만 가능"
        ></input>
        <p className="confirm-text">중복된 아이디입니다.</p>

        <p className="login-list">비밀번호</p>
        <input
          className="input-id login-input"
          type="password"
          placeholder="8자 이상 입력"
        ></input>
        <input
          className="input-id login-input"
          type="password"
          placeholder="비밀번호 재입력"
        ></input>
        <p className="confirm-text">비밀번호가 일치하지 않습니다.</p>

        <p className="login-list">주소</p>
        <input
          className="input-id login-input"
          type="text"
          placeholder="지번, 도로명, 건물명으로 검색"
        ></input>

        <div className="agreement">
          <input type="checkbox" id="AgreeAll"></input>
          <label for="AgreeAll">전체동의</label>
        </div>
        <div className="agreement-sub">
          <div className="agree-list">
            <div className="check-agreement">
              <input type="checkbox" id="autoLogin"></input>
              <label for="cb1">서비스 이용약관 동의 (필수)</label>
            </div>
            <button type="button">보기</button>
          </div>
          <div className="agree-list">
            <div className="check-agreement">
              <input type="checkbox" id="autoLogin"></input>
              <label for="cb1">개인정보 수집 및 이용 동의 (필수)</label>
            </div>
            <button type="button">보기</button>
          </div>
          <div className="agree-list">
            <div className="check-agreement">
              <input type="checkbox" id="autoLogin"></input>
              <label for="cb1">만 14세 이상입니다 (필수)</label>
            </div>
          </div>
          <div className="agree-list">
            <div className="check-agreement">
              <input type="checkbox" id="autoLogin"></input>
              <label for="cb1">광고성 정보 수신 동의 (선택)</label>
            </div>
            <button type="button">보기</button>
          </div>
        </div>
        <div className="login-btn">가입하기</div>
      </div>
    </div>
  );
}

export default SignUp;