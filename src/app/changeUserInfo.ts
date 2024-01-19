import userData from '../assets/db.json';
import curUserData from '../assets/curUser.json';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export async function changeUserData(
  name: string,
  lastname: string,
  email: string,
  username: string,
  password: string,
  http: HttpClient 
) {
  try {
    const users = userData.users || [];
    const curUser = curUserData.curUserInfo || [];
    const storedUsers = localStorage.getItem('currentUser');

    if (storedUsers) {
      const currentUserArray = JSON.parse(storedUsers);
      var storedId = currentUserArray.id;
    }

    const passCurUserInfo = localStorage.getItem('currentUser');
    if (passCurUserInfo) {
      const currentUserInfo = JSON.parse(passCurUserInfo);
      console.log(currentUserInfo.id);
      for (const user of users) {
        if (user.id === currentUserInfo.id) {
          const apiUrl = 'http://localhost:3000/users';
          const url = `${apiUrl}/${user.id}`;
          const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
          const updatedUserData = {
            name: name,
            lastname: lastname,
            Email: email,
            username: username,
            password: password,
            cpassword: password,
            id: storedId
          };
          curUser[0] = {
            name: name,
            lastname: lastname,
            Email: email,
            username: username,
            password: password,
            id: storedId
          };

          localStorage.setItem('currentUser', JSON.stringify(curUser[0]));
          await http.put(url, updatedUserData, { headers }).toPromise();
          console.log(localStorage.getItem('currentUser'));
          break;
        }
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
}