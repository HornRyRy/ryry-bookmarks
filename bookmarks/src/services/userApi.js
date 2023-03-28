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
                query: () =>('/authorized'),
                    providesTags: ['User']
                
            }),
            //this creates the hook below
            createUser: builder.mutation({
                query: ({...body}) =>({
                    url: '/signup',
                    method: 'POST',
                    body
                }),
                //below lin
                invalidatesTags: ['User']
            }),
            loginUser: builder.mutation({
                query: ({...body}) =>({
                    url: '/login',
                    method: 'POST',
                    body
                }),
                //below lin
                invalidatesTags: ['User']
            })
        }
    }
})

export const { useAutoLoginQuery, useCreateUserMutation, useLoginUserMutation } = userApi

//queries subscribe to the store
//users will send a BODY, so this will be mutation-method other than get
