import React from 'react'
import { NavLink } from 'react-router-dom'


const NewsItem = (props) => {

    const { title, description, image,place, date, id,source } = props
    return (
        <div>
            <div className="card">
            <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className=" badge rounded-pill bg-danger">{source}</span>
                </div>
                <img src={image} className="card-img-top" style={{height:"200px"}} alt="NewsImage" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text" >{description}...</p>
                    <p className="card-text"><small className="text-body-secondary">in location {place} Published at {new Date(date).toGMTString()}</small></p>
                    <div className="bt" style={{marginLeft:'20px'}}>
                    <NavLink to={`/news/getnews/${id}`} className="btn btn-sm btn-dark">
                        Read More
                    </NavLink>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NewsItem
