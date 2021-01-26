<template>
  <div class="card-wrapper">
    <div class="card-header">
      <img src="../../assets/images/green-light-copy.svg" />
      <div class="title">{{ title }}</div>
    </div>

    <div class="card-body">
      <slot></slot>
    </div>

    <div class="card-footer">
      <div @click="seeDetails" class="more-action">
        <span>See stats</span>
        <img src="../../assets/images/arrow-right.svg" width="16" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    seeDetails () {
      this.$emit('details')
    }
  }
}
</script>

<style src="./index.scss" lang="scss" scoped />
