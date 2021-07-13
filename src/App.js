
import './App.css';
import MyHeader from './components/MyHeader'
import Footer from './components/Footer'
import {React,useState,useEffect} from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';
import heart from './assets/heart.png'
import diamond from './assets/dimond.jpg'
import paan from './assets/paan.png'

function App() {
  const combination05 = ["001","002","110","112","200","211"];
  const [openLogin, setOpenLogin] = useState(false);
  const [openGame, setOpenGame] = useState(false);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loggedInUser,setLoggedInUser] = useState("");
    const [balance,setBalance] = useState(0);
    
    const setImg = [heart,diamond,paan];
    const [img1 , setImg1] = useState();
    const [img2 , setImg2] = useState();
    const [img3 , setImg3] = useState();

    const [point05,setPoint05] = useState("0");
    const setImage1 = () => {
        let index = Math.floor(Math.random() * 3);
        setImg1(setImg[index]);
        setPoint05(point05+index);
        
        combination05.map(s => {
          if(s===point05) {
            setBalance(balance + 0.5);
          }
        })
    }
    const setImage2 = () => {
      let index = Math.floor(Math.random() * 3);
      setImg2(setImg[index])
      setPoint05(point05 + index);
      
      alert(point05)
        combination05.map(s => {
          if(s===point05) {
            setBalance(balance + 0.5);
          }
        })
    }
    const setImage3 = () => {
      let index = Math.floor(Math.random() * 3);
      setImg3(setImg[index])
      setPoint05(point05 + index);
      
      alert(point05)
        combination05.map(s => {
          if(s===point05) {
            setBalance(balance + 0.5);
          }
        })
    }

    const closeModalLogin = () => setOpenLogin(false);
    const closeModalGame = () => {
      setOpenGame(false);
      setImg1("");
      setImg2("");
      setImg3("");
      setPoint05("");
    }

    const loginNow = () => {
        if(typeof(Storage) !== "undefined") {
            let pass = localStorage.getItem(email);
            if(pass !== "undefined") {
                setLoggedInUser(email);
                let bal = localStorage.getItem("balance");
                setBalance(Number(bal));
            } else {
                localStorage.setItem(email,password);
                setBalance(0);
            }
        }
        closeModalLogin();
    }

  return (
    <>
      <MyHeader balance={balance}/>

      <div className="main-content">
        <h2>Welcome Back! {loggedInUser}</h2>
        <div className="btn-container">
            <Play>
            <button type="button" className="button" onClick={() => setOpenGame(o => !o)}>
             Click To Play
            </button>
            </Play>
            <Login show={loggedInUser}>
            <button type="button" className="button" onClick={() => setOpenLogin(o => !o)}>
             Login/SignUp
            </button>
            </Login>
        </div>
      
      <Popup open={openLogin} closeOnDocumentClick onClose={closeModalLogin}>
        <div className="login-container">

            <form action="#" className="login-form" onSubmit={loginNow}>
                <div className="input-field">
                    <input type="email" placeholder="Email" value={email} onChange={e=>{ setEmail(e.target.value); }}/>
                </div>
                <div className="input-field" >
                    <input type="password" placeholder="passoword" value={password} onChange={e=>{ setPassword(e.target.value); }}/>
                </div>
                <div className="input-field">
                   <button className="close" onClick={closeModalLogin}>Close</button>
                   <button type="submit" id="login">Login Now</button>
                </div>
            </form>
        </div>
      </Popup>
      <Popup open={openGame} closeOnDocumentClick onClose={closeModalGame}>
        <div className="game-container">
          <div className="box-container">
              <Box><img src={img1} alt=""/></Box>
              <Box><img src={img2} alt=""/></Box>
              <Box><img src={img3} alt=""/></Box>
          </div>
          <div className="play-btn-container">
              <button onClick={setImage1}>Click me</button>
              <button onClick={setImage2}>Click me</button>
              <button onClick={setImage3}>Click me</button>
          </div>
        </div>
      </Popup>
    </div>

      <Footer/>
    </>
  );
}

export default App;

const Play = styled.div`
    margin: auto 20px;
    
`;

const Login = styled.div`
    margin: auto 20px;
    display: ${props => props.show===""?"block":"none"};
`;

const Box = styled.div`
  width: 180px;
  height: 180px;
  border: 2px solid gray;
  img {
    position: relative;
    width: 170px;
    height: 180px;
    object-fit: contain;

  }
`;
