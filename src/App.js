import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  Box,
  Button,
  Container,
  FormLabel,
  Typography,
  FormControl,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import Multiselect from "./component/Multiselect";
import Sidebar from "./component/Sidebar";
import { optionsCategories, optionsEcommerce, optionsStoreType } from "./utils";

function App() {
  return (
    <Formik
      initialValues={{
        businessName: "",
        categories: [],
        storeType: "",
        ecommerce: [],
      }}
      validate={(values) => {
        const errors = {};
        if (!values.businessName) {
          errors.businessName = "Business name is required";
        }
        if (!values.storeType) {
          errors.storeType = "Select a store type";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert("Success");
          setSubmitting(false);
        }, 400);
      }}
      validateOnBlur={true}
      validateOnChange={false}
    >
      {({ isSubmitting, values, errors, setFieldError }) => (
        <Form>
          <section>
            <Container sx={{ padding: "0 !important" }}>
              <Box
                sx={{
                  display: "flex",
                  padding: "0",
                  width: "100%",
                  "@media screen and (max-width: 767px)": {
                    flexWrap: "wrap",
                    padding: "0",
                  },
                }}
              >
                <Sidebar />
                <Box
                  sx={{
                    padding: "40px",
                    width: "calc(100% - 350px)",
                    flex: "0 0 calc(100% - 350px)",
                    "@media screen and (max-width: 767px)": {
                      width: "100%",
                      flex: "0 0 100%",
                      padding: "30px",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0 0 30px",
                    }}
                  >
                    <Box>1. Business Info</Box>
                    <Box
                      sx={{
                        width: "50%",
                        height: "3px",
                        background: "#000",
                      }}
                    ></Box>
                    <Box>2. Confirmation</Box>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "22px",
                      fontWeight: "500",
                      color: "#303030",
                      textTransform: "capitalize",
                      marginBottom: "30px",
                    }}
                  >
                    tell us about yourself
                  </Typography>

                  <Box
                    sx={{
                      paddingBottom: "25px",
                    }}
                  >
                    <FormLabel
                      sx={{
                        marginBottom: "6px",
                        display: "block",
                        fontSize: "14px",
                      }}
                    >
                      What is your business name?
                    </FormLabel>
                    <Field name="businessName">
                      {({ field }) => (
                        <TextField
                          {...field}
                          sx={{
                            width: "100%",
                            background: "#a1a1a138",
                          }}
                          id="outlined-basic"
                          variant="outlined"
                          placeholder="Your business name..."
                        />
                      )}
                    </Field>
                    <ErrorMessage
                      name="businessName"
                      component="div"
                      className="error-message"
                    />
                  </Box>

                  <Box
                    sx={{
                      paddingBottom: "25px",
                    }}
                  >
                    <FormLabel
                      sx={{
                        marginBottom: "6px",
                        display: "block",
                        fontSize: "14px",
                      }}
                    >
                      What do you want to sell?
                    </FormLabel>
                    <Field name="categories">
                      {({ field }) => (
                        <Multiselect
                          {...field}
                          options={optionsCategories}
                          placeholder="Select categories"
                          name={"categories"}
                        />
                      )}
                    </Field>
                    <ErrorMessage
                      name="categories"
                      component="div"
                      className="error-message"
                    />
                  </Box>

                  <Box
                    sx={{
                      paddingBottom: "25px",
                    }}
                  >
                    <FormLabel
                      sx={{
                        marginBottom: "6px",
                        display: "block",
                        fontSize: "14px",
                      }}
                    >
                      In what type of stores are you going to use Vaultik?
                    </FormLabel>

                    <Field name="storeType">
                      {({ field }) => (
                        <FormControl
                          sx={{
                            width: "100%",
                            background: "#a1a1a138",
                          }}
                        >
                          <Select
                            {...field}
                            defaultValue=""
                            onBlur={field.onBlur}
                            onFocus={field.onFocus}
                          >
                            {optionsStoreType.map((option) => (
                              <MenuItem key={option} value={option}>
                                {option}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      )}
                    </Field>
                    <ErrorMessage
                      name="storeType"
                      component="div"
                      className="error-message"
                    />
                  </Box>

                  {values.storeType === "eCommerce" && (
                    <Box
                      sx={{
                        paddingBottom: "25px",
                      }}
                    >
                      <FormLabel
                        sx={{
                          marginBottom: "6px",
                          display: "block",
                          fontSize: "14px",
                        }}
                      >
                        What eCommerce are you using?
                      </FormLabel>
                      <Field name="ecommerce">
                        {({ field }) => (
                          <Multiselect
                            {...field}
                            options={optionsEcommerce}
                            placeholder="Select eCommerce platform"
                            name={"ecommerce"}
                          />
                        )}
                      </Field>
                      <ErrorMessage
                        name="ecommerce"
                        component="div"
                        className="error-message"
                      />
                    </Box>
                  )}

                  <Box
                    sx={{
                      width: "100%",
                    }}
                  >
                    <Button
                      type="submit"
                      sx={{
                        width: "100%",
                        height: "55px",
                        fontWeight: "600",
                        "&:disabled": {
                          backgroundColor: "#1976d2",
                          color: "grey",
                        },
                      }}
                      variant="contained"
                      disabled={isSubmitting}
                    >
                      Next
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Container>
          </section>
        </Form>
      )}
    </Formik>
  );
}

export default App;
