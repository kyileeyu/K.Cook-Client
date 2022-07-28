import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

import cake6 from   '../../assets/cake6.png';
import SPM_SSR_MobileCard from '../card/mobile/SPM_SSR_MobileCard';

function SellerReviewMobile (){
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get(`/app/cakes`)
            .then(res =>{
                setData(res.data.result.content);
            });
    },[]);
    return(
        <div className="mypage-mobile ssrm">
            <div className="ssrm-box mprm-box">
                <div className="title">
                    <div className="ssom-front-title">상품후기</div>
                    <div className="ssom-middle-title">고객분들이 남겨주신 후기입니다.</div>
                </div>
                <div style={{ width: "5px", height: "25px", }}></div>
                <div className="content">
                    <SPM_SSR_MobileCard getData={data} box={false}/>
                </div>
            </div>
        </div>
    )
}


export default SellerReviewMobile;