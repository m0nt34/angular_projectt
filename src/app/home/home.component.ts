import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  cars: any[] = [];

  userIsoutOfAccount(){
    if (localStorage.getItem('userSignedIn') === 'true') {
      document.querySelector(".main-cont .cont .up-content-cont")?.classList.remove("hide");
      document.querySelectorAll(".announcement .right-cont .edit-btn-cont .edit-announcement-btn").forEach((editBtn)=>{
        editBtn?.classList.remove("hide");
      });
    }else{
      document.querySelector(".main-cont .cont .up-content-cont")?.classList.add("hide");
      document.querySelectorAll(".announcement .right-cont .edit-btn-cont .edit-announcement-btn").forEach((editBtn)=>{
        editBtn?.classList.add("hide");
      });
    }
  }  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.userIsoutOfAccount();
    this.http.get<any>('../../assets/db.json').subscribe(
      (data) => {
        this.cars = data.carsInfo;
      },
      (error) => {
        console.error('Error loading JSON data:', error);
      }
    );
  }
  addValuteSign(valute:string){
    return valute=="USD"?"$":"₾"
  }
  checkIfCanEddit(email:string){
    const storedUsers = localStorage.getItem('currentUser');
    const check = localStorage.getItem('userSignedIn')
    if (storedUsers) {
      const currentUserArray = JSON.parse(storedUsers);
      const storedEmail = currentUserArray.Email;
      if(email==storedEmail && check === "true"){
        return true;
      }
    }
    return false
  }
}
