import { api } from "./index";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategory: build.query({
      query: (params) => ({
        url: "/categories",
        params,
      }),
      providesTags: ["Category"],
    }),

    createCategory: build.mutation({
      query: (body) => ({
        url: "/categories",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Category"],
    }),
    updateCategory: build.mutation({
      query: ({ id, body }) => ({
        url: `/categories/${id}`,
        method: "PUT", // or "PATCH"
        body,
      }),
      invalidatesTags: ["Category"],
    }),
    deleteCategory: build.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = productApi;
