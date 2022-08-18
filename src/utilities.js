import axios from 'axios'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export const getCountries = () => {
  return axios.get('https://restcountries.com/v2/all')
}

export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation()
    let navigate = useNavigate()
    let params = useParams()

    return <Component {...props} router={{ location, navigate, params }} />
  }

  return ComponentWithRouterProp
}

