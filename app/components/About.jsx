"use client";
import  { useEffect, useState } from "react";
import "./styles/about.css";

function About() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const birthDate = new Date("1997-09-12");

  useEffect(() => {
    const timerID = setInterval(
      () => setCurrentDate(new Date()),
      1000 * 60 * 60 * 24
    );
    return () => clearInterval(timerID);
  }, []);

  const calculateAge = () => {
    const today = currentDate;
    let diffYears = today.getFullYear() - birthDate.getFullYear();

    if (
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() < birthDate.getDate())
    ) {
      diffYears--;
    }

    return diffYears;
  };

  return (
    <>
      <h2 className="caption-about">Обо мне</h2>
      <div className="about-list">
        <div className="about-item item-row-1">
          <h3>Данилов Алексей</h3>
          <p>Middle Full-stack разработчик</p>
          <p>{calculateAge()} лет</p>
          <p>Россия, Московская область, Подольск</p>
        </div>
        <div className="about-item item-col-1 item-row-2">
          <h3>Образование</h3>
          <div className="item-abb">
            <p>2012-2016</p>
            <p>Московский технический колледж</p>
            <p>Оператор ЭВМ</p>
            <p>Степень: среднее специальное</p>
          </div>
          <div className="item-abb">
            <p>2016-2020</p>
            <p>РТУ МИРЭА</p>
            <p>Информатика и вычислительная техника</p>
            <p>Степень: бакалавр</p>
          </div>
          <div className="item-abb">
            <h4>Дополнительные курсы</h4>
            <p>2024-2026</p>
            <p>Нетология</p>
            <p>Веб разработчик, Full-stack разработка на javaScript</p>
          </div>
        </div>
        <div className="about-item item-row-2">
          <h3>Стек технологий</h3>
          <div className="stack-tech">
            <p className="stack-text">HTML5</p>
            <p className="stack-text">CSS3</p>
            <p className="stack-text">JavaScript ES6</p>
            <p className="stack-text">Адаптивная и кроссбраузерная вёрстка</p>
            <p className="stack-text">React</p>
            <p className="stack-text">CRUD & REST API</p>
            <p className="stack-text">Ngnix</p>
            <p className="stack-text">Node.js</p>
            <p className="stack-text">Express.js</p>
            <p className="stack-text">MongoDB</p>
            <p className="stack-text">MySQL</p>
            <p className="stack-text">PostgreSQL</p>
            <p className="stack-text">Websocket</p>
            <p className="stack-text">Passport.js</p>
            <p className="stack-text">JWT</p>
            <p className="stack-text">Docker/ Docker-compose</p>
            <p className="stack-text">Jest</p>
            <p className="stack-text">Github</p>
            <p className="stack-text">Typescript</p>
            <p className="stack-text">Nest.js</p>
            <p className="stack-text">Next.js</p>
            <p className="stack-text">RxJs</p>
            <p className="stack-text">CI/CD</p>
            <p className="stack-text">VPS</p>
          </div>
        </div>
        <div className="about-item item-row-2 item-col-1">
          <h3>Личные качества</h3>
          <div className="stack-tech">
            <p className="stack-text">Коммуникабельность</p>
            <p className="stack-text">Стрессоустойчивость</p>
            <p className="stack-text">Работа в команде</p>
            <p className="stack-text">Внимательность в деталям</p>
            <p className="stack-text">Быстрая обучаемость</p>
            <p className="stack-text">Вовлеченность</p>
            <p className="stack-text">Самостоятельность</p>
            <p className="stack-text">Готовность к переменам</p>
            <p className="stack-text">Отзывчивость</p>
            <p className="stack-text">Организованность</p>
            <p className="stack-text">Инициативность</p>
          </div>
        </div>
        <div className="about-item item-row-1 item-col-1">
          <h3>Дополнительное ПО</h3>
          <div className="stack-tech">
            <p className="stack-text">Adobe Photoshop</p>
            <p className="stack-text">Adobe Illustrator</p>
            <p className="stack-text">Postman</p>
            <p className="stack-text">Docker</p>
            <p className="stack-text">MongoDB compass / Atlas</p>
          </div>
        </div>
        <div className="about-item item-col-2">
          <p>Здравствуйте!</p>
          <p>Я разработчик frontend/backend специализирущийся на JavaScript</p>
        </div>
      </div>
    </>
  );
}
export default About;
