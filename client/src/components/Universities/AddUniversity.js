import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
	name: "",
    courses: "",
    facilities: "",
    fee: 0,
    lat: 0,
    long: 0,
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "",
   courses: "",
   facilities: "",
   fee: 0,
   lat: 0,
   long: 0, });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Record</h3>
     <form onSubmit={onSubmit} style={{"margin-top":"50px"}}>
       <div className="form-group">
         <label htmlFor="name">Name</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="courses">Courses</label>
         <input
           type="text"
           className="form-control"
           id="courses"
           value={form.courses}
           onChange={(e) => updateForm({ courses: e.target.value })}
         />
       </div>
	   <div className="form-group">
         <label htmlFor="facilities">Facilities</label>
         <input
           type="text"
           className="form-control"
           id="facilities"
           value={form.facilities}
           onChange={(e) => updateForm({ facilities: e.target.value })}
         />
       </div>
	   <div className="form-group">
         <label htmlFor="fee">Fee Structure</label>
         <input
           type="text"
           className="form-control"
           id="fee"
           value={form.fee}
           onChange={(e) => updateForm({ fee: Number(e.target.value) })}
         />
       </div>
	   <div className="form-group">
         <label htmlFor="lat">Latitude</label>
         <input
           type="text"
           className="form-control"
           id="lat"
           value={form.lat}
           onChange={(e) => updateForm({ lat: Number(e.target.value) })}
         />
       </div>
	   <div className="form-group">
         <label htmlFor="long">Longitude</label>
         <input
           type="text"
           className="form-control"
           id="long"
           value={form.long}
           onChange={(e) => updateForm({ long: Number(e.target.value) })}
         />
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Create person"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}