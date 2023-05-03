<template>
  <button :class="classes" @click="handleClick" :disabled="disabled">
    {{ title }}
  </button>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  props: {
    title: {
      type: String,
      required: true,
      default: "Titolo...",
    },
    type: {
      type: String,
      required: false,
      validator(value) {
        return ["success", "danger"].includes(value);
      },
    },
    disabled: {
      type: Boolean,
      required: false,
    },
  },
  emits: ["click"],
  setup(props, ctx) {
    const internalTitle = ref(props.title);

    internalTitle.value = "";

    const classes = ref("");
    const classBase = "btn";

    const handleClick = () => {
      ctx.emit("click");
    };

    onMounted(() => {
      let classType = "";
      switch (props.type) {
        case "success":
          classType = "btn-success";
          break;
        case "danger":
          classType = "btn-danger";
          break;
        default:
          classType = "btn-default";
          break;
      }
      classes.value = `${classBase} ${classType}`;
    });

    return {
      handleClick,
      classes,
    };
  },
};
</script>

<style type="css">
.btn {
  @apply p-2 rounded-md text-base font-bold text-white;
}

.btn-default {
  @apply bg-blue-600 hover:bg-blue-700;
}

.btn-success {
  @apply bg-green-600 hover:bg-green-700;
}

.btn-danger {
  @apply bg-red-500 hover:bg-red-700;
}

:disabled {
  @apply bg-gray-400 hover:bg-gray-400 cursor-not-allowed;
}
</style>
