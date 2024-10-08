import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsVIfsKmryuOi3hM3dvXXTA45waYqXKb_mKg&s"
  contentTitle: string = "Padre Pio o Santo do Tapa"
  contentDescription: string = "Padre pio morava em uma cidade pequena na Itália..."


  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
    )
  }

}
