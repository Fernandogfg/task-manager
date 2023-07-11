async function atualizaTask(id, taskData){
    const data = await fetch(`http://localhost:3000/task/${id}`,{
        method:'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(taskData)
    })
    const response = await data.json()
    console.log(response);
}
export default atualizaTask