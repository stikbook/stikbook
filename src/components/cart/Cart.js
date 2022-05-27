import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {ErrorMessage }  from "formik";

const validationSchema = Yup.object().shape({
    name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required("Name is Required!"),
    email: Yup.string()
    .matches(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/,"Invalid email address")
    .required("Email is Required!"),
    phone: Yup.number()
    .min(1000000000, 'Not Valid Phone Number!')
    .max(9000000000, 'Not Valid Phone Number!')
    .required("Phone Number is Required!"),
    password: Yup.string()
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    , "Minimum eight characters, at least one letter and one number")
    .required("Password is Required!"),
    gender: Yup.string()
    .required("Gender is Required!"),
    date: Yup.date()
    .required("Date is Required!"),
    cardtypes: Yup.string()
    .required("Card Type is Required!"),
    notes: Yup.string()
    .min(5, 'Too Short!')
    .max(500,"Too Long String!")
    .required("Notes Required!")
  });

const Cart = () => {
  //props.items.map(item=>{
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email:"",
          phone: "",
          password: "",
          gender: "",
          date: "",
          cardtypes: "",
          notes: "" 
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          alert("Submit Successfully!");
          //alert(JSON.stringify(values));
          console.log(values);
        }}>
        {({ values }) => (
          <Form>
            {/* <label><b>Price: {item}$</b></label>  */}
            <label>*Name: </label>
            <Field name="name" type="text"/>
            <ErrorMessage name="name"></ErrorMessage>
            <br /> <br />
            <label>*Email: </label>
            <Field name="email" type="text" />
            <ErrorMessage name="email"></ErrorMessage>
            <br /> <br />
            <label>*Phone: </label>
            <Field name="phone" type="number" />
            <ErrorMessage name="phone"></ErrorMessage>
            <br /> <br />
            {/* Testing193! */}
            <label>Password: </label>
            <Field name="password" type="password" />
            <ErrorMessage name="password"></ErrorMessage>
            <br /> <br />
            <label>*Gender: </label>
            <Field name="gender" value="male" type="radio" />
            <label>Male </label>
            <Field name="gender" value="female" type="radio" />
            <label>Female </label>
            <ErrorMessage name="gender"></ErrorMessage>
            <br /> <br />
            <label>*Date: </label>
            <Field name="date" type="date" />
            <ErrorMessage name="date"></ErrorMessage>
            <br /> <br />
            <label>*Card Types: </label>
            <Field name="cardtypes" as="select">
              <option value="0">Select Card Type</option>
              <option value="CreditCard">Credit Card</option>
              <option value="DebitCard">DebitCard</option>            
            </Field>
            <ErrorMessage name="cardtypes"></ErrorMessage>
            <br /> <br />
            <label>*Notes: </label>
            <Field name="notes" as="textarea" />
            <ErrorMessage name="notes"></ErrorMessage>
            <br /> <br />
            <button type="submit">Submit</button>        
          </Form>
        )}
      </Formik>
    </div>
  );
//})
};

export default Cart;

