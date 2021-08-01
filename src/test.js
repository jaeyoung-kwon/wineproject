import React, { Component, useState } from 'react';

const Test = () => {
  const [checkedInputs, setCheckedInputs] = useState([]);

    // if (checked) {
    //   setCheckedInputs([...checkedInputs, id]);
    //   console.log('체크 반영 완료');
    //   console.log(checkedInputs);
    // } else {
    //   setCheckedInputs(checkedInputs.filter(el => el !== id));
    //   console.log('체크 해제 반영 완료');
    //   console.log(checkedInputs);
    // }
  const changeCheck = (id) => {
    var obj1 = document.getElementsByName("checktime");
    var obj2 = document.getElementsByName("checkperson");
    var obj3 = document.getElementsByName("checkwhen");
    if(id < 4) {
      for(var i = 0; i < obj1.length; i++) {
        if(obj1[i].id !== id && obj1[i].checked) {
          obj1[i].checked = false;
          console.log(obj1[i].id);
        }
      }
    } else if(id > 3 && id < 8) {
      for(var i = 0; i < obj2.length; i++) {
        if(obj2[i].id !== id && obj2[i].checked) {
          obj2[i].checked = false;
          console.log(obj2[i].id);
        }
      }
    } else if(id > 7) {
      for(var i = 0; i < obj3.length; i++) {
        if(obj3[i].id !== id && obj3[i].checked) {
          obj3[i].checked = false;
          console.log(obj3[i].id);
        }
      }
    }
  }
  return(
    <article>
      <form action="/predict" method="post"
        onSubmit={function(e){
          e.preventDefault();
        }.bind(this)}
      >
        <header>
          <h1 className="flex items-center justify-center font-medium">와인 추천</h1>
          <h2 className="flex items-center justify-center font-medium">세가지의 설문을 통해서 고객님에 맞는 와인을 추천해 드립니다.</h2>
        </header>
          <h3 className="flex items-center justify-center font-medium py-5">와인을 드시는 시간은 언제인가요?</h3>
        <firstarticle className="flex items-center justify-center">
          <input
            name="checktime"
            type="checkbox"
            id="1"
            onClick={()=>{changeCheck('1')}}
          ></input>
          <h4>아침</h4>
          <input
            name="checktime"
            type="checkbox"
            id="2"
            onClick={()=>{changeCheck('2')}}
          ></input>
          <h4>점심</h4>
          <input
            name="checktime"
            type="checkbox"
            id="3"
            onClick={()=>{changeCheck('3')}}
          ></input>
          <h4>저녁</h4>
        </firstarticle>
          <h3 className="flex items-center justify-center font-medium py-5">누구와 함께 드시나요?</h3>
        <secondarticle className="flex items-center justify-center">
          <input
            name="checkperson"
            type="checkbox"
            id="4"
            onClick={()=>{changeCheck('4')}}
          ></input>
          <h4>나홀로</h4>
          <input
            name="checkperson"
            type="checkbox"
            id="5"
            onClick={()=>{changeCheck('5')}}
          ></input>
          <h4>연인과</h4>
          <input
            name="checkperson"
            type="checkbox"
            id="6"
            onClick={()=>{changeCheck('6')}}
          ></input>
          <h4>친구와</h4>
          <input
            name="checkperson"
            type="checkbox"
            id="7"
            onClick={()=>{changeCheck('7')}}
          ></input>
          <h4>가족과</h4>
        </secondarticle>
          <h3 className="flex items-center justify-center font-medium py-5">와인을 어떨때 드시나요?</h3>
        <thirdarticle className="flex items-center justify-center">
          <input
            name="checkwhen"
            type="checkbox"
            id="8"
            onClick={()=>{changeCheck('8')}}
          ></input>
          <h4>행복할 때</h4>
          <input
            name="checkwhen"
            type="checkbox"
            id="9"
            onClick={()=>{changeCheck('9')}}
          ></input>
          <h4>점심</h4>
          <input
            name="checkwhen"
            type="checkbox"
            id="10"
            onClick={()=>{changeCheck('10')}}
          ></input>
          <h4>저녁</h4>
        </thirdarticle>
        <lastarticle className="flex items-center justify-center py-4">
          <input type="submit" ></input>
        </lastarticle>
      </form>
    </article>
  );
}

export default Test