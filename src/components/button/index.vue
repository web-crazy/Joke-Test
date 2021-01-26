<template>
  <div :class="`button-wrapper custom-${color} size-${size} ${outlined ? 'outlined' : ''}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'button',
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    outlined: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'normal'
    }
  }
}
</script>

<style src="./index.scss" lang="scss" scoped />
