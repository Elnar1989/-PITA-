const {REACT_APP_HOST: host} = process.env

export const signUp = () => `${host}/api/v1/auth/signup`
export const signIn = () => `${host}/api/v1/auth/signin`
export const signOut = () =>`${host}/api/v1/auth/signout`
export const checkAuth = () => `${host}/api/v1/auth/check`

export const getAllUsers = () => `${host}/api/v1/users`
export const editUser = (id) => `${host}/api/v1/users/${id}`
export const getUser = (id) => `${host}/api/v1/users/${id}`
