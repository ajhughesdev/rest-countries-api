import { useContext } from "react";

import { AppContext } from "../App.provider";

const CountryCardItem = (props) => {
  const { theme } = useContext(AppContext);

  return (
    <article
      className={theme === "light" ? "light" : ""}
      onClick={props.onClick}
    >
      <img
        className="flagImg"
        height="160"
        width="264"
        src={props.flag}
        alt={`${props.name}'s flag`}
      />
      <div className="info">
        <h2 title={props.name}>{props.name}</h2>
        <ul>
          <li>
            <span className="info-item">Population: </span>
            {props.population.toLocaleString()}
          </li>
          <li>
            <span className="info-item">Region: </span>
            {props.region}
          </li>
          <li>
            <span className="info-item">Capital: </span>
            {props.capital || "None"}
          </li>
        </ul>
      </div>
    </article>
  );
};
export default CountryCardItem;
