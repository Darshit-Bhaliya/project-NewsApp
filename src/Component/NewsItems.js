import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, date, source } = this.props;
    return (
      <div className=" d-flex justify-content-center h-100">
        <div className="card">
          <div style={{display:"flex",justifycontent:"flex-end",position:"absolute",right:0}}>
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img src={!imageUrl ? "https://ichef.bbci.co.uk/news/1024/branded_news/6fa2/live/ea59de70-79e3-11ef-b02d-c5f3b724a1ea.jpg" : imageUrl} 
                    className="card-img-top" alt="img" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">
              read more
            </a>
            <p className="card-text">
              <small className="text-muted">published on {new Date(date).toGMTString()} </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
