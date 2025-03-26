export default async function removeEvent(id) {
  try {
    const response = await fetch("http://localhost:8080/events/" + id, {
      method: "delete",
    //   body: JSON.stringify(event)
    });
    response.then((res) => console.log(res));
  } catch (error) {
    console.error(error);
  }
}
