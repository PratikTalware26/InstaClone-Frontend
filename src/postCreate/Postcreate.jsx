import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./postCreate.css";
// import axios from "axios";
// import {useNavigate} from "react-router-dom"

const Postcreate = () => {
  const [data, setData] = useState({
    author: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const { author, location, description } = data;

  const [myImage, setMyimage] = useState();

  const handleImage = (e) => {
    setMyimage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", myImage);
    formData.append("author", author);
    formData.append("location", location);
    formData.append("description", description);

    // formData.forEach((val, key)=>{
    //   console.log(val, key)
    // })

     await fetch("https://instaclone-app-zylu.onrender.com/posts", {
      method:"POST",
      body: formData
    });

    // const post= await res.json();

    // const head = {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // };

    // axios.post("/posts", formData, head);
    // console.log(myImage)
  };

  return (
    <div className="main-create">
      <form method="POST">
        <div>
          <input type="file" onChange={handleImage} />
        </div>
        <div className="auth-locate">
          <input
          className="author"
            type="text"
            name="author"
            value={data.author}
            placeholder="Author"
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            value={data.location}
            placeholder="location"
            onChange={handleChange}
          />
        </div>
        <div className="desc">
          <input
            type="text"
            name="description"
            value={data.description}
            placeholder="Description"
            onChange={handleChange}
          />
        </div>
          <Link to="http://localhost:3000/posts/">
        <div className="post-btn">
          <button type="submit" onClick={handleSubmit}>
            Post
          </button>
        </div>
          </Link>
      </form>
    </div>
  );
};

export default Postcreate;


  // enctype='multipart/form-data'

    // const res = await fetch("/posts", {
    //   method:"POST",
    //   headers:{
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     file, author, location, description
    //   })
    // });

    // const post= await res.json();