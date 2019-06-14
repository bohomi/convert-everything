import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FilledInput from "@material-ui/core/FilledInput";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

import { LENGTH_COVERSIONS } from "../utils/lengthConversions";

const measurements = [
  { id: 1, value: "Kilometers" },
  { id: 2, value: "Meters" },
  { id: 3, value: "Centimeters" }
];

export default function LengthConverter(props) {
  const [values, setValues] = React.useState({
    from: { value: "1", unit: "Kilometers" },
    to: { value: LENGTH_COVERSIONS["KilometersToMeters"](1), unit: "Meters" }
  });

  const handleSelectFromChange = event => {
    const fromUnit = event.target.value;
    const toValue = LENGTH_COVERSIONS[fromUnit + "To" + values.to.unit](
      values.from.value
    );

    setValues({
      from: { value: values.from.value, unit: fromUnit },
      to: { value: toValue, unit: values.to.unit }
    });
  };

  const handleFromValueChange = event => {
    const fromValue = event.target.value;
    const toValue =
      fromValue.trim() === ""
        ? ""
        : LENGTH_COVERSIONS[values.from.unit + "To" + values.to.unit](
            fromValue
          );

    setValues({
      from: { value: fromValue, unit: values.from.unit },
      to: { value: toValue, unit: values.to.unit }
    });
  };

  const handleSelectToChange = event => {
    const toUnit = event.target.value;
    const fromValue = LENGTH_COVERSIONS[toUnit + "To" + values.from.unit](
      values.to.value
    );

    setValues({
      from: { value: fromValue, unit: values.from.unit },
      to: { value: values.to.value, unit: toUnit }
    });
  };

  const handleToValueChange = event => {
    const toValue = event.target.value;

    const fromValue =
      toValue.trim() === ""
        ? ""
        : LENGTH_COVERSIONS[values.to.unit + "To" + values.from.unit](toValue);

    setValues({
      from: { value: fromValue, unit: values.from.unit },
      to: { value: toValue, unit: values.to.unit }
    });
  };

  return (
    <div>
      <div>
        <InputLabel htmlFor="from-measurement">From</InputLabel>
        <Select
          value={values.from.unit}
          onChange={handleSelectFromChange}
          input={<FilledInput name="from-measurement" id="from-measurement" />}
        >
          {measurements.map(measurement => (
            <MenuItem key={measurement.id} value={measurement.value}>
              {" "}
              {measurement.value}{" "}
            </MenuItem>
          ))}
        </Select>
        <TextField
          id="from-text-field"
          //className={classes.textField}
          value={values.from.value}
          onChange={handleFromValueChange}
          margin="normal"
        />
      </div>

      <div>
        <InputLabel htmlFor="to-measurement">To</InputLabel>
        <Select
          value={values.to.unit}
          onChange={handleSelectToChange}
          input={<FilledInput name="to-measurement" id="to-measurement" />}
        >
          {measurements.map(measurement => (
            <MenuItem key={measurement.id} value={measurement.value}>
              {" "}
              {measurement.value}{" "}
            </MenuItem>
          ))}
        </Select>
        <TextField
          id="to-text-field"
          //className={classes.textField}
          value={values.to.value}
          onChange={handleToValueChange}
          margin="normal"
        />
      </div>
    </div>
  );
}
