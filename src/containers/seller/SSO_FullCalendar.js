import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from 'jquery';

const SSO_FullCalendar = (fn, list) => {
    //달력 판매자 정보 list
    if (list[0].title === 0 && list[0].titleToday === 0)
        list[0].borderColor = "rgba(255, 255, 255, 0.0)";
    list[0].title = "당일: " + list[0].todayTitle + "\n주문: " + list[0].title + "/" + list[0].describe;
    
    for(var i = 1; i < list.length; i++) {
        // e[i].id = i+1;
        if (list[i].title === 0)
            list[i].borderColor = "rgba(255, 255, 255, 0.0)";
        else
            list[i].borderColor = "white";
        list[i].title = "주문: " + list[i].title + "/" + list[i].describe
    }

    // if (TF) fn(em);
    // else fn(e);
    fn(list);
}

export default SSO_FullCalendar;