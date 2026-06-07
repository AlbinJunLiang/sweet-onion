
export function mappingRegisterUser(authId, name, email, isEmailVerified, role) {
    return {
        authId: authId,
        name: name || email.split('@')[0],
        email: email,
        status: isEmailVerified ? 'verified' : 'registered',
        role: role
    };
}



export function mappingUserResponse(userDB) {
    return {
        id: userDB._id,
        authId: userDB.authId ?? '',
        email: userDB.email,
        name: userDB.name,
        status: userDB.status,
        role: userDB.role
    }
}

