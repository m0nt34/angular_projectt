import { HttpClient, HttpHeaders } from '@angular/common/http';

export async function deleteCarData(id: number, http: HttpClient) {
  try {
    const apiUrl = 'http://localhost:3000/carsInfo';
    const url = `${apiUrl}/${id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    await http.delete(url, { headers }).toPromise();
  } catch (error) {
    console.error('Error:', error);
  }
}
