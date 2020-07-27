const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/posts/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/postss`).then(result => result.json())
  }
}