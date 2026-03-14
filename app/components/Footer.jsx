
import Telegram from "../../public/svg/telegram.png"
import MailBox from "../../public/svg/mailBox.png"
import "./styles/footer.css"
import Image from "next/image";

function Footer() {
  return (
    <>
      <footer className="footer">
        <address className="address">
          <ul className="social-list">
            <li className="social">
              <a href="https://t.me/+79774578836">
                <Image
              width={50}
                  className="social-img"
                  src={Telegram}
                  alt="Telegram"
                  title="+79774578836"
                />
              </a>
            </li>
            <li className="social">
              <a href="mailto:aleksey8205@yandex.ru">
                <Image
                width={50}
                  className="social-img"
                  src={MailBox}
                  alt="mail"
                  title="aleksey8205@yandex.ru"
                />
              </a>
            </li>
          </ul>
        </address>
        <p className="license-text">&copy; Данилов Алексей Юрьевич. 2025г.</p>
      </footer>
    </>
  );
}

export default Footer;
