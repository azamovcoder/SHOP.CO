import { api } from "./index";

export const adminApi = api.injectEndpoints({
  endpoints: (build) => ({
    signInAdmin: build.mutation({
      query: (body) => ({
        url: "/admins/sign-in",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Admin", "Profile"],
    }),
    getProfile: build.query({
      query: (params) => ({
        url: "/admin/profile",
        params,
      }),
      providesTags: ["Profile"],
    }),
  }),
});

export const { useSignInAdminMutation, useGetProfileQuery } = adminApi;
