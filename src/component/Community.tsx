import Divider from './Divider'

type Props = {}

const Community = (_props: Props) => {
  return (
    <section className="community">
        <div className="marque community__marque community__marque_top">
          <Divider/>
        </div>
        <div className="community__container container">
          <div className="community__col">
            <h2 className="community__title">YOU JUST GOT wally'D</h2>
            <p className="community__text">
              Unlike the deceptive wally you know, investing in $wally flips
              the script. Here, the you've been wally'd effect works in your
              favor, offering a rare opportunity where what seems too good to be
              true is actually genuine. $wally prides itself on a stark
              realism, it's based on enduring the storms, outlasting the
              illusions to remain the last one standing amidst the market's ebb
              and flow. In this world of fake hype, jeety ass developers and
              false promises, $wally is your beacon of truth, proving that
              sometimes, a wally can indeed lead you to treasure.
            </p>
            <div className="community__btns">
              <a
                className="community__btn community__btn_red"
                href="https://t.me/wallyonsolana"
              >
               <img src='assets/svg/telegram1.svg'/>
                Join Telegram
              </a>
              <a
                className="community__btn community__btn_gray"
                href="https://twitter.com/wallyonsol"
              >
                <img src='assets/svg/twitter1.svg'/>
              </a>
            </div>
          </div>
          <img
            className="community__illustration"
            src="/assets/img/community/5.png"
            alt="rocket"
          />
        </div>
        <div className="marque">
        <Divider/>
            </div>

      </section>
  )
}

export default Community