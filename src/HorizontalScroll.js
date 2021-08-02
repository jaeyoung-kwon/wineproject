import React, { Component } from "react";
import PropTypes from "prop-types";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./Horizontal.css";

let list = [
  { id: 168945, name: "사티스 데이 틴토", link: "https://wine21.speedgabia.com/WINE_MST/TITLE/0168000/W0168945.png" },
  { id: 168942, name: "드 샹세니_소뮈르 브뤼", link: "https://wine21.speedgabia.com/WINE_MST/TITLE/0168000/W0168942.png" },
  { id: 168939, name: "에스탕동 제니스", link: "https://wine21.speedgabia.com/WINE_MST/TITLE/0168000/W0168939.png" },
  { id: 168933, name: "로르나노_키안티 클라시코", link: "https://wine21.speedgabia.com/WINE_MST/TITLE/0168000/W0168933.png" },
  { id: 168932, name: "오린 스위프트_슬렌더", link: "https://wine21.speedgabia.com/WINE_MST/TITLE/0168000/W0168932.png" },
  { id: 168926, name: "라 크레마 몬터레이 피노누아", link: "https://wine21.speedgabia.com/WINE_MST/TITLE/0168000/W0168926.png" },
  { id: 168921, name: "울프 블라스_헤리티지 릴리즈", link: "https://wine21.speedgabia.com/WINE_MST/TITLE/0168000/W0168921.png" },
  { id: 168919, name: "페드라롱가_도우미아", link: "https://wine21.speedgabia.com/WINE_MST/IMAGE/0168000/T0168919_001.png" },
  { id: 168918, name: "울프 블라스_더 마스터", link: "https://wine21.speedgabia.com/WINE_MST/IMAGE/0168000/T0168918_001.png" },
  { id: 168904, name: "라스 모라다스_라스 루체스", link: "https://wine21.speedgabia.com/WINE_MST/IMAGE/0168000/T0168904_001.png" }
];

const MenuItem = ({ ima, text, selected }) => {
  return(
    <div className={`menu-item-w ${selected ? "active" : ""}`}>
      <div className={`menu-item ${selected ? "active" : ""}`}>{text}</div>
      <img className={`menu-image ${selected ? "active" : ""}`} src={ima}></img>
    </div>
  );
};

export const Menu = (list, selected) =>
  list.map(el => {
    const { name, link } = el;

    return (
      <MenuItem ima={link} text={name} key={name} selected={selected} />
    );
  });

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>;
};
Arrow.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
};

export const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
export const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

class HorizontalScroll extends Component {
  state = {
    alignCenter: true,
    clickWhenDrag: true,
    dragging: true,
    hideArrows: true,
    hideSingleArrow: true,
    itemsCount: list.length,
    scrollToSelected: false,
    selected: "item1",
    translate: 0,
    transition: 0.5,
    wheel: true,
  };

  constructor(props) {
    super(props);
    this.menu = null;
    this.menuItems = Menu(list.slice(0, list.length), this.state.selected);
  }

  // onFirstItemVisible = () => {
  //   console.log("first item is visible");
  // };

  // onLastItemVisible = () => {
  //   console.log("last item is visible");
  // };

  onUpdate = ({ translate }) => {
    console.log(`onUpdate: translate: ${translate}`);
    this.setState({ translate });
  };

  onSelect = key => {
    console.log(`onSelect: ${key}`);
    this.setState({ selected: key });
  };

  componentDidUpdate(prevProps, prevState) {
    const { alignCenter } = prevState;
    const { alignCenter: alignCenterNew } = this.state;
    if (alignCenter !== alignCenterNew) {
      this.menu.setInitial();
    }
  }

  setItemsCount = ev => {
    const { itemsCount = list.length, selected } = this.state;
    const val = +ev.target.value;
    const itemsCountNew =
      !isNaN(val) && val <= list.length && val >= 0
        ? +ev.target.value
        : list.length;
    const itemsCountChanged = itemsCount !== itemsCountNew;

    if (itemsCountChanged) {
      this.menuItems = Menu(list.slice(0, itemsCountNew), selected);
      this.setState({
        itemsCount: itemsCountNew
      });
    }
  };

  setSelected = ev => {
    const { value } = ev.target;
    this.setState({ selected: String(value) });
  };

  render() {
    const {
      alignCenter,
      clickWhenDrag,
      hideArrows,
      dragging,
      hideSingleArrow,
      itemsCount,
      scrollToSelected,
      selected,
      translate,
      transition,
      wheel
    } = this.state;

    const menu = this.menuItems;
    
    const valueStyle = {
      margin: "5px 10px",
      display: "inline-block"
    };

    return (
      <div className="App">
        <p className="App-intro">
          오늘의 와인
        </p>

        <ScrollMenu
          alignCenter={alignCenter}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          clickWhenDrag={clickWhenDrag}
          data={menu}
          dragging={dragging}
          hideArrows={hideArrows}
          hideSingleArrow={hideSingleArrow}
          onFirstItemVisible={this.onFirstItemVisible}
          onLastItemVisible={this.onLastItemVisible}
          onSelect={this.onSelect}
          onUpdate={this.onUpdate}
          ref={el => (this.menu = el)}
          scrollToSelected={scrollToSelected}
          selected={selected}
          transition={+transition}
          translate={translate}
          wheel={wheel}
        />

        {/* <form className="properties">
          <label style={valueStyle}>
            Selected:
            <input
              style={{ margin: "0 5px" }}
              name="selected"
              type="text"
              value={selected}
              onChange={this.setSelected}
            />
          </label>
        </form> */}
      </div>
    );
  }
}

export default HorizontalScroll;