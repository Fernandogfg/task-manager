const atualizaTask = (id, status) => {
  fetch(`http://localhost:3000/task/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        status: status    }),
  })
    .then((response) => response.json())
    .then((response) => console.log(response));
};
export default atualizaTask