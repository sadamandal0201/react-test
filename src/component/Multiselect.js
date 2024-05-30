import {
  Box,
  Checkbox,
  FormControl,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  styled,
  TextField,
  FormHelperText,
} from "@mui/material";
import React, { useState, useEffect } from "react";

const useStyles = styled((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
  },
}));

function Multiselect({
  options,
  handleChange = () => {},
  value = [],
  placeholder,
  name,
}) {
  const classes = useStyles();
  const [selected, setSelected] = useState(value || []);
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [customOption, setCustomOption] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [validationError, setValidationError] = useState(null);

  const handleOnChange = (event) => {
    const value = event.target.value;
    setSelected(value);
    handleChange(value);
    if (value.includes("Other")) {
      setShowCustomInput(true);
      setMenuOpen(false);
    } else {
      setShowCustomInput(false);
    }
    setValidationError(null);
    setCustomOption("");
  };

  const handleCustomOptionChange = (event) => {
    setCustomOption(event.target.value);
  };

  const handleCustomOptionAdd = () => {
    if (
      customOption &&
      !selected.includes(customOption) &&
      customOption.trim() !== ""
    ) {
      setSelected([
        ...selected.filter((option) => option !== "Other"),
        customOption,
      ]);
      handleChange([
        ...selected.filter((option) => option !== "Other"),
        customOption,
      ]);
      setShowCustomInput(false);
    }
  };

  return (
    <Box
      sx={{
        marginTop: "10px",
      }}
    >
      <FormControl
        className={classes.formControl}
        sx={{
          width: "100%",
        }}
        name="categories"
      >
        <Select
          labelId="multiple-select-label"
          multiple
          value={selected}
          onChange={handleOnChange}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={{ PaperProps: { style: { maxHeight: 224, width: 250 } } }}
          sx={{
            width: "100%",
            background: "#a1a1a138",
          }}
          placeholder={placeholder}
          open={menuOpen}
          onOpen={() => {
            if (!selected.length) {
              setValidationError(
                `Select at least one ${
                  name === "categories" ? "category" : "eCommerce platform"
                }`
              );
            } else {
              setValidationError(null);
            }
            setMenuOpen(true);
          }}
          onClose={() => setMenuOpen(false)}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              <ListItemText primary={option} />
              <ListItemIcon>
                <Checkbox checked={selected.indexOf(option) > -1} />
              </ListItemIcon>
            </MenuItem>
          ))}
        </Select>
        <FormHelperText
          sx={{
            color: "#8387c3",
            fontWeight: 600,
            fontSize: "14px",
          }}
        >
          {validationError}
        </FormHelperText>
      </FormControl>
      {showCustomInput && (
        <TextField
          placeholder="Other"
          value={customOption}
          onChange={handleCustomOptionChange}
          onBlur={handleCustomOptionAdd}
          onKeyDown={(event) => {
            if (event.key === "Enter") handleCustomOptionAdd();
          }}
          autoComplete="off"
        />
      )}
    </Box>
  );
}

export default Multiselect;
