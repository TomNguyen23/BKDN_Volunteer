import { apiSlice } from "../apiSlice";

export const criteriaApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getFalcutyCriteria: builder.query({
            query: () => "/api/v1/five_good_lcd/all",
        }),
        getSchoolCriteria: builder.query({
            query: () => "/api/v1/five_good/all",
        }),
        getEventCriterias: builder.query({
            query: (eventID) => `/api/v1/events/criteria/${eventID}`,
        }),
    }),
});

export const { useGetFalcutyCriteriaQuery,
                useGetSchoolCriteriaQuery,
                useGetEventCriteriasQuery,
            } = criteriaApiSlice;