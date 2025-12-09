import { Routes, Route, useNavigate, Link } from "react-router-dom"

export default function Quiz07() {

    let nai = useNavigate();

    return(

        <div>
            <div>
                {/* Link to 방식 */}
                <button><Link to="/">main</Link></button>
                <button><Link to="/info">info</Link></button>

                {/* navigate 방식 */}
                <button onClick={()=> {
                    nai("/mypage")
                }}>myPage</button>

                <button onClick={()=> {
                    nai("/cart")
                }}>cart</button>
            </div>

        <Routes>
            <Route path="/" element={<div>main</div>}></Route>
            <Route path="/info" element={<div>info</div>}></Route>
            <Route path="/mypage" element={<div>myPage</div>}></Route>
            <Route path="/cart" element={<div>cart</div>}></Route>
        </Routes>

        </div>

    )
}