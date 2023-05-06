/* ROUTING */
/* import HomeView from "../views/HomeView.vue";
import TasksView from "../views/TasksView.vue";
import TaskDetailView from "../views/TaskDetailView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import TaskDetailCommentsView from "../views/TaskDetailCommentsView.vue";
import TaskDetailGalleryView from "../views/TaskDetailGalleryView.vue";
 */
const HomeView = () => import("../views/HomeView.vue");
const TasksView = () => import("../views/TasksView.vue");
const TaskDetailView = () => import("../views/TaskDetailView.vue");
const TaskDetailCommentsView = () =>
  import("../views/TaskDetailCommentsView.vue");
const TaskDetailGalleryView = () =>
  import("../views/TaskDetailGalleryView.vue");
const NotFoundView = () => import("../views/NotFoundView.vue");

export const routes = [
  { path: "/", component: HomeView, name: "home" },
  { path: "/tasks", component: TasksView, name: "tasks" },
  {
    path: "/tasks/:taskId",
    component: TaskDetailView,
    name: "tasksDetail",
    props: true,
    children: [
      {
        path: "comments",
        component: TaskDetailCommentsView,
        name: "tasksDetailComments",
        props: true,
      },
      {
        path: "gallery",
        component: TaskDetailGalleryView,
        name: "tasksDetailGallery",
        props: true,
      },
    ],
  },
  { path: "/:pathMatch(.*)*", component: NotFoundView, name: "notFound" },
];
