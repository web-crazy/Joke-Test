<template>
  <div class="container jokes-list">
    <div class="buttons-container">
      <div
        v-for="(category, index) in categories"
        class="button-container"
        :key="index"
      >
        <Button color="danger">{{ category }}</Button>
      </div>
      <div class="button-container">
        <Button color="orange-1">Dad Jokes</Button>
      </div>
      <div class="button-container">
        <Button color="orange-2">Christmas Jokes</Button>
      </div>
      <div class="button-container">
        <Button color="yellow">Job Jokes</Button>
      </div>
      <div class="button-container">
        <Button color="light-green">Birthday Jokes</Button>
      </div>
      <div class="button-container">
        <Button color="primary">Social Jokes</Button>
      </div>
      <div class="button-container">
        <Button color="blue">Puns</Button>
      </div>
      <div class="button-container">
        <Button outlined>View All</Button>
      </div>
    </div>

    <div class="cards-container">
      <Card
        v-for="(joke, index) in jokes"
        :key="index"
        :title="joke.title || 'Random Title'"
        @details="viewDetails(joke.id)"
      >
        {{ joke.value }}
      </Card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from '@/components/button/index.vue'
import Card from '@/components/card/index.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'JokeList',
  components: {
    Button,
    Card
  },
  methods: {
    ...mapActions(['getCategories', 'addJokes']),
    viewDetails (id) {
      this.$router.push(`/${id}`)
    }
  },
  computed: {
    ...mapState(['categories', 'jokes'])
  },
  mounted () {
    this.getCategories()
    this.addJokes()
  }
}
</script>

<style src="./index.scss" lang="scss" scoped />
