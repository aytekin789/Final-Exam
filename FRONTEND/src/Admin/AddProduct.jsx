import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import { useNavigate } from "react-router-dom";

function creatElement(obj) {
  const requestOptions = {
    method: "POST",
    Headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  };
  fetch("http://localhost:3000/", requestOptions).then((res) => res.json());
}
const AddProducts = () => {
  const navigate = useNavigate();
  return (
    <>
      <Formik
        initialValues={{ image: "", name: "", price: "" }}
        validationSchema={Yup.object({
          image: Yup.string().required("Required"),
          name: Yup.string().required("Required"),
          price: Yup.string().required("Required"),
        })}
        onSubmit={(values) => {
          creatElement(values);
          navigate("/admin");
        }}
      >
        <Form>
          <label htmlFor="image">PHOTO</label>
          <Field name="image" type="text" />
          <ErrorMessage name="image" />

          <label htmlFor="name">NAME</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" />

          <label htmlFor="price">PRICE</label>
          <Field name="price" type="number" />
          <ErrorMessage name="price" />

          <button type="submit">ADD</button>
        </Form>
      </Formik>
    </>
  );
};
export default AddProducts;