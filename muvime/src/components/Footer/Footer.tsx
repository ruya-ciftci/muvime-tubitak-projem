import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="container footer">
      <footer className="py-5">
        <div className="row footer-top">
          <div className="col-6 col-md-2 mb-3">
            <h5>THE BASICS</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  About TMDB
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Contact Us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Support Forums
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>GET INVOLVED</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Contribution Bible
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  3rd Party Applications
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Add New Movie
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Add New TV Show
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>COMMUNITY</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Guidelines
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Discussions
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Leaderboard
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3 social-media align-items-end">
            <h5>SOCIAL</h5>
            <ul className="nav flex-row">
              <li className="nav-item mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="28"
                  viewBox="0 0 24 28"
                  fill="none"
                >
                  <g clip-path="url(#clip0_49_352)">
                    <path
                      d="M21.4286 1.71429H2.57143C1.88944 1.71429 1.23539 1.98521 0.753154 2.46745C0.270918 2.94968 0 3.60374 0 4.28572L0 23.1429C0 23.8249 0.270918 24.4789 0.753154 24.9611C1.23539 25.4434 1.88944 25.7143 2.57143 25.7143H9.92411V17.5548H6.54911V13.7143H9.92411V10.7872C9.92411 7.45769 11.9063 5.61858 14.9421 5.61858C16.3961 5.61858 17.9164 5.87787 17.9164 5.87787V9.14572H16.2413C14.5907 9.14572 14.0759 10.17 14.0759 11.2205V13.7143H17.7605L17.1712 17.5548H14.0759V25.7143H21.4286C22.1106 25.7143 22.7646 25.4434 23.2468 24.9611C23.7291 24.4789 24 23.8249 24 23.1429V4.28572C24 3.60374 23.7291 2.94968 23.2468 2.46745C22.7646 1.98521 22.1106 1.71429 21.4286 1.71429Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_49_352">
                      <rect width="24" height="27.4286" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </li>
              <li className="nav-item mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="28"
                  viewBox="0 0 24 28"
                  fill="none"
                >
                  <g clip-path="url(#clip0_49_354)">
                    <path
                      d="M12.0053 7.55362C8.59819 7.55362 5.84998 10.3018 5.84998 13.709C5.84998 17.1161 8.59819 19.8643 12.0053 19.8643C15.4125 19.8643 18.1607 17.1161 18.1607 13.709C18.1607 10.3018 15.4125 7.55362 12.0053 7.55362ZM12.0053 17.7108C9.80355 17.7108 8.00355 15.9161 8.00355 13.709C8.00355 11.5018 9.79819 9.70719 12.0053 9.70719C14.2125 9.70719 16.0071 11.5018 16.0071 13.709C16.0071 15.9161 14.2071 17.7108 12.0053 17.7108ZM19.8482 7.30183C19.8482 8.10005 19.2053 8.73755 18.4125 8.73755C17.6143 8.73755 16.9768 8.09469 16.9768 7.30183C16.9768 6.50897 17.6196 5.86612 18.4125 5.86612C19.2053 5.86612 19.8482 6.50897 19.8482 7.30183ZM23.925 8.75897C23.8339 6.83576 23.3946 5.13219 21.9857 3.72862C20.5821 2.32505 18.8785 1.88576 16.9553 1.78933C14.9732 1.67683 9.03212 1.67683 7.04998 1.78933C5.13213 1.8804 3.42856 2.31969 2.01963 3.72326C0.610703 5.12683 0.176775 6.8304 0.0803466 8.75362C-0.0321533 10.7358 -0.0321533 16.6768 0.0803466 18.659C0.171418 20.5822 0.610703 22.2858 2.01963 23.6893C3.42856 25.0929 5.12677 25.5322 7.04998 25.6286C9.03212 25.7411 14.9732 25.7411 16.9553 25.6286C18.8785 25.5375 20.5821 25.0983 21.9857 23.6893C23.3892 22.2858 23.8285 20.5822 23.925 18.659C24.0375 16.6768 24.0375 10.7411 23.925 8.75897ZM21.3642 20.7858C20.9464 21.8358 20.1375 22.6447 19.0821 23.0679C17.5018 23.6947 13.7518 23.55 12.0053 23.55C10.2589 23.55 6.50355 23.6893 4.92855 23.0679C3.87856 22.65 3.06963 21.8411 2.64641 20.7858C2.01963 19.2054 2.16427 15.4554 2.16427 13.709C2.16427 11.9625 2.02499 8.20719 2.64641 6.63219C3.06427 5.58219 3.8732 4.77326 4.92855 4.35005C6.50891 3.72326 10.2589 3.8679 12.0053 3.8679C13.7518 3.8679 17.5071 3.72862 19.0821 4.35005C20.1321 4.7679 20.941 5.57683 21.3642 6.63219C21.991 8.21255 21.8464 11.9625 21.8464 13.709C21.8464 15.4554 21.991 19.2108 21.3642 20.7858Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_49_354">
                      <rect width="24" height="27.4286" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </li>
              <li className="nav-item mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M21.533 7.82598C21.5482 8.03917 21.5482 8.2524 21.5482 8.46559C21.5482 14.9681 16.599 22.4605 7.5533 22.4605C4.76648 22.4605 2.17767 21.6534 0 20.2524C0.395953 20.2981 0.776625 20.3133 1.18781 20.3133C3.48727 20.3133 5.60405 19.5367 7.29441 18.2118C5.13197 18.1661 3.31978 16.7499 2.69541 14.8006C3 14.8463 3.30455 14.8767 3.62437 14.8767C4.06598 14.8767 4.50764 14.8158 4.91878 14.7092C2.66498 14.2524 0.974578 12.2727 0.974578 9.88183V9.82094C1.62937 10.1864 2.39086 10.4148 3.19791 10.4453C1.87303 9.562 1.00505 8.05441 1.00505 6.34881C1.00505 5.43512 1.24866 4.59756 1.67508 3.86659C4.09641 6.85136 7.73602 8.80056 11.8172 9.0138C11.7411 8.64831 11.6954 8.26764 11.6954 7.88692C11.6954 5.17623 13.8883 2.96814 16.6141 2.96814C18.0304 2.96814 19.3095 3.56205 20.208 4.52144C21.3197 4.30825 22.3857 3.89706 23.3299 3.33362C22.9643 4.47578 22.1877 5.43517 21.1674 6.04426C22.1573 5.93772 23.1167 5.66355 23.9999 5.28287C23.33 6.25745 22.4924 7.12544 21.533 7.82598Z"
                    fill="white"
                  />
                </svg>
              </li>
              <li className="nav-item mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  fill="none"
                >
                  <path
                    d="M22.9023 5.21775C22.6406 4.23234 21.8695 3.45625 20.8905 3.19288C19.1159 2.71429 12 2.71429 12 2.71429C12 2.71429 4.88416 2.71429 3.10953 3.19288C2.13049 3.45629 1.3594 4.23234 1.09769 5.21775C0.622192 7.00388 0.622192 10.7305 0.622192 10.7305C0.622192 10.7305 0.622192 14.457 1.09769 16.2432C1.3594 17.2286 2.13049 17.9723 3.10953 18.2357C4.88416 18.7143 12 18.7143 12 18.7143C12 18.7143 19.1158 18.7143 20.8905 18.2357C21.8695 17.9723 22.6406 17.2286 22.9023 16.2432C23.3778 14.457 23.3778 10.7305 23.3778 10.7305C23.3778 10.7305 23.3778 7.00388 22.9023 5.21775ZM9.6727 14.1139V7.347L15.6202 10.7305L9.6727 14.1139Z"
                    fill="white"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>

        <div className="d-flex legacy">
          <div className="wrap-legacy row">
            <div className="legacy-list">
              <div className="rights col">
                <span className="legacy-logo">MUVIME</span> © 2023 Tübitak, Inc.
                All rights reserved.
              </div>
              <div className="col-sm-1">Terms of Use</div>
              <div className="col-sm-1 api">API Terms of Use</div>
              <div className="col-sm-1">Privacy Policy</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
