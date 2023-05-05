import { defineStore } from "pinia";

// const SERVER_URL = "http://localhost:3001";
import dbJson from "../../data/db.json";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
    name: "Alex",
    loading: false,
  }),
  getters: {
    totalCount: (state) => {
      return state.tasks.length;
    },
    favCount() {
      return this.tasks.reduce((p, c) => {
        return c.favourite ? p + 1 : p;
      }, 0);
    },
    favs() {
      return this.tasks.filter((e) => e.favourite);
    },
    getTaskById: (state) => {
      return (taskId) => state.tasks.find((t) => t.id === parseInt(taskId));
    },
  },
  actions: {
    async getTasks() {
     /*  this.loading = true;

      const res = await fetch(`${SERVER_URL}/tasks`);
      const data = await res.json();

      this.tasks = data;
      this.loading = false; */
      this.tasks = await dbJson.tasks;
      this.loading = false;
    },
    async toggleFav(id) {
      const task = this.tasks.find((t) => t.id === id);
      task.favourite = !task.favourite;

     /*  const res = await fetch(`${SERVER_URL}/tasks/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ favourite: task.favourite }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.error) {
        console.log(res.error);
      } */
    },
    async addTask(task) {
      this.tasks.push(task);

     /*  const res = await fetch(`${SERVER_URL}/tasks`, {
        method: "POST",
        body: JSON.stringify(task),
        headers: { "Content-Type": "application/json" },
      });

      if (res.error) {
        console.log(res.error);
      } */
    },
    async deleteTask(id) {
      this.tasks = this.tasks.filter((t) => {
        return t.id !== id;
      });

     /*  const res = await fetch(`${SERVER_URL}/tasks/${id}`, {
        method: "DELETE",
      });

      if (res.error) {
        console.log(res.error);
      } */
    },
  },
});
