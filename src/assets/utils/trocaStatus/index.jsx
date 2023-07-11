const trocaStatus = async (id, status) => {
 const res = await fetch(`http://localhost:3000/task/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        status: status    }),
  })
    const data = await res.json()
    return data
};
export default trocaStatus