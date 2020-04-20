import React from "react";

class NewsItem extends React.Component {
  render() {
      const { title,descreption} = this.props;
    return (
      <div>
        <h2 className="title">{title}</h2>
        <p>{descreption}</p>
      </div>
    );
  }
}

export default NewsItem;
