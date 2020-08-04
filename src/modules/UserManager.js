const remoteURL = "http://localhost:5002"

export default { 
    GetAll() {
        return fetch(`${remoteURL}/users`)
        .then(response => response.json())
    }
}