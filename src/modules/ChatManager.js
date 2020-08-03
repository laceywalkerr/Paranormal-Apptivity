const remoteURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${remoteURL}/chatroom/${id}`).then(result => result.json())
    },
    getAll() {
        return fetch(`${remoteURL}/chatroom`).then(result => result.json())
    },
    post(newChat) {
        return fetch(`${remoteURL}/chatroom`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newChat)
        }).then(data => data.json())
    },
    update(editedChat) {
        return fetch(`${remoteURL}/chatroom/${editedChat.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedChat)
        }).then(data => data.json());
      }

}