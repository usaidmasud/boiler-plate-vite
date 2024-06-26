// const _get = async (params?: FilterResponseModel) => {
//   if (params) {
//     const response = await instance.get("authority" + formatFilter(params));
//     return response.data;
//   }
//   const response = await instance.get("authority");
//   return response.data;
// };

// const _store = async (data: RequestStoreAuthority) => {
//   const response = await instance.post("authority", data);
//   return response.data;
// };

// const _update = async (data: RequestUpdateAuthority, id: string) => {
//   const response = await instance.patch("authority/" + id, data);
//   return response.data;
// };

// const _delete = async (id: string[]) => {
//   const response = await instance.delete("authority/" + id);
//   return response.data;
// };
// const useGetAll = (params?: FilterResponseModel) =>
//   useQuery<AuthorityResponseModel>({
//     queryKey: ["authority", params],
//     queryFn: () => _get(params),
//     placeholderData: keepPreviousData,
//   });

// const useStore = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationKey: ["store-authority"],
//     mutationFn: (data: RequestStoreAuthority) => _store(data),
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ["authority"],
//       });
//       toast.success(MESSAGE_STATE.STORE_SUCCESS);
//     },
//     onError: (error: any) => {
//       toast.error(error?.response?.data?.message);
//     },
//   });
// };

// const useUpdate = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationKey: ["update-authority"],
//     mutationFn: ({ data, id }: { data: RequestUpdateAuthority; id: string }) =>
//       _update(data, id),
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ["authority"],
//       });
//       toast.success(MESSAGE_STATE.UPDATE_SUCCESS);
//     },
//     onError: (error: any) => {
//       toast.error(error?.response?.data?.message);
//     },
//   });
// };

// const useDelete = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationKey: ["delete-authority"],
//     mutationFn: (id: string[]) => _delete(id),
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ["authority"],
//       });
//     },
//   });
// };

// export const authorityService = {
//   useGetAll,
//   useDelete,
//   useStore,
//   useUpdate,
// };

export const authorityService = {};
