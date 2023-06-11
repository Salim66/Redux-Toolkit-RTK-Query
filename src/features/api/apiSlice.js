import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5050' }),
    tagTypes: ['Todos'],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos',
            providesTags: ['Todos']
        }),
        getSingleTodo: builder.query({
            query: (id) => `/todos/${id}`,
            providesTags: ['Todos']
        }),
        createTodo: builder.mutation({
            query: (name) => ({
                url: '/todos',
                method: "POST",
                body: {name, status: 'pending'}
            }),
            invalidatesTags: ['Todos']
        }),
        deleteTodo: builder.mutation({
            query: (id) => ({
                url: '/todos/' + id,
                method: 'DELETE'
            }),
            invalidatesTags: ['Todos']
        })
    })
});

export const { 
    useGetTodosQuery,
    useGetSingleTodoQuery,
    useCreateTodoMutation,
    useDeleteTodoMutation,
} = apiSlice;
