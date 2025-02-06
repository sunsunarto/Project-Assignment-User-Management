export const getUsers = async () => {
    const response = await fetch('http://localhost:3000/users')
    const data = await response.json()
    return data
}

export const deleteUser = async (id) => {
    const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: 'DELETE'
    })
}

export const addUsers = async (user) =>{
    const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
}

export const editUser = async (id, user) => {
    const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
}