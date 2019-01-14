import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css'

import logo_black from '../../images/mf-logo-black.svg'
import instagram from '../../images/networks/instagram.png'
import twitter from '../../images/networks/twitter.png'
import pinterest from '../../images/networks/pinterest.png'

class Footer extends React.Component{
    render() {
      return (
        <div className="footer">
          <div className="footer__logo">
            <img width='80px' height="80px"  src={logo_black}/>
          </div>
          <div className="footer__divider"></div>
          <div className="footer__info">
            <div className="footer__info__links">
              <div className="footer__info__links__company">
                <h4>Company</h4>
                <Link to="/about">About</Link>
                <Link to="/404">Press</Link>
                <Link to="/terms">Terms + Conditions</Link>
              </div>
              <div className="footer__info__links__categories">
                <h4>Categories</h4>
                <Link to="/category/Seating">Seating</Link>
                <Link to="/category/Tables">Tables</Link>
                <Link to="/category/Misc">Misc</Link>
              </div>
            </div>
            <div className="footer__info__networks">
              <h4>Social</h4>
              <div className="footer__info__networks__icons">
                <img width='25px' height="25px" src={instagram} alt="Instagram Logo" />
                <img width='25px' height="25px" src={twitter} alt="Twitter Logo" />
                <img width='25px' height="25px" src={pinterest} alt="Pinterest Logo" />
              </div>
            </div>
          </div>
        </div>
      )
    }
}

export default Footer