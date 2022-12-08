import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title, description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div className='container my-2'>
        
            <div className="card my-5" style={{width: "18rem" , border: '2px solid #000' ,backgroundColor: 'rgb(0 15 54)',boxShadow: '10px 10px 5px #aaaaaa' , color:'#fff' ,cursor:'pointer'}}>
                <img src={!imageUrl?"https://i.ytimg.com/vi/FMh06gkNpro/maxresdefault.jpg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'85%' ,zIndex:'1'}}>{source}</span>
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Read more</a>
                </div>
            </div>
       
    </div>
    )
  }
}

export default Newsitem
