export default async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.org/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response)
    const data = await response.json()
    return data;
  } catch (e) {
    console.error(e);
  }
}
