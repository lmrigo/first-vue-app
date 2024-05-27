<template>
  <button @click="$emit('changeCount')">{{ name }}</button>
</template>
<script>
export default {
  name: 'Button',
  props: ['count', 'name'],
  emits: ['changeCount']
}
</script>