<template>
<div class="container-fluid text-center">
<div class="row bg-dark text-light">
  <div class="col-12">
    <h3 class="my-3">Nasa Observatory</h3>
  </div>
</div>
<div class="row">
  <search/>
</div>
<div class="row">
  <results/>
</div>
</div>

</template>

<script>
import { AppState } from "./AppState"
import { computed } from 'vue'
import Search from './components/Search'
import Results from './components/Results'

export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Search, Results
  }
}



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
