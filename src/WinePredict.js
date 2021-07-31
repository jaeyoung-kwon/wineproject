import React, { Component, useState } from 'react';

const WinePredict = () => {
  const [checkedInputs, setCheckedInputs] = useState([]);

  const changeHandler = (checked, id) => {
    if (checked) {
      setCheckedInputs([...checkedInputs, id]);
      console.log('체크 반영 완료');
      console.log(checkedInputs);
    } else {
      setCheckedInputs(checkedInputs.filter(el => el !== id));
      console.log('체크 해제 반영 완료');
      console.log(checkedInputs);
    }
  };

  const isAllChecked = checkedInputs.length === 2;
  const disabled = !isAllChecked;
  return (
    <article>
      <form action="/predict" method="post"
        onSubmit={function(e){
          e.preventDefault();
          this.props.onSubmit(
            e.target.title.value,
            e.target.desc.value
          )
        }.bind(this)}
      >
        <header >
          <h1 className="flex items-center justify-center font-medium">와인 추천</h1>
          <h2 className="flex items-center justify-center font-medium">세가지의 설문을 통해서 고객님에 맞는 와인을 추천해 드립니다.</h2>
        </header>
          <h3 className="flex items-center justify-center font-medium py-5">와인을 드시는 시간은 언제인가요?</h3>
        <firstarticle className="flex items-center justify-center">
          <input
            type="checkbox"
            id="check1"
            onChange={e => {
              changeHandler(e.currentTarget.checked, 'check1');
            }}
            checked={checkedInputs.includes('check1') ? true : false}
          ></input>
          <h4>아침</h4>
          <input
            type="checkbox"
            id="check2"
            onChange={e => {
              changeHandler(e.currentTarget.checked, 'check2');
            }}
            checked={checkedInputs.includes('check2') ? true : false}
          ></input>
          <h4>점심</h4>
          <input
            type="checkbox"
            id="check3"
            onChange={e => {
              changeHandler(e.currentTarget.checked, 'check3');
            }}
            checked={checkedInputs.includes('check3') ? true : false}
          ></input>
          <h4>저녁</h4>
        </firstarticle>
          <h3 className="flex items-center justify-center font-medium py-5">누구와 함께 드시나요?</h3>
        <secondarticle className="flex items-center justify-center">
          <input
            type="checkbox"
            id="check4"
            onChange={e => {
              changeHandler(e.currentTarget.checked, 'check4');
            }}
            checked={checkedInputs.includes('check4') ? true : false}
          ></input>
          <h4>나홀로</h4>
          <input
            type="checkbox"
            id="check5"
            onChange={e => {
              changeHandler(e.currentTarget.checked, 'check5');
            }}
            checked={checkedInputs.includes('check5') ? true : false}
          ></input>
          <h4>연인과</h4>
          <input
            type="checkbox"
            id="check6"
            onChange={e => {
              changeHandler(e.currentTarget.checked, 'check6');
            }}
            checked={checkedInputs.includes('check6') ? true : false}
          ></input>
          <h4>친구와</h4>
          <input
            type="checkbox"
            id="check7"
            onChange={e => {
              changeHandler(e.currentTarget.checked, 'check7');
            }}
            checked={checkedInputs.includes('check7') ? true : false}
          ></input>
          <h4>가족과</h4>
        </secondarticle>
          <h3 className="flex items-center justify-center font-medium py-5">와인을 어떨때 드시나요?</h3>
        <thirdarticle className="flex items-center justify-center">
          <input
            type="checkbox"
            id="check8"
            onChange={e => {
              changeHandler(e.currentTarget.checked, 'check8');
            }}
            checked={checkedInputs.includes('check8') ? true : false}
          ></input>
          <h4>행복할 때</h4>
          <input
            type="checkbox"
            id="check9"
            onChange={e => {
              changeHandler(e.currentTarget.checked, 'check9');
            }}
            checked={checkedInputs.includes('check9') ? true : false}
          ></input>
          <h4>점심</h4>
          <input
            type="checkbox"
            id="check10"
            onChange={e => {
              changeHandler(e.currentTarget.checked, 'check10');
            }}
            checked={checkedInputs.includes('check10') ? true : false}
          ></input>
          <h4>저녁</h4>
        </thirdarticle>
        <lastarticle className="flex items-center justify-center py-4">
          <input type="submit" ></input>
        </lastarticle>
      </form>
    </article>
  )
}

// class WinePredict extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       check:{}
//     }
//   }
//   render() {
//     return(
//       <article>
//         <form action="/predict" method="post"
//           onSubmit={function(e){
//             e.preventDefault();
//             this.props.onSubmit(
//               e.target.title.value,
//               e.target.desc.value
//             )
//           }.bind(this)}
//         >
//           <h1>와인 추천</h1>
//           <h2>세가지의 설문을 통해서 고객님에 맞는 와인을 추천해 드립니다.</h2>
//           <h3>와인을 드시는 시간은 언제인가요?</h3>
//           <firstarticle>
//             <input type="checkbox" />
//             <h4>아침</h4>
//             <input key="" type="checkbox" />
//             <h4>점심</h4>
//             <input key="" type="checkbox" />
//             <h4>저녁</h4>
//           </firstarticle>
//           <secondarticle>
//             <h3>누구와 함께 드시나요?</h3>
//             <input key="" type="checkbox" />
//             <h4>나홀로</h4>
//             <input key="" type="checkbox" />
//             <h4>연인과</h4>
//             <input key="" type="checkbox" />
//             <h4>친구와</h4>
//             <input key="" type="checkbox" />
//             <h4>가족과</h4>
//           </secondarticle>
//           <thirdarticle>
//             <h3>와인을 어떨때 드시나요?</h3>
//             <input key="" type="checkbox" />
//             <h4>행복할 때</h4>
//             <input key="" type="checkbox" />
//             <h4>점심</h4>
//             <input key="" type="checkbox" />
//             <h4>저녁</h4>
//           </thirdarticle>
//           <input type="submit"></input>
//         </form>
//       </article>
//     );
//   }
// }

export default WinePredict;