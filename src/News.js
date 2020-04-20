import React from 'react';
import NewsItem from './NewsItem'

class News extends React.Component{
    render(){
        let name = <div>KUTUCUK</div>;
        const title = "react js";
        const descreption = "react js descreption";
        return(
            <div>
                <h4>{name}</h4>
                <NewsItem title={title} descreption={descreption}></NewsItem>
            </div>
        )
    }
}

export default News;