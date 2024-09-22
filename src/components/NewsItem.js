import React from "react";
// import Spinner from './Spinner'

const NewsItem = (props) => {
  
    let { title, description, imageUrl, newzUrl, auther, date, source} =
      props;
    return (
      <div>
        <div className="card my-3 mr-3 border-3 border-dark">
          <div>
            <span
              className="badge rounded-pill bg-danger"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: "0",
              }}
            >
              {source}
            </span>
          </div>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"
            }
            className="card-img-top img-fluid border-bottom border-3 border-dark"
            alt="..."
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!auther ? "Unknowen" : auther} <br />
                on {new Date(date).toGMTString()}
              </small>
            </p>

            <a href={newzUrl} className="btn btn-dark" target="_blanck">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
