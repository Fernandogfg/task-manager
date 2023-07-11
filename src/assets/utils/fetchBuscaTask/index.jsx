const fetchBuscaTarefa = async(id)=>{
    const response = await fetch(`http://localhost:3000/task/${id}`)
    const data = await response.json()
    return data
}
export default fetchBuscaTarefa