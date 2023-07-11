const fetchDeletaTask = async (id) => {
  const response = await fetch(`http://localhost:3000/task/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  });
};
export default fetchDeletaTask