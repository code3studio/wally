
type Props = {}

const Footer = (_props: Props) => {
  return (
    <footer className="footer">
        <div className="footer__container container">
          <div className="footer__col">
            <a className="footer__logo" href="/">THE wally</a>
            <div className="footer__socials">
              <a
                className="footer__btn footer__btn_sm"
                href="https://twitter.com/WallyDaWhale"
                target="_blank"
              >
                <img src='assets/svg/twitter1.svg' alt='twitter'/>
                {/* <svg
                  width="27"
                  height="25"
                  viewBox="0 0 27 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M20.6383 0.561523H24.6249L15.8716 10.746L26.0983 24.5615H18.0729L11.7896 16.166L4.59627 24.5615H0.6096L9.88293 13.6685L0.0895996 0.561523H8.31427L13.9909 8.2309L20.6383 0.561523ZM19.2429 22.1704H21.4529L7.15293 2.86411H4.77827L19.2429 22.1704Z"
                      fill="currentColor"
                    />
                  </g>
                </svg> */}
              </a>
              <a className="footer__btn" href="https://t.me/wallyonsolana" target="_blank">
                <img src='assets/svg/telegram1.svg' alt='telegram'/>
                {/* <svg
                  width="27"
                  height="26"
                  viewBox="0 0 27 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.2633 3.96034C23.2633 3.96034 25.4555 3.13971 25.2728 5.13266C25.2119 5.9533 24.6639 8.82548 24.2376 11.9322L22.7761 21.1349C22.7761 21.1349 22.6543 22.4831 21.5582 22.7176C20.462 22.952 18.8179 21.8969 18.5134 21.6624C18.2698 21.4866 13.9463 18.8489 12.4239 17.5593C11.9976 17.2076 11.5104 16.5042 12.4848 15.6836L18.8788 9.82199C19.6095 9.11858 20.3403 7.47733 17.2955 9.47028L8.77017 15.0388C8.77017 15.0388 7.79585 15.625 5.96902 15.0974L2.0108 13.9251C2.0108 13.9251 0.54931 13.0459 3.04602 12.1666C9.13557 9.41162 16.6257 6.59804 23.2633 3.96034Z"
                    fill="currentColor"
                  />
                </svg> */}
                Telegram
              </a>
            </div>
            <p className="footer__copyright">2024 all wallyes reserved</p>
          </div>
          <div className="footer__socials">
            <a
              className="footer__btn footer__btn_sm"
              href="https://twitter.com/WallyDaWhale"
              target="_blank"
              >
                              <img src='assets/svg/twitter1.svg' alt='twitter'/>

              {/* <svg
                width="27"
                height="25"
                viewBox="0 0 27 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M20.6383 0.561523H24.6249L15.8716 10.746L26.0983 24.5615H18.0729L11.7896 16.166L4.59627 24.5615H0.6096L9.88293 13.6685L0.0895996 0.561523H8.31427L13.9909 8.2309L20.6383 0.561523ZM19.2429 22.1704H21.4529L7.15293 2.86411H4.77827L19.2429 22.1704Z"
                    fill="currentColor"
                  />
                </g>
              </svg> */}
            </a>
            <a className="footer__btn"  href="https://t.me/wallyonsolana" target="_blank">
            <img src='assets/svg/telegram1.svg' alt=''/>

              {/* <svg
                width="27"
                height="26"
                viewBox="0 0 27 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2633 3.96034C23.2633 3.96034 25.4555 3.13971 25.2728 5.13266C25.2119 5.9533 24.6639 8.82548 24.2376 11.9322L22.7761 21.1349C22.7761 21.1349 22.6543 22.4831 21.5582 22.7176C20.462 22.952 18.8179 21.8969 18.5134 21.6624C18.2698 21.4866 13.9463 18.8489 12.4239 17.5593C11.9976 17.2076 11.5104 16.5042 12.4848 15.6836L18.8788 9.82199C19.6095 9.11858 20.3403 7.47733 17.2955 9.47028L8.77017 15.0388C8.77017 15.0388 7.79585 15.625 5.96902 15.0974L2.0108 13.9251C2.0108 13.9251 0.54931 13.0459 3.04602 12.1666C9.13557 9.41162 16.6257 6.59804 23.2633 3.96034Z"
                  fill="currentColor"
                />
              </svg> */}
              Telegram
            </a>
          </div>
        </div>
      </footer>
  )
}

export default Footer