"use client";

import About from "./components/About";
import Face from "../public/portfolioME.jpeg"
import "./components/styles/style.css";
import "./components/styles/main.css";
import Image  from "next/image";

function Home() {
  return (
    <>
    <div className="container">
      <div className="main">
        <div className="information">
          <Image className="img-inform" src={Face} alt="" />
          <div className="container-info">
            <h1 className="caption">Данилов Алексей</h1>
            <div className="contact-cintainer">
              <div className="text-item">
                <p className="text-info">Телефон:</p>
                <a className="text-info" href="tel:+79774578836" >+79774578836</a>
              </div>
              <div className="text-item">
                <p className="text-info">Telegram:</p>
                <a className="text-info" href="https://t.me/aleksey8205">@aleksey8205</a>
              </div>
              <div className="text-item">
                <p className="text-info">Почта:</p>
                <p className="text-info" href="mailto:Aleksey8205@yandex.ru">Aleksey8205@yandex.ru</p>
              </div>
              <div className="text-item">
                <p className="text-info">Github:</p>
                <a className="text-info" href="https://github.com/Aleksey8205">Репозиторий</a>
              </div>
              <div className="text-item">
                <p className="text-info">Codepen:</p>
                <a className="text-info" href="https://codepen.io/Aleksey_Danilov">Работы в CodePen</a>
              </div>
            </div>
            <h3 className="spec-developer">Full-stack веб разработчик | Frontend/Backend</h3>
          </div>
        </div>
        <About />
      </div>
      </div>
    </>
  );
}

export default Home;
