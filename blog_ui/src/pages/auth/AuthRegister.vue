<template>
  <q-page class="overlay-heavy force-center"> </q-page>
</template>

<script>
export default {
  name: 'AuthRegister',
};
</script>

<style scoped lang="sass">
.overlay-heavy
  width: 100%
  min-height: 100%
  height: 100vh
  overflow: auto
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-color: rgba(255,255,255, 0.50)
  z-index: 2
  opacity: 1

.logo-style
  height: 80px

.login-box
  background: #ffffff 0% 0% no-repeat padding-box
  border: 1px solid #707070
  border-radius: 10px 50px 10px 50px
  opacity: 0.62
  width: auto
  height: auto

.force-center
  display: flex
  justify-content: center
  align-items: center
</style>
