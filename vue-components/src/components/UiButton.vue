<template>
  <div>
    <button :class="classes" @click="handleClick">
      {{ title }}
    </button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'Titolo...'
    },
    color: {
      type: String,
      required: false,
      validator(value) {
        return ['success', 'danger'].includes(value);
      }
    }
  },
  emits: ['evt-click'],
  setup(props, ctx) {
    const internalTitle = ref(props.title);

    internalTitle.value = '';

    const classes = ref('');
    const classBase = 'font-bold py-2 px-4 rounded ';

    const handleClick = () => {
      ctx.emit('evt-click');
    };

    onMounted(() => {
      switch (props.color) {
        case 'success':
          classes.value = classBase + ' bg-green-500 hover:bg-green-700 text-white';
          break;
        case 'danger':
          classes.value = classBase + ' bg-red-500 hover:bg-red-700 text-white';
          break;
        default:
          classes.value = classBase + ' bg-blue-500 hover:bg-blue-700 text-white';
          break;
      }
    });

    return {
      handleClick,
      classes
    };
  }
};
</script>
