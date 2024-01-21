import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { changeCarStatusToSold } from './changeCarData';
import { changeCarStatusToActive } from './changeCarData2';
import { deleteCarData } from './deleteCar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  cars: any[] = [];
  filteredAndSortedCars: any[] = [];
  userIsoutOfAccount() {
    if (localStorage.getItem('userSignedIn') === 'true') {
      document
        .querySelector('.main-cont .cont .up-content-cont')
        ?.classList.remove('hide');
      document
        .querySelectorAll(
          '.announcement .right-cont .edit-btn-cont .edit-announcement-btn'
        )
        .forEach((editBtn) => {
          editBtn?.classList.remove('hide');
        });
    } else {
      document
        .querySelector('.main-cont .cont .up-content-cont')
        ?.classList.add('hide');
      document
        .querySelectorAll(
          '.announcement .right-cont .edit-btn-cont .edit-announcement-btn'
        )
        .forEach((editBtn) => {
          editBtn?.classList.add('hide');
        });
    }
  }
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.userIsoutOfAccount();
    this.setCarData();
  }
  setCarData() {
    this.http.get<any>('../../assets/db.json').subscribe(
      (data) => {
        this.cars = data.carsInfo;
      },
      (error) => {
        console.error('Error loading JSON data:', error);
      }
    );
  }
  addValuteSign(valute: string) {
    return valute == 'USD' ? '$' : '₾';
  }
  checkIfCanEddit(id: number) {
    const storedUsers = localStorage.getItem('currentUser');
    const check = localStorage.getItem('userSignedIn');
    if (storedUsers) {
      const currentUserArray = JSON.parse(storedUsers);
      const storedId = currentUserArray.id;
      if (id == storedId && check === 'true') {
        return true;
      }
    }
    return false;
  }
  editBtnFunction(id: number) {
    document.querySelectorAll('.BtnsCont').forEach((cont) => {
      cont.classList.remove('active');
    });
    const elementId = `${id}-BtnsContId`;
    document.getElementById(elementId)?.classList.add('active');
  }
  editCancelBtnFunciton(id: number) {
    const elementId = `${id}-BtnsContId`;
    document.getElementById(elementId)?.classList.remove('active');
  }
  editsoldBtnFunciton(id: number) {
    const elementId = `${id}-BtnsContId`;
    document.getElementById(elementId)?.classList.remove('active');
    changeCarStatusToSold(id, this.http);
  }
  editActiveBtnFunciton(id: number) {
    const elementId = `${id}-BtnsContId`;
    document.getElementById(elementId)?.classList.remove('active');
    changeCarStatusToActive(id, this.http);
  }
  editDeleteBtnFunciton(id: number) {
    const elementId = `${id}-BtnsContId`;
    document.getElementById(elementId)?.classList.remove('active');
    deleteCarData(id, this.http);
  }
  filterCards(value: string) {
    if (value === '') {
      this.setCarData();
    } else {
      const uniqueCars = new Set<any>();
      const carAddedMap = new Map<number, boolean>();

      const addCar = (car: any) => {
        uniqueCars.add(car);
        carAddedMap.set(car.id, true);
      };

      for (const car of this.cars) {
        if (
          car.Manufacturer.toLowerCase().startsWith(value.toLowerCase()) &&
          !carAddedMap.get(car.id)
        ) {
          addCar(car);
        }
      }
      for (const car of this.cars) {
        if (
          car.Manufacturer.toLowerCase().includes(value.toLowerCase()) &&
          !carAddedMap.get(car.id)
        ) {
          addCar(car);
        }
      }
      for (const car of this.cars) {
        if (
          car.location.toLowerCase().startsWith(value.toLowerCase()) &&
          !carAddedMap.get(car.id)
        ) {
          addCar(car);
        }
      }
      for (const car of this.cars) {
        if (
          car.location.toLowerCase().includes(value.toLowerCase()) &&
          !carAddedMap.get(car.id)
        ) {
          addCar(car);
        }
      }
      this.cars = Array.from(uniqueCars);
    }
  }
}
