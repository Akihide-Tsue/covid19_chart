import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NativeSelect, FormControl } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { fetchAsyncGetDaily } from "../covidSlice";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(3),
    minWidth: 320,
  },
}));

const SwitchCountry: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  //TODO:全世界、地域（アジア、北米など）で分けた場合も作成
  const countries = [ "japan", "us", "brazil", "china", "france", "germany", "india", "italy", "new zealand", "russia", "spain", "sweden", "taiwan", "thailand", "united kingdom", ];
  const style = { marginBottom: "15px" };

  return (
    <FormControl className={classes.formControl}>
      <div>13:00-15:00頃にAPIのメンテナンス中の場合は利用できないことがあります。</div>
      <div style={style}>
        API : <a href="https://documenter.getpostman.com/view/10808728/SzS8rjbc">
          https://documenter.getpostman.com/view/10808728/SzS8rjbc
        </a>
      </div>

      <NativeSelect
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => dispatch(fetchAsyncGetDaily(e.target.value))}
      >
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default SwitchCountry;
