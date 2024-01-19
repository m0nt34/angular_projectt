
export async function doesEmailExist(emailToCheck: string): Promise<boolean> {
  try {
    const response = await fetch('../assets/db.json');
    const data = await response.json();
    
    const users = data.users || [];

    for (const user of users) {
      if (user.Email === emailToCheck) {
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