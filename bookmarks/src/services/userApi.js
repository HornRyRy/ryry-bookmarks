import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api'
    }),
    tagTypes: ['User'],
    endpoints(builder){
        return{
            autoLogin: builder.query({
                query: () =>{
                    ('/me')
                }
            }),
            providesTags: ['User']
        }
    }
})

export const { useAutoLoginQuery } = userApi