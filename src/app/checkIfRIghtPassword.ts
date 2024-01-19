import { doesEmailExist } from '../app/userCheck';
import userData from '../assets/db.json';
import curUserData from '../assets/curUser.json'
export async function isEmailPasswordRight(emailToCheck: string, Curpassword: string): Promise<boolean> {
  try {
    const users = userData.users || [];
    const curUser = curUserData.curUserInfo || [];
    for (const user of users) {
      if (user.Email === emailToCheck) {
        if(user.password === Curpassword){
          console.log("right password");
          curUserData.userSignedIn = true;
          curUser[0] = {
            name: user.name,
            lastname: user.lastname,
            Email: user.Email,
            username: user.username,
            password: user.password,
            id: user.id
          };
          localStorage.setItem('currentUser', JSON.stringify(curUser[0]));
          localStorage.setItem('userSignedIn', JSON.stringify(curUserData.userSignedIn));
          return true;
        }
        break;
      }
    }
    return false; 
  } catch (error) {
    console.error('Error:', error);
    return false; 
  }
}