const taskAddFetch = (taskdata) => {
    fetch('http://localhost:3000/task', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(taskdata)
    }).then(response => response.json()).then(response => console.log(response))
}
export default taskAddFetch