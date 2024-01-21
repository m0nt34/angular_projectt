import carData from '../../assets/db.json';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export async function changeCarStatusToSold(id: number, http: HttpClient) {
  try {
    const carsInfo = carData.carsInfo || [];

    const passCurUserInfo = localStorage.getItem('currentUser');
    if (passCurUserInfo) {
      const currentUserInfo = JSON.parse(passCurUserInfo);
      console.log(currentUserInfo.id);

      for (const car of carsInfo) {
        if (car.id === id) {
          car.status = 'sold';
          const apiUrl = 'http://localhost:3000/carsInfo';
          const url = `${apiUrl}/${car.id}`;
          const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

          await http.put(url, car, { headers }).toPromise();
          localStorage.setItem('currentUser', JSON.stringify(currentUserInfo));

          console.log(localStorage.getItem('currentUser'));
          break;
        }
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
}