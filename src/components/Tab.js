import React from "react";
import "./Tab.css";

// This is by FAR the most complicated thing in this whole app
// Basically these tabs operate as a nav bar and travel with their 'Folder's

export default class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = { anchor: 0 };
  }

  componentDidMount() {
    // These are the tab, and the folder it belongs to.
    let folder = document.getElementById(this.props.id);
    let tab = document.getElementById(`${this.props.id}-tab`);
    let extraOffset = this.props.vOffset;

    window.addEventListener("scroll", stickTheTab);

    // This tracks the position of the page scroll,
    // Then updates how a particular tab will behave.
    // If its folder hasn't scrolled into view yet it sticks on the
    // bottom of the screen.
    // If its folder is visible it will scroll with the folder
    // until it hits the top of the page, where it will stick again.
    function stickTheTab() {
      let topOffset = getOffset(folder) - extraOffset;
      let bottomOffset = getOffset(folder) - window.innerHeight;
      if (window.pageYOffset > topOffset) {
        tab.classList.add("sticky-top");
        tab.classList.remove("sticky-bottom");
      } else if (window.pageYOffset < bottomOffset) {
        tab.classList.add("sticky-bottom");
        tab.classList.remove("sticky-top");
      } else {
        tab.classList.remove("sticky-top");
        tab.classList.remove("sticky-bottom");
      }
    }

    // This calculates that absolute offset from the top of the page
    // even if someone reload the page or otherwise comes to the page
    // in the middle
    function getOffset(element) {
      let yPosition = 0;
      while (element) {
        yPosition += element.offsetTop - element.scrollTop + element.clientTop;
        element = element.offsetParent;
      }
      return yPosition;
    }

    // These make sure that the tab knows the exact location of the top of its
    // folder even if the dimmensions of the screan change.
    // The Anchor state is used when the tabs are clicked so that the page
    // Scrolls to the correct place.
    window.addEventListener("scroll", () => {
      this.setState({ anchor: getOffset(folder) - 100 });
    });
    window.addEventListener("click", () => {
      this.setState({ anchor: getOffset(folder) - 100 });
    });
  }

  render() {
    return (
      <div id={`${this.props.id}-tab`} className="tab sticky-bottom">
        <div className="tab-holder">
          <a
            href="none"
            onClick={e => {
              e.preventDefault();
              window.scrollTo({
                top: this.state.anchor,
                behavior: "smooth"
              });
            }}
            className="tab-text"
            style={{ color: this.props.textColor }}
          >
            {this.props.children}
          </a>
          <div
            className="tab-back"
            style={{ backgroundColor: this.props.color }}
          />
        </div>

        <div className="tab-bar" style={{ backgroundColor: this.props.color }}>
          {" "}
        </div>
      </div>
    );
  }
}
