import axios from 'axios'

class Api {
  private axiosClient = axios.create({
    baseURL: 'https://playground.devskills.co/api/rest/',
  })

  fetchMeals = () => this.axiosClient.get('meals')
}

const api = new Api()

export default api
