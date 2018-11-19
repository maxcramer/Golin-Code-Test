import React from 'react';

class Article extends React.Component{
  constructor(params){
    super();
    this.params = params;
  }
  render(){

    return (<div className="articles__item">
      <img src={this.params.Thumbnail} alt={this.params.Title}/>
      <div className="padding__bottomHalf">
        <h3 className="article__title">{this.params.Title}</h3>
        <p className="article__strapline">{this.params.Strapline}</p>
        <a href={this.params.URL} className="button">Find out more > </a>
      </div>
    </div>);
  }
}

class ArticleListing extends React.Component {

  constructor() {
    super();

    this.state = {
      articles:[
      {
        Id: 1,
        Title: 'Article1',
        Strapline: 'This is the description of the article',
        URL: 'https://www.bbc.co.uk/news/',
        ArticleDate: '01/01/2018',
        Thumbnail: 'https://www.coventry.ac.uk/Global/Cov%20Uni%20London/Images/Hero%20scroller/Alumni-hero.jpg'
      },
      {
        Id: 2,
        Title: 'Second article',
        Strapline: 'Another nice description, that should be displayed in the tile',
        URL: 'https://www.bbc.co.uk',
        ArticleDate: '25/11/2018',
        Thumbnail: 'https://www.foodbytesworld.com/wp-content/uploads/2018/04/London-2018.jpg'
      },
      {
        Id: 3,
        Title: 'Article3',
        Strapline: 'Lorem ipsum dolor sit amet, negotiavit dilorum',
        URL: 'https://www.bbc.co.uk/news/technology',
        ArticleDate: '09/10/201',
        Thumbnail: 'https://webimg.ccpgamescdn.com/4iarfuccmw16/2QoOHGEP6MuewCk2cAWcOg/2425c1ec043d459dfbff15000f5ea47f/london_small2.jpg?fit=fill&w=1920'
      }
    ]
  };


  }
  render(){

    return (
      <div className="articles container">{this.state.articles.map(function(article, key){
        return <Article key={key} {...article}></Article>;
      })}</div>
    );

  }


}


class App extends React.Component{
  render(){
    return (
      <div>
        <h1 className="container page__title">Latest News</h1>
        <ArticleListing></ArticleListing>
        <p className="more__tag">More news ></p>
      </div>
    );
  }
}

export default App;
