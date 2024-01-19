import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from '../../assets/db.json'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  carId: number = 0;
  carInfo: any;
  publisherInfo:any;
  imgId:number = 0;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.carId = +params['id'];
      this.carInfo = this.getCarInfoById(this.carId);
      this.publisherInfo = this.getPublisherInfoByEmail(this.carInfo.publishersEmail)
      console.log('Car ID:', this.carId);
      console.log('Car Information:', this.carInfo);
    });
  }
  getCarInfoById(id: number){
    const carsInfo = data.carsInfo;
    const car = carsInfo.find(car => car.id === id);
    return car;
  }
  getPublisherInfoByEmail(Email: string){
    const publishInfo = data.users;
    const publisher = publishInfo.find(user => user.Email ===Email);
    return publisher;
  }
  addValuteSign(valute:string){
    return valute=="USD"?"$":"₾"
  }
  changeMainImg(id:number){
    this.imgId = id;
  }
}
