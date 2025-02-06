import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AddSchema from "../services/schema";
import { addUsers } from "../services/UserServices";
import "../styles/AddUser.css";

function AddUser({ show, onClose }) {
  if (!show) return null;

  const addUser = async (user) => {
    const response = await addUsers(user);
  };
  return (
    <div className="addUserContainer">
      <div className="adduser-content">
        <h2>Add New Team Member</h2>
        <Formik
          initialValues={{ name: "", email: "", role: "" }}
          validationSchema={AddSchema}
          onSubmit={async (values) => {
            await addUser(values);
            onClose();
          }}
        >
          <Form className="inputContainer">
            <div className="name input">
              <label htmlFor="name">Name</label><br/>
              <Field style={{width:"60%", background:"black", color:"white", padding:"5px", borderRadius:"10px" }} type="text" id="name" name="name" placeholder="Name"/>
              <ErrorMessage name="name" component="div" style={{color:"red"}}/>
            </div>
            <div className="email input">
              <label htmlFor="email">Email</label><br/>
              <Field style={{width:"60%", background:"black", color:"white", padding:"5px", borderRadius:"10px" }} type="email" id="email" name="email" placeholder="Email"/>
              <ErrorMessage name="email" component="div" style={{color:"red"}}/>
            </div>
            <div className=" role input">
              <label htmlFor="role">Role</label><br/>
              <Field style={{width:"60%", background:"black", color:"white", padding:"5px", borderRadius:"10px" }}type="text" id="role" name="role" placeholder="Role"/>
              <ErrorMessage name="role" component="div" style={{color:"red"}}/>
            </div>
            <button className="closeButton" onClick={onClose}>Cancle</button>
            <button type="submit"className="AddMemberButton">Add Member</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default AddUser;



