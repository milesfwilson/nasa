<template>
<div class="col-2"></div>
  <div class="Results col-8" v-show="search.date">


<img :src="`https://api.nasa.gov` + result" class="img-fluid shadow-lg" alt="">
<p>{{search.latitude}}&deg;, {{search.longitude}}&deg;</p>
<h6>{{search.date}}</h6>
  </div>
  <div class="col-2"></div>
</template>


<script>
import { AppState } from '../AppState'
import { computed } from 'vue'
export default {
  name: 'Results',
  setup(){
    return {
      result: computed(() => AppState.result),
      search: computed(() => AppState.query)

    }
  },
  components:{ }
}
</script>


<style lang="scss" scoped>

</style>