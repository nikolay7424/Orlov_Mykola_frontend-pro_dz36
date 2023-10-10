import { createStore } from "redux"

const initialState = {
    users: [
        {
            firstName: "John",
            lastName: "Doe",
            phone: "+380671234567",
        },
        {
            firstName: "Elizabeth",
            lastName: "Smith",
            phone: "+380501234567",
        },
    ],
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "setUsers":
            return { users: action.payload }
        default:
            return state
    }
}

const store = createStore(reducer)

export default store
