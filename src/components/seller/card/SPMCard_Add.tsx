import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import '../../../styles/card/seller/SPMCard_Add.scss';

import { ReactComponent as DragBtn } from '../../assets/seller/dragbtn.svg';
import { ReactComponent as DragCBtn } from '../../../assets/seller/drag-column-btn.svg';

import rightArrow from "../../assets/right-arrow.svg";
import { setTokenSourceMapRange } from 'typescript';

{/* <form className="option-1">
<div className="option-size">크기</div>
<div className="option-input">
    <input type="radio" name="name-1" value="1호" /> 1호
    <input type="number" min="0" className="add-price" placeholder="+0원"/>
</div>
<div className="option-input">
    <input type="radio" name="name-1" value="1호" /> 2호
    <input type="number" min="0" className="add-price" placeholder="+0원"/>
</div>
<button className="option-button">항목 추가</button>
</form> */}

interface Props {
    addOption: any,
    setAddOptionF: any,
}

function SPMCard_Add({ addOption, setAddOptionF, }: Props) {
    const [num, setNum] = useState(0);
    const handleOptionName = (e: any, optionId: any, ) => {
        addOption[optionId-1].optionName = e.target.value;
        setNum(num+1);
        setAddOptionF(addOption);
    };
    const handleOptionListName = (e: any, optionId: any, optionListId: any, ) => {
        addOption[optionId-1].optionList[optionListId-1].optionListName = e.target.value;
        setNum(num+1);
        setAddOptionF(addOption);
    };
    const handleOptionListPrice = (e: any, optionId: any, optionListId: any, ) => {
        var evalue = e.target.value;
        if (evalue === "NaN") evalue = "0";
        addOption[optionId-1].optionList[optionListId-1].optionListPrice = parseInt(evalue);
        setNum(num+1);
        setAddOptionF(addOption);
    };

    useEffect(()=>{
    },[]);
    
    // {
    //     additionalCost: 0,
    //     category: "SIZE",
    //     contents: "1호",
    //     title: "크기"
    // },
    return (
        <div className="spmcard-update">
        {addOption.map((option: { optionId: any, optionName: any, optionList: any, optionDirect: any, optionDirectText: any, })=>{
        return (
            <form id={"spmcard-update-"+option.optionId}>
                <div className="spmcard-option-update">
                    <input
                        className="spm-add-title spm-add-subtitle"
                        placeholder={"옵션"+option.optionId+" 이름"}
                        value={option.optionName}
                        onChange={(e)=> {handleOptionName(e, option.optionId)}}
                    />
                    <div
                        id={"spm-none-"+option.optionId}
                        className="spm-add-right"
                        onClick={()=>{
                            for (var i = option.optionId-1; i < addOption.length-1; i++) {
                                addOption[i] = addOption[i+1];
                                addOption[i].optionId = i+1;
                            }
                            addOption.pop();
                            setNum(num+1);
                            setAddOptionF(addOption);
                        }}>x
                    </div>
                </div>
                <>
                {option.optionList.map((optionList: { optionListId: any, optionListName: any, optionListPrice: any, }, )=>{
                return (
                    <div className="spmcard-update-input">
                        <div
                            id={option.optionDirect&&option.optionList.length==optionList.optionListId? "spm-none-1": ""}
                            className="spmcard-update-input-left">
                            <DragCBtn className="spmcard-update-input-left-icon"/>
                        </div>
                        <div style={{ width: "100%", }}>
                            <input
                                className="spmcard-update-input-text"
                                type="text"
                                name={"name"+optionList.optionListId}
                                placeholder={option.optionDirect&&option.optionList.length==optionList.optionListId? "직접 입력" : "품목"+optionList.optionListId+" 입력"}
                                value={option.optionDirect&&option.optionList.length==optionList.optionListId? option.optionDirectText : optionList.optionListName}
                                onChange={(e)=>{
                                    if (option.optionDirect&&option.optionList.length==optionList.optionListId)
                                        addOption[option.optionId-1].optionDirectText = e.target.value;
                                    else handleOptionListName(e, option.optionId, optionList.optionListId)
                                    setNum(num+1);
                                    setAddOptionF(addOption);
                                }}
                            />
                        </div>
                        <input
                            className="spmcard-update-input-price"
                            type="text"
                            min="0"
                            placeholder="0원"
                            value={optionList.optionListPrice+"원"}
                            onChange={(e)=>{handleOptionListPrice(e, option.optionId, optionList.optionListId)}}
                        />
                        <div
                            id={"spm-none-"+optionList.optionListId}
                            className="spmcard-update-input-right"
                            onClick={()=>{
                                for (var i = optionList.optionListId-1; i < option.optionList.length-1; i++) {
                                    addOption[option.optionId-1].optionList[i] = addOption[option.optionId-1].optionList[i+1];
                                    addOption[option.optionId-1].optionList[i].optionListId = i+1;
                                }
                                addOption[option.optionId-1].optionList.pop();
                                if (!(option.optionDirect&&option.optionList.length==optionList.optionListId))
                                    addOption[option.optionId-1].optionDirect = false;
                                setNum(num+1);
                                setAddOptionF(addOption);
                            }}>x
                        </div>
                    </div>
                )
                })
                }
                <div className="spmcard-update-input-button">
                    <div
                        onClick={()=>{
                            addOption[option.optionId-1].optionList[option.optionList.length] = {
                                optionListId: option.optionList.length+1,
                                optionListName: "",
                                optionListPrice: 0,
                            };
                            setNum(num+1);
                            setAddOptionF(addOption);
                        }}>+&nbsp;품목 추가
                    </div>
                    {option.optionDirect? null:
                    <>
                        <div style={{ color: "#000", }}>&nbsp;또는&nbsp;</div>
                        <div
                            style={{ color: "#ea5450", }}
                            onClick={()=>{
                                addOption[option.optionId-1].optionList[option.optionList.length] = {
                                    optionListId: option.optionList.length+1,
                                    optionListName: "",
                                    optionListPrice: 0,
                                };
                                addOption[option.optionId-1].optionDirect = true;
                                setNum(num+1);
                                setAddOptionF(addOption);
                            }}>'직접 입력' 추가
                        </div>
                    </>
                    }
                </div>
                </>
            </form>
        )
        })
        }
        <hr className="spmcard-update-hr"/>
        <button
            className="spmcard-update-button"
            onClick={()=>{
                addOption[addOption.length] = {
                    optionId: addOption.length+1,
                    optionName: "",
                    optionList: [
                        {
                            optionListId: 1,
                            optionListName: "",
                            optionListPrice: 0,
                        },
                    ],
                    optionDirect: false,
                    optionDirectText: "",
                };
                setNum(num+1);
                setAddOptionF(addOption);
            }}>
            + 옵션 추가
        </button>
        </div>
    );
}

export default SPMCard_Add;