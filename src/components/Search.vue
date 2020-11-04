<template>
  <div class="Search col-12 d-flex justify-content-center">
    
<form @submit.prevent="getPhoto()" class="form-inline my-2">
  <div>

  <label for="lat">Latitude</label>
  <input type="text" name="lat" class="form-control m-2" placeholder="Latitude" v-model="state.photo.latitude">
  </div>
  <div>

  <label for="lon">Longitude</label>

  <input type="text" name="lon" class="form-control m-2" placeholder="Longitude" v-model="state.photo.longitude">
  </div>
  <div>

  <label for="date">Date</label>
<div>

  <input name="date" class="form-control m-2" placeholder="YYYY-MM-DD" v-model="state.photo.date">
  <button type="submit" class="btn btn-primary">Search</button>
</div>

  </div>

</form>
  </div>
</template>


<script>
import { reactive } from "vue"
import { photoService } from '../Services/PhotoService.js'
export default {
  name: 'Search',
  setup(){
    const state = reactive({
photo: {
  latitude: '',
  longitude:'',
  date: ''
}
    })
    return {
      state,
      getPhoto() {
        photoService.getPhoto(state.photo)
      }
    }
  },
  components:{}
}
</script>


<style lang="scss" scoped>

</style>