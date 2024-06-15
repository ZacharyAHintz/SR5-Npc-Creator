export const useGetRoomGeneration = () => {
  return (
    useQuery <
    RoomGenerationResponse >
    {
      queryKey: ["aKey"],
      queryFn: async () => {
        const response = await axios.get("/generate-room");
        return response.data;
      },
    }
  );
};

export const useGetPassagewayGeneration = () => {
  return (
    useQuery <
    PassagewayGenerationResponse >
    {
      queryKey: ["passageway"],
      queryFn: async () => {
        const response = await axios.get("/generate-passage");
        return response.data;
      },
    }
  );
};
