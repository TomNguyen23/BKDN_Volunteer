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
        editEvent: builder.mutation({
            query: ({ eventId, formData }) => ({
                url: `/api/v1/events/${eventId}`,
                method: 'PUT',
                body: formData
            }),
            invalidatesTags: ['Events'],
        }),

        getAllEvents: builder.query({
            query: () => '/api/v1/events?page=0&limit=100',
            providesTags: ['Events'],
        }),
        getEventById: builder.query({
            query: (id) => `/api/v1/events/${id}`,
        }),
        getEventRegistration: builder.query({
            query: (id) => `/api/v1/registrations/event/${id}`,
        }),
        getAcademicYears: builder.query({
            query: () => "/api/v1/semesters",
        }),

        getExternalEvents: builder.query({
            query: () => "/api/external-events/pending",
            providesTags: ['ExternalEvents'],
        }),
        approvedExternalEvent: builder.mutation({
            query: (id) => ({
                url: `/api/v1/points/${id}/approve`,
                method: 'PUT',
            }),
            invalidatesTags: ['ExternalEvents'],
        }),
        rejectedExternalEvent: builder.mutation({
            query: (id) => ({
                url: `/api/v1/points/${id}/reject`,
                method: 'PUT',
            }),
            invalidatesTags: ['ExternalEvents'],
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
                useEditEventMutation,
                useGetAllEventsQuery,
                useGetEventByIdQuery, 
                useGetEventRegistrationQuery,
                useGetAcademicYearsQuery,
                useGetExternalEventsQuery,
                useApprovedExternalEventMutation,
                useRejectedExternalEventMutation,
                useRemoveEventMutation,
            } = eventApiSlice;