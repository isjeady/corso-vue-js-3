import { http } from "../http";

export const getTaskService = async () => {
  const { data } = await http.get(`/tasks`);
  return data;
};

export const postTaskService = async (taskPayload) => {
  const { data } = await http.post(`/tasks`, taskPayload);
  return data;
};

export const patchTaskService = async (id, taskPayload) => {
  const { data } = await http.patch(`/tasks/${id}`, taskPayload);
  return data;
};

export const deleteTaskService = async (id) => {
  const { data } = await http.delete(`/tasks/${id}`);
  return data;
};
