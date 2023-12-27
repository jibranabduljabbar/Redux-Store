const INITIAL_STATE = {
    users: [{
        name: "user1",
        email: "user1@mail.com",
        password: "user1786",
    },
    {
        name: "user2",
        email: "user2@mail.com",
        password: "user2786",
    }],
    role: "user",
    user_verified: "verified",
}

export default (state = INITIAL_STATE) => {
    return state;
}