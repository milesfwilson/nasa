import {api} from './AxiosService'
import {AppState} from '../AppState'
class PhotoService {
  async getPhoto(photo) {
    try {
AppState.query = photo
photo = AppState.query
const res = await api.get('/planetary/earth/imagery?lon=' + photo.longitude + '&lat=' + photo.latitude + '&date=' + photo.date +'&dim=0.15&api_key=NuRH4xxA2ILh197LNIM6GvJIWXhls2pJUwlhAbgi')
AppState.result = res.config.url
console.log(AppState.result);
    } catch (error) {
      console.error(error)
    }
  }
}
export const photoService = new PhotoService()