import { apiSlice } from "../apiSlice";

export const eventApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createEvent: builder.mutation({
            query: (data) => ({
                url: '/api/v1/events/createEventImage',
                method: 'POST',
                body: data
            }),
        }),

        getAllEvents: builder.query({
            query: () => '/api/v1/events?page=0&limit=100',
            providesTags: ['Events'],
        }),
        getEventById: builder.query({
            query: (id) => `/api/v1/events/${id}`,
        }),

        removeEvent: builder.mutation({
            query: (id) => ({
                url: `/api/v1/events/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Events'],
        }),
    }),
});

export const { useCreateEventMutation, 
                useGetAllEventsQuery,
                useGetEventByIdQuery, 
                useRemoveEventMutation,
            } = eventApiSlice;