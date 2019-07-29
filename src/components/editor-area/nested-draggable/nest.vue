<template>
  <draggable class="dragArea" tag="ul" v-model="tasklist" :group="{ name: 'widget' }" >
    <li v-for="(el, idx) in tasklist" :data-key="el.type + idx" :key="el.type + idx">
      <p>{{ el.name }}</p>
      <template v-if="el.tasks">
        <nested-draggable :tasks="el.tasks" />
      </template>
    </li>
  </draggable>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  props: {
    tasks: {
      required: true,
      type: Array,
    },
  },
  watch: {
    tasks: {
      handler (v) {
        console.log(v)
        this.tasklist = v
      },
      deep: true,
    },
  },
  data () {
    return {
      tasklist: [],
    }
  },
  components: {
    draggable,
  },
  name: 'nested-draggable',
}
</script>
<style >
@import "./nested-draggable.scss";
</style>
