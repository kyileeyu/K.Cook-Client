import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/seller/SSO_SSH.scss';

import cake6 from   '../../assets/cake6.png';
import SellerOrderPC from 'src/components/seller/pc/SellerOrderPC';
import SellerOrderMobile from 'src/components/seller/mobile/SellerOrderMobile';
import getAxios from 'src/utils/getAxios';

function SellerOrder (){
    const [data, setData] = useState([
        {
            date: "2022-07-06",
            isCake: true,
            name: "플라워케이크 - 리스형",
            price: 0,
            productId: 1,
            raiting: ".00",
            resultPrice: 0,
            reviewCount: 0,
            salePrice: 0,
            status: "VALID",
            storeName: "유니아케이크",
            thumbnail: "",
        },
        {
            date: "2022-08-01",
            isCake: true,
            name: "플라워케이크 - 리스형",
            price: 0,
            productId: 2,
            raiting: ".00",
            resultPrice: 0,
            reviewCount: 0,
            salePrice: 0,
            status: "VALID",
            storeName: "유니아케이크",
            thumbnail: "",
        },
        {
            date: "2022-08-01",
            isCake: true,
            name: "플라워케이크 - 리스형",
            price: 0,
            productId: 3,
            raiting: ".00",
            resultPrice: 0,
            reviewCount: 0,
            salePrice: 0,
            status: "VALID",
            storeName: "유니아케이크",
            thumbnail: "",
        },
        {
            date: "2022-08-04",
            isCake: true,
            name: "플라워케이크 - 리스형",
            price: 0,
            productId: 4,
            raiting: ".00",
            resultPrice: 0,
            reviewCount: 0,
            salePrice: 0,
            status: "VALID",
            storeName: "유니아케이크",
            thumbnail: "",
        },
    ]);
    // const [data, setData] = useState([]);
    // const [dataLength, setDataLength] = useState([]);

    useEffect(()=>{
    //     getAxios(setData, setDataLength, "cakes", [], 4, 0, 0);
    },[]);

    return(
        <>
            <SellerOrderPC getData={data}/>
            <SellerOrderMobile getData={data}/>
        </>
    )
}

export default SellerOrder;