
import { api } from './index';

const usersApi = api.injectEndpoints({
    endpoints : (build) => ({
        getUsers : build.query({
            query : () => ({
                url : '/users?page=2',
            }),
            providesTags : ["USERS"]
        }),
        getSingleUser : build.query({
            query : (id) => ({
                url : `users/${id}`
            }),
            providesTags : ["USERS"]
        }),
        deleteUser : build.mutation({
            query : (id) => ({
                url : `users/${id}`,
                method : "DELETE"
            }),
            providesTags : ["USERS"]
        }),
        CreateUser : build.mutation({
            query : (body) => ({
                url : `users/`,
                method : "POST",
                body
            }),
            providesTags : ["USERS"]
        })
    })
})

export const {  useGetUsersQuery , useGetSingleUserQuery , useDeleteUserMutation , useCreateUserMutation} = usersApi