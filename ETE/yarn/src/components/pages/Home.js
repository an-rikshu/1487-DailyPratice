import React, { useState, useEffect } from "react";
import tech from "./amongus.webp";
import tech2 from "./bgmi.jpg";
import tech3 from "./COD.jpg";
import ds from './valorant.jpg'
import wd from './nfs.jpg'
import sales from './csgo.jpg';
const Home = () => {
  return (
    <div  style={{backgroundImage:"url('https://c4.wallpaperflare.com/wallpaper/857/346/531/valorant-jett-valorant-digital-art-artwork-digital-hd-wallpaper-preview.jpg')"}}>
    <React.Fragment>
      <h1 className="text-center text-danger text-capitalize my-4">Game spot</h1>
    <div className="container ">
    <div className="row my-1">
  <div className="col-sm">
    <div className="card" >
    {/* <div class="bg-image hover-zoom"> */}
    {/* <a href="https://en.wikipedia.org/wiki/Computer_security" target="blank"> */}
  <img src={tech} alt="..." height="250px" className="card-img-top" />
  {/* </a> */}
  {/* <a src="https://en.wikipedia.org/wiki/Computer_security"> */}
  {/* <div class="mask" style="background-color: rgba(57, 192, 237, 0.2)"></div> */}
  {/* </a> */}
  {/* </div> */}
  <div className="card-body">
    <h5 className="card-title">Among us</h5>
    <p className="card-text">Among Us is a 2018 online multiplayer social deduction game developed and published by American game studio Innersloth. The game was inspired by the party game Mafia and the science fiction horror film The Thing..</p>
    <a href="https://play.google.com/store/apps/details?id=com.innersloth.spacemafia&hl=en_IN&gl=US" target="blank" className="btn btn-primary">Try it</a>
  </div>
</div></div>
  <div className="col-sm"><div className="card">
    {/* <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="blank"> */}
      <img src={tech2} className="card-img-top" alt="..." height="250px" />
    {/* </a> */}
  <div className="card-body">
    <h5 className="card-title">PUBG MOBILE</h5>
    <p className="card-text">
    
    PUBG Mobile is a free-to-play battle royale video game developed by LightSpeed & Quantum Studio, a division of Tencent Games. It is a mobile game adaptation of PUBG: Battlegrounds. It was initially released for Android.</p>
    <a href="https://play.google.com/store/apps/details?id=com.tencent.ig&hl=en_IN&gl=US" target="blank" className="btn btn-primary">Try it</a>
  </div>
</div></div>
  <div className="col-sm"><div className="card">
  <img src={tech3} className="card-img-top" alt="..." height="250px" />
  <div className="card-body">
    <h5 className="card-title">Call of duty </h5>
    <p className="card-text">
    Call of Duty: Mobile is a free-to-play shooter game developed by TiMi Studio Group and published by Activision for Android and iOS. It was released on October 1, 2019, where it was one of the largest mobile game launches in history.
    </p>
    <a href="https://www.callofduty.com/" target="blank" className="btn btn-primary">Try it</a>
  </div>
</div></div>
</div><br/>
<div className="row">
<div className="col-sm"><div className="card">
  <img src={ds} className="card-img-top" alt="..." height="250px" />
  <div className="card-body">
    <h5 className="card-title">Valorant</h5>
    <p className="card-text">
    Valorant is a free-to-play first-person hero shooter developed and published by Riot Games, for Microsoft Windows. First teased under the codename Project A in October 2019, the game began a closed beta period with limited access on April 7, 2020.
    </p>
    <a href="https://playvalorant.com/en-us/" target="blank" className="btn btn-primary">Try it</a>
  </div>
</div></div>
{/* </div> */}
{/* <div className="row"> */}
<div className="col-sm"><div className="card">
  <img src={wd} className="card-img-top" alt="..." height="250px" />
  <div className="card-body">
    <h5 className="card-title">NEED FOR SPEED</h5>
    <p className="card-text">Need for Speed is a racing video game franchise published by Electronic Arts and currently developed by Criterion Games, the developers of Burnout. The series generally centers around illicit street racing and tasks players to complete.</p>
    <a href="https://www.ea.com/games/need-for-speed/need-for-speed-unbound" target="blank" className="btn btn-primary">Try it</a>
  </div>
</div></div>
<div className="col-sm"><div className="card">
  <img src={sales} className="card-img-top" alt="..." height="250px" />
  <div className="card-body">
    <h5 className="card-title">Counter strike : Global Offensive </h5>
    <p className="card-text">Counter-Strike: Global Offensive is a 2012 multiplayer tactical first-person shooter developed by Valve and Hidden Path Entertainment. It is the fourth game in the Counter-Strike series. Hosted by blast Major of 2023.
</p>
    <a href="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/" target="blank" className="btn btn-primary">Try it</a>
  </div>
</div></div>
</div>
</div>
</React.Fragment></div>
  );
};

export default Home;
