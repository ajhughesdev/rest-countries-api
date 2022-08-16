import styles from '../styles/CountryCardItem.module.scss'

const CountryCardItem = (props) => {
  return (
    <>
      <img
        className={styles.flagImg}
        loading='lazy'
        role='img'
        // width='264'
        // height='160'
        src={props.flag}
        alt={`${props.name}'s flag`}
      />
      <div className='info'>
        <h2>{props.name}</h2>
        <ul>
          <li>
            <span>Population: </span>
            {props.population.toLocaleString()}
          </li>
          <li>
            <span>Region: </span>
            {props.region}
          </li>
          <li>
            <span>Capital: </span>
            {props.capital || 'None'}
          </li>
        </ul>
      </div>
    </>
  )
}
export default CountryCardItem
