export interface UserResponse {
    sucess: boolean;
    message: string;
    user: UserAuth
}


export interface UserAuth {
    id: string;
    name: string;
    email: string;
    status: string;
    role: string;
}

export interface IUser {
    id: string;
    authId: string;
    name: string;
    email: string;
    status: string;
    role: string;
}


export interface UserUpdate {
    authId: string;
    name: string;
    status: string;
    role: string;
}


