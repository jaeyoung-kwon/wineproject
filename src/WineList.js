import React, { Component } from 'react';


class WineList extends Component {
  render() {
    // const readExcel=()=>{
    //   const file = readXlsxFile('./wine.xlsx');
    //   console.log(file);
    //   const promise = new Promise((resolve, reject)=>{
    //       const fileReader = new FileReader();
    //       fileReader.readAsArrayBuffer(file)
    //       fileReader.onload=(e)=>{
    //         const bufferArray = e.target.result;
    //         const wb = XLSX.read(bufferArray, {type:'buffer'});
    //         const wsname = wb.SheetNames[0];
    //         const ws = wb.Sheets[wsname];
    //         const data = XLSX.utils.sheet_to_json(ws);
    //         resolve(data);
    //       };
    //       fileReader.onerror=(error)=>{
    //         reject(error);
    //       };
    //   });
    //   promise.then((d)=>{
    //     console.log(d)
    //   });
    // }
    return(
      <div>
        {/* {readExcel()} */}
      </div>
    );
  }
}

export default WineList;