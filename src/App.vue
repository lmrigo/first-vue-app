<template>
  <!-- Module 3 -->
  <h1>Module 3</h1>
  <count-vue :count="count"></count-vue>
  <br/>
  <button-vue name="Add" @changeCount="count +=1"></button-vue>
  <button-vue name="Sub" @changeCount="count -=1"></button-vue>

  <!-- Module 2 -->
  <h1>Module 2</h1>
  <greet-vue></greet-vue>
  <GreetVue name="Sam"></GreetVue>
  <GreetVue name="Mike"></GreetVue>
  <GreetVue :name="name"></GreetVue>

  <!-- Emitter -->
  <button @click="isPopupVisible = true">Show Popup</button>
  <popup-vue v-if="isPopupVisible" @close="isPopupVisible = false" />

  <!-- Slots -->
  <card-vue>This is our first slot</card-vue>
  <card-vue><h3>This is our second slot</h3></card-vue>
  <card-vue><img src="./assets/logo.png"/></card-vue>
  <card-vue>
    <template v-slot:header>
      <h2>This is card heading</h2>
    </template>
    <template v-slot:default>
      <img src="./assets/logo.png"/>
    </template>
    <template v-slot:footer>
      <i>This is card footer</i>
    </template>
  </card-vue>

  <!-- Module 1 -->
  <h1>Module 1</h1>
  <p>{{ greeting }} {{ name }}</p>
  <p v-text="question"> </p>
  <p v-html="htmlData" :id="id" :class="id" :style="style"></p>

  <button @click="name = 'Superman'">Change name</button>

  <!-- Counter app -->
  <h2>{{ count }}</h2>
  <button @click="increment(2)">Add</button>
  <button @click="decrement(3)">Sub</button>

  <h2 v-if="num === 0">This is zero</h2>
  <h2 v-else-if="num < 0">This is negative</h2>
  <h2 v-else-if="num > 0">This is positive</h2>
  <h2 v-else>This is not a number</h2>
  <h2 v-show="isVisible">Data is visible</h2>
  <!-- v-show is always rendered, but hidden when false -->
  <h2 v-if="isVisible">Data is visible</h2>

  <!-- template allows for grouping without creating a DOM element (eg div)-->
  <template v-if="fruitVisible">
    <h2>Apple</h2>
    <h2>Banana</h2>
    <h2>Pineapple</h2>
  </template>

</template>

<script>
import ButtonVue from './components/Button.vue'
import CardVue from './components/Card.vue'
import CountVue from './components/Count.vue'
import GreetVue from './components/Greet.vue'
import PopupVue from './components/Popup.vue'


export default {
  name: 'App',
  components: {
    GreetVue,
    PopupVue,
    CardVue,
    CountVue,
    ButtonVue
  },
  data() {
    return {
      // Module 3
      count: 0,

      // Module 2
      name: 'Superman',
      isPopupVisible: false,

      // Module 1
      //name: 'Mike',
      greeting: 'Hi',
      question: 'How are you?',
      htmlData: '<b>I am HTML</b>',
      id: 'news',
      style: {
        color: 'red',
        backgroundColor: 'black'
      },
      //count: 0,
      num: 'NaN',
      isVisible: true,
      fruitVisible: true
    }
  },
  methods: {
    // Module 1
    increment(num = 1) {
      this.count += num
    },
    decrement(num = 1) {
      this.count -= num
    },

  }
}
</script>

<style>
#app {
}
</style>
