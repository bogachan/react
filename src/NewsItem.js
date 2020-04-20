import React from "react";

class NewsItem extends React.Component {
  render() {
      
    return (
      <div>
        <h2 className="title">{this.props.title}</h2>
        <p>{this.props.descreption}</p>
      </div>
    );
  }
}

export default NewsItem;
