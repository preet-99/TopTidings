/**
 * News Component
 * 
 * This component is responsible for fetching and displaying news articles
 * from the NewsAPI based on a selected category, country, and page number.
 * It also includes infinite scrolling and loading indicators for a better user experience.
 */

import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    // state hooks 
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    /**
     * Capitalizes the first letter of a string
     */
    const capatalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    /**
    * Fetches news articles from the API based on current props and page state.
    * Also updates progress at different stages using the setProgress prop.
    */
    const updateNews = async () => {

        props.setProgress(10);

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(50);

        setArticles(
            parsedData.articles
        );
        setLoading(false);
        setTotalResults(parsedData.totalResults);

        props.setProgress(100);
    }

    /**
   * useEffect to fetch initial data when the component mounts.
   * Also sets the document title according to the selected category.
   */

    useEffect(() => {
        document.title = `${capatalizeFirstLetter(props.category)} - TopTidings`;
        updateNews();
        // eslint-disable-next-line
    }, [])

    /**
    * Used by InfiniteScroll to load more articles when scrolling.
    */
    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1} &pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json();

        setArticles(articles.concat(parsedData.articles));
        setLoading(false);
        setTotalResults(parsedData.totalResults);

    };

    return (
        <>
            <h1 className='text-center my-35 ' style={{ marginTop: '6rem' }}>NewsMonkey - Top {capatalizeFirstLetter(props.category)} Headlines </h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={Array.isArray(articles) && articles.length !== totalResults}
                loader={<Spinner />}
            >     <div className="container">
                    <div className='row my-5'>

                        {articles.map((element) => {
                            return (
                                <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage ? element.urlToImage : ""} author={element.author} date={element.publishedAt} newsUrl={element.url} source={element.source.name} toggleMode={props.toggleMode} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )

}
/**
 * Default props for the News component
 */

News.defaultProps = {
    country: "us",
    pageSize: 8,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    loading: PropTypes.bool,
    category: PropTypes.string,
}

export default News