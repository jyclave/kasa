import logofooter from "../images/logo_white.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div>
       <img className="footer__logo" src={logofooter} alt="Logo Kasa" />       
      </div>
      <div>
        <p className="footer__title">&copy; 2020 Kasa, All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer