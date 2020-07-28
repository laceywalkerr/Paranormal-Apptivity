const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/posts/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/posts`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/posts/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }
}