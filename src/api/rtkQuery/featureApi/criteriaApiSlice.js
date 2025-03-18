import { apiSlice } from "../apiSlice";

export const criteriaApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getFalcutyCriteria: builder.query({
            query: () => "/api/v1/five_good_lcd/all",
            providesTags: ['FalcutyCriteria'],
        }),
        getSchoolCriteria: builder.query({
            query: () => "/api/v1/five_good/all",
            providesTags: ['SchoolCriteria'],
        }),
        getEventCriterias: builder.query({
            query: (eventID) => `/api/v1/events/criteria/${eventID}`,
        }),

        removeSchoolCriteria: builder.mutation({
            query: (id) => ({
                url: `/api/v1/five_good/delete/${id}`,
                method: 'PUT',
            }),
            invalidatesTags: ['SchoolCriteria'],
        }),
        removeFalcutyCriteria: builder.mutation({
            query: (id) => ({
                url: `/api/v1/five_good_lcd/delete/${id}`,
                method: 'PUT',
            }),
            invalidatesTags: ['FalcutyCriteria'],
        }),
    }),
});

export const { useGetFalcutyCriteriaQuery,
                useGetSchoolCriteriaQuery,
                useGetEventCriteriasQuery,
                useRemoveSchoolCriteriaMutation,
                useRemoveFalcutyCriteriaMutation,
            } = criteriaApiSlice;