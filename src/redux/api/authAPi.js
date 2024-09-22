import { api } from "./index"

const authApi = api.injectEndpoints({
    endpoints: (build) => ({
        SignUp: build.mutation({
            query: (body) => ({
                url: "/register",
                method: "POST",
                body
            })
        }),
        login:build.mutation({
            query:(body)=> ({
                url:"/login",
                method:'POST',
                body
            })
        })
    })
})
export const { useSignUpMutation,useLoginMutation } = authApi