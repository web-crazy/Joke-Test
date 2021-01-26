<template>
  <div v-if="currentJoke" class="container details">
    <div class="joke-info">
      <div class="joke-card">
        <div class="joke-title">
          {{ currentJoke.title || 'Random Title' }}
        </div>
        <div class="joke-description">
          {{ currentJoke.value }}
        </div>
      </div>

      <div class="thumbnails">
        <div class="thumb-wrapper up">
          <img src="../../assets/images/hand-up.svg" width="22" />
        </div>
        <div class="thumb-wrapper down">
          <img src="../../assets/images/hand-down.svg" width="22" />
        </div>
      </div>
    </div>

    <div class="top-jokes">
      <div class="title">The Top 10 Jokes This Week</div>
      <div class="joke-item">Smoking Joke</div>
      <div class="joke-item">My Boss Joke</div>
      <div class="joke-item">Dirty Millionare Joke</div>
      <div class="joke-item">The annoying neighbour</div>
      <div class="joke-item">Knock Knock</div>
      <div class="joke-item">Why Tyson Lisps</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'JokeDetail',
  methods: {
    ...mapActions(['getJoke'])
  },
  computed: {
    ...mapState(['currentJoke'])
  },
  mounted () {
    const jokeId = this.$route.params.id
    this.getJoke(jokeId)
  }
}
</script>

<style lang="scss" src="./index.scss" scoped />
