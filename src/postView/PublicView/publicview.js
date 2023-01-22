// import axios from "axios";
import { useEffect, useState } from "react";
import "./publicview.css"

const PublicView=()=>{
    const [user, setUser]= useState(null);

    const fetchPosts= async ()=>{
        const response= await fetch("https://instaclone-app-zylu.onrender.com/posts")
        setUser(await response.json());
    }

    useEffect(()=>{
        fetchPosts();
    },[])

    if(user===null){
        return <h1>Loading...</h1>
    }

    console.log(user.result)

 return(
   <div className="post-container">
    {
        user.result.map((val, i)=>{
            return(
                <div className="post-card" key={new Date().getTime().toString()}>
                    <section className="row-1">
                    <section className="name-location">
                        <div className="name">{val.author}</div>
                        <div className="location">{val.location}</div>
                    </section>
                    <section className="option"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></section>
                    </section>

                    <section className="row-2 image-container">
                        <img src={`https://instaclone-app-zylu.onrender.com/images/${val.image}`} alt={`img-logo ${i}`}/>
                    </section>

                    <section className="row-3">
                        <div className="heart-date">
                            <span><i className="fa fa-heart" aria-hidden="true"></i></span>
                            <span className="share"><i className="fa fa-paper-plane" aria-hidden="true"></i></span>
                            <span className="date">{val.date}</span>
                        </div>
                        <div className="likes">{val.likes}</div>
                        <div className="description">{val.description}</div>
                    </section>
                </div>
            )
        })

    }
   </div>
 )
}

export default PublicView;