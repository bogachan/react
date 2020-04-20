import React from 'react';
import NewsItem from './NewsItem'

class News extends React.Component{
    render(){
        let name = <div>KUTUCUK</div>;
        return(
            <div>
                <h4>{name}</h4>
                <NewsItem></NewsItem>
                <NewsItem></NewsItem>
            </div>
        )
    }
}

export default News;