 
export async function doesEmailExist(emailToCheck: string): Promise<boolean> {
  try {
    const response = await fetch('../assets/db.json');
    const data = await response.json();
    
    const users = data.users || [];
    const storedUsers = localStorage.getItem('currentUser');

    if (storedUsers) {
      const currentUserArray = JSON.parse(storedUsers);
      var storedId = currentUserArray.id;
    }
    for (const user of users) {
      if (user.Email === emailToCheck && user.id !== storedId) {
        console.log("Email that returned true: " + user.Email);
        return true;
      }
    }

    return false;
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
}