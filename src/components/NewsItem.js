/**
 * NewsItem Component
 * 
 * This stateless functional component is responsible for displaying a single news article.
 * It receives several props to render article details such as title, description, image, 
 * publication date, author, and source. It also includes a "Read More" button linking to the full article.
 */

import React from 'react'

const NewsItem = (props) => {
    // Destructuring props for easier access
    let { title, description, imageUrl, newsUrl, author, date, source, toggleMode } = props;
    return (


        <div className='my-3'>
            <div className="card">

                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className=" badge rounded-pill bg-danger" >
                        {source}
                    </span>
                </div>
                <img src={!imageUrl ? "https://scitechdaily.com/images/Double-White-Dwarf-Binary-Star-System-Explosion-scaled.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}... <span className="badge bg-secondary">New</span>
                    </h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-primary">By {!author ? "Unknown" : author} on {new Date(date).toUTCString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    <p>{toggleMode}</p>
                </div>
            </div>
        </div>
    )
}


export default NewsItem 