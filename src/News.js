import React from 'react';
import NewsItem from './NewsItem'

class News extends React.Component{
    render(){
        let name = <div>KUTUCUK</div>;
        const title = "react js";
        const descreption = "react js descreption";
        const news = [
            {title: "Title 1",descreption: "Descreption 1"},
            {title: "Title 2",descreption: "Descreption 2"},
            {title: "Title 3",descreption: "Descreption 3"}
        ]
        return(
            <div>
                <h4>{name}</h4>
                <NewsItem title={news[0].title} descreption={news[0].descreption}></NewsItem>
                <NewsItem title={news[1].title} descreption={news[1].descreption}></NewsItem>
                <NewsItem title={news[2].title} descreption={news[2].descreption}></NewsItem>
            </div>
        )
    }
}

export default News;