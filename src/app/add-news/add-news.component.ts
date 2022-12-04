import { Component } from '@angular/core';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent {

  id=""
  title=""
  description=""
  author=""
  url=""
  urlToImage=""
  publishedAt=""
  source=""
  content=""

  readValue=()=>
  {
    let data:any={
      "id":this.id,"title":this.title,"description":this.description,"author":this.author,"url":this.url,"urlToImage":this.urlToImage,
      "publishedAt":this.publishedAt,"source":this.source,"content":this.content
  }
  console.log(data)
  }

}
