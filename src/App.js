// import Header from "./postView/Header/Header";
import LandingPage from "./LandingPage/LandingPage";
import Posts from "./postView/Posts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Postcreate from "./postCreate/Postcreate";
// import Header from "./postView/Header/Header";

const App=()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage/>}></Route>
                    <Route path="/posts" element={<Posts/>}></Route>
                    <Route path="/posts/create" element={<Postcreate/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;