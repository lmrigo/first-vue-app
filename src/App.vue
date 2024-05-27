<template>
  <!-- Module 3 -->
  <h1>Module 3</h1>
  <count-vue :count="$store.getters.getCount"></count-vue>
  <br/>
  <button @click="$store.commit('inc')">Add</button>
  <button @click="$store.commit('dec')">Sub</button>
  <br/>
  <button @click="$store.dispatch('callWithDelay')">Add with delay</button>

</template>

<script>
import CountVue from './components/Count.vue'


export default {
  name: 'App',
  components: {
    CountVue
  },
  data() {
    return {
      // Module 3
    }
  },
  methods: {

  }
}
</script>

<style>
#app {
}
</style>
