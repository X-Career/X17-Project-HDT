import React, { useState } from "react";
import css from "../styles/FormUpdateInfo.module.scss";
import Link from "next/link";

const FormUpdateInfo = ({}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    bio: "",
    gender: "",
    age: "",
    dateOfBirth: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const valueInput = (e) => {
    e.target.value;
  };

  return (
    <div className={css.update_form}>
      <label>
        <span>First Name</span>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          placeholder={formData.firstName ? formData.firstName : valueInput}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Last Name</span>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          placeholder={formData.lastName ? formData.lastName : valueInput}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Username</span>
        <input
          type="text"
          name="username"
          value={formData.username}
          placeholder={formData.username ? formData.username : valueInput}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Bio</span>
        <input
          type="text"
          name="bio"
          value={formData.bio}
          placeholder={formData.bio ? formData.bio : valueInput}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Gender</span>
        <input
          type="text"
          name="gender"
          value={formData.gender}
          placeholder={formData.gender ? formData.gender : valueInput}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Age</span>
        <input
          type="number"
          name="age"
          value={formData.age}
          placeholder={formData.age ? formData.age : valueInput}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Date Of Birth</span>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          placeholder={formData.dateOfBirth ? formData.dateOfBirth : valueInput}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Password</span>
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder={formData.password ? formData.password : valueInput}
          onChange={handleChange}
        />
      </label>
      <Link href=''>
      <button  >Save</button>
      </Link>
      <Link href="/">
        <button>Cancel</button>
      </Link>
    </div>
  );
};

export default FormUpdateInfo;
