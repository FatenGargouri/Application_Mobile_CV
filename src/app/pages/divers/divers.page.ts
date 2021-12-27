import { Component, OnInit } from '@angular/core';
import{HttpClient}from'@angular/common/http';

@Component({
  selector: 'app-divers',
  templateUrl: './divers.page.html',
  styleUrls: ['./divers.page.scss'],
})
export class DiversPage implements OnInit {
  searchTitle='';
  movieApiUrl='';
  movieData={
  title:'',
  description:'',
  imageUrl:''
  };

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }
  readApi(url:string){
    return this.httpClient.get(url); }
    searchMovie(){
      const search = encodeURIComponent(this.searchTitle).trim();
      console.log('recherche du film'+search);
      this.movieApiUrl='http://www.omdbapi.com/?apikey=53dff6a3&t='+search;
      this.readApi(this.movieApiUrl).subscribe((data)=>{
        console.log(data);
        this.movieData.title=data['Title'];
        this.movieData.description=data['Plot'];
        this.movieData.imageUrl=data['Poster'];
            })
    }
    

}
