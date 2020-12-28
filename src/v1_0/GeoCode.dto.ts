import { Longitude } from './Longitude.dto'
import { Latitude } from './Latitude.dto'


export class GeoCode {
  longitude: Longitude
  latitude: Latitude

  constructor(longitude: Longitude, latitude: Latitude) {
    this.longitude = longitude
    this.latitude = latitude
  }
}