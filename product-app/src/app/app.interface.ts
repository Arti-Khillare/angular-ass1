interface signIn {
    email : string,
    password : string
}

interface signUp {
    fname : string,
    lname : string,
    email : string,
    password : string,
    role : string
}

export { signIn, signUp }