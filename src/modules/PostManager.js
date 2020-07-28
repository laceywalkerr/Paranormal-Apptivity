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
  },
  post(newPost) {
    return fetch(`${remoteURL}/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
    }).then(data => data.json())
}
}