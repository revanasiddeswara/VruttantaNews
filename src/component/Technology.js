import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading'
import technology from './Technology.json'
import PropTypes from 'prop-types'
export class Technology extends Component {
    static defaultProps={
        country:'in',
        pageSize:5,
        
    }
    static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
    }
    constructor(){
        super();
        this.state={
           articles:[],
            loading:false,
            page:null,
            
        }
    }
    
      componentDidMount(){  
       
            // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=265f4dcbb5ac4781a74220f3950e5e8c&page=${this.state.page}&pageSize=${this.props.pageSize}`
            this.setState({loading:true})
            let data=technology
            let parsedData=  technology
            this.setState({
                articles:data,
                totalResults:  parsedData.totalResults,
                loading:false
            })
    }
    
   
        
        
    

  render() {
    
    return (
      <div className='container '>
           <h1 className='text-center' style={{margin:'30px 0px' , color:'rgb(3 17 89)',fontFamily: "Lucida Console, Courier New, monospace", fontWeight: '900'}}>ವೃತ್ತಾಂತ Top - Headlines</h1>
           <div className='container'>
         <h5 className='font-weight-bold' style={{margin:'1px 0px' , color:'rgb(3 17 89)',fontWeight: '900'}}>Now you are viewing {this.props.category} News</h5>
        
         </div>
              

           {this.state.loading &&< Loading  />}
           <div className='row'>
                {this.state.articles.articles && this.state.articles.articles.map((element)=>{
                
                   return <div className="col-md-4" key={element.url}>
                    <Newsitem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,70):""} imageUrl={element.urlToImage} 
                    newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} page={element.page} pageSize={element.pageSize}/>

                </div>
            })}
         </div>
       
           
       
        
      </div>

    )
  }
}

export default Technology
