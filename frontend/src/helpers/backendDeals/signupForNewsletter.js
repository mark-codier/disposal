import getUsers from "./getUsers";
import checkHavingKonto from "./logics/checkHavingKonto";
export async function signupForNewsletter({ request }) {
  const dataForm = await request.formData();
  const email = dataForm.get("email");
  const responseData = await getUsers();
  console.log(email, responseData);
  const bool = checkHavingKonto(responseData,{email});
  const dataToFetcher = {
    message: bool ? 'Sign up is succeeded' : "Email isn't existed " 
  }
  return dataToFetcher;
}
