import React, { Component } from 'react';
import './Buttons.css';
import HorizontalScroll from './HorizontalScroll';

class Buttons extends Component {
  render() {
    return(
      <fullscreen>
        <article className="Buttonssss">
          <HorizontalScroll></HorizontalScroll>
          <but className="Buttonsss">
            <h2><a href="/list" className="Buttonss"  onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode('list');
              }.bind(this)}>모든 와인 종류 보기</a></h2>
            <h2><a href="/predict" className="Buttonss"  onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode('predict');
            }.bind(this)}>와인 추천 페이지</a></h2>
          </but>
        </article>
        <footer class="py-4 bg-dark">
          <div class="container">
            <p class="m-0 text-center text-white">Copyright &copy; Your Website 2021</p>
          </div>
        </footer>
      </fullscreen>
    );
  }
}

// const readXlsxFile = require('read-excel-file/node')

// // File path.
// readXlsxFile('D:\Users\PC\Desktop\Project\my-project\src\wine.xlsx').then((rows) => {
//   // `rows` is an array of rows
//   // each row being an array of cells.
//   console.log(rows)
// })

// // Readable Stream.
// readXlsxFile(fs.createReadStream('./wine.xlsx')).then((rows) => {
//   console.log(rows)
// })

export default Buttons;