// Write your code here
// Write your code here
import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="nav-header">
    <div className="nav-content">
      <Link to="/">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            className="hamburger-icon-button"
            type="button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu size="30" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              className="close-button"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size="30" color="#616e7c" />
            </button>
            <ul className="nav-links-list">
              <li className="nav-link-item">
                <Link className="nav-link" to="/" onClick={() => close()}>
                  <AiFillHome size="36" />
                  <p className="nav-link-content">Home</p>
                </Link>
              </li>
              <li className="nav-link-item">
                <Link className="nav-link" to="/about" onClick={() => close()}>
                  <BsInfoCircleFill size="32" />
                  <p className="nav-link-content">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)

// import {Link} from 'react-router-dom'

// import Popup from 'reactjs-popup'
// import {GiHamburgerMenu} from 'react-icons/gi'
// import {AiFillHome} from 'react-icons/ai'
// import {BsInfoCircleFill} from 'react-icons/bs'
// import {IoMdClose} from 'react-icons/io'

// import './index.css'

// const Header = () => (
//   <>
//     <nav className="navbar-container">
//       <Link to="/">
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
//           alt="website logo"
//           className="logo"
//         />
//       </Link>
//       <div>
//         <Popup
//           modal
//           trigger={
//             <button
//               type="button"
//               data-testid="hamburgerIconButton"
//               className="menu-button"
//             >
//               <GiHamburgerMenu className="bar" />
//             </button>
//           }
//           className="popup-content"
//         >
//           {close => (
//             <div className="popup-container">
//               <div className="button-container">
//                 <button
//                   type="button"
//                   data-testid="closeButton"
//                   onClick={() => close()}
//                 >
//                   <IoMdClose />
//                 </button>
//               </div>

//               <ul className="unordered-list-cont">
//                 <Link to="/" onClick={() => close()} className="link">
//                   <li className="list-item">
//                     <AiFillHome className="icon" />
//                     <p className="home-about">Home</p>
//                   </li>
//                 </Link>

//                 <Link to="/about" onClick={() => close()} className="link">
//                   <li className="list-item">
//                     <BsInfoCircleFill className="icon" />
//                     <p className="home-about">About</p>
//                   </li>
//                 </Link>
//               </ul>
//             </div>
//           )}
//         </Popup>
//       </div>
//     </nav>
//     <hr />
//   </>
// )

// export default Header
