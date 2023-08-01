interface signIn {
    email : string,
    password : string
}

interface signUp {
    _id: string;
    fname : string;
    lname : string;
    email : string;
    password : string;
    role : string;
}

interface users {
    fname : string,
    lname : string,
    email : string,
    password : string,
    role : string,
    _id : string
}

interface createProduct {
    _id : string;
    name : string;
    description :  string;
    userId : string;
    isPublished : boolean;
    productImage :  string;
    price : Number;
    rating : Number;
    createdBy : string
}

interface urlParam {
    id : string
}

export { signIn, signUp, users, createProduct, urlParam }