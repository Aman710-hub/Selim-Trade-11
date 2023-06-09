import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../redux/admin/adminSlice";
import { useState } from "react";
import styles from "./Projects.module.scss";

import {
  createProject,
  getAllProjects,
} from "../../../redux/admin/projectsSlice";
import PostList from "../../components/WorksList/WorksList";
const Projects = () => {
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState(null);
  const handleChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleClick = (e) => {
    const formData = new FormData();
    formData.append("image", photo);
    if (photo) {
      dispatch(createProject(formData));
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={() => dispatch(logOut())}>out</button>
      <div className={styles.add_work}>
        <input
          onChange={handleChange}
          type="file"
          accept="image/*"
          className={styles.file_input}
        />
        <button onClick={handleClick}>Создать работу ✨</button>
      </div>
      <PostList />
    </div>
  );
};

export default Projects;
