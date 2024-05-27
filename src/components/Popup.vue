<template>
  <h3>This is popup.</h3>
  <button @click="$emit('close')">Close</button>
</template>

<script>

export default {
  name: 'Popup',
  emits: ['close']
}
</script>
