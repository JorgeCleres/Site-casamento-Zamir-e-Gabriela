<template>
  <div>
    <b-overlay :show="loadingButton" rounded="sm">
      <b-card :aria-hidden="loadingButton">
        <slot></slot>
      </b-card>
    </b-overlay>
  </div>
</template>

<script>
  export default {
    props: ['loadingButton'],
    data() {
      return {
        show: false
      }
    }
  }
</script>