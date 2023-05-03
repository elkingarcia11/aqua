import styles from "@/styles/NavBar.module.css";
import Popup from "reactjs-popup";
import { useTranslation } from "react-i18next";
import Scroll from "react-scroll";

var scroller = Scroll.scroller;

function scrollToApt(i) {
  var name = "";
  if (i === 1) {
    name = "aquaOne";
  } else if (i === 2) {
    name = "aquaTwo";
  } else if (i === 3) {
    name = "aquaThree";
  } else if (i === 4) {
    name = "aquaFour";
  } else if (i === 5) {
    name = "aquaFive";
  } else if (i === 6) {
    name = "aquaSix";
  }
  scroller.scrollTo(name, {
    duration: 750,
    delay: 100,
    smooth: true,
    offset: -50, // Scrolls to element + 50 pixels down the page
  });
}

export default function MobileNavBar() {
  const { t } = useTranslation();

  return (
    <div className={`${styles.navbar}`}>
      <div className={`${styles.row}`}>
        <div className={`${styles.navbarMenu}`}>
          <Popup
            trigger={
              <button>
                yo & {t("direction")}
              </button>
            }
            position="top center"
          >
            <div className={`${styles.popUpDiv}`}>
              <a href="https://goo.gl/maps/YHXvC7UAcJ9tS85m9">
                {t("location")}
              </a>
              <a href="https://www.google.com/maps/dir//AQUA+Puerto+Plata+57000+Dominican+Republic/@19.7739979,-70.6521664,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x8eb1ef2898f7c08b:0x3b40ce6ce0f444a">
                {t("direction")}
              </a>
            </div>
          </Popup>
          <Popup
            trigger={
              <button>
                {t("location")} & {t("direction")}
              </button>
            }
            position="top center"
          >
            <div className={`${styles.popUpDiv}`}>
              <a href="https://goo.gl/maps/YHXvC7UAcJ9tS85m9">
                {t("location")}
              </a>
              <a href="https://www.google.com/maps/dir//AQUA+Puerto+Plata+57000+Dominican+Republic/@19.7739979,-70.6521664,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x8eb1ef2898f7c08b:0x3b40ce6ce0f444a">
                {t("direction")}
              </a>
            </div>
          </Popup>
        </div>
      </div>
    </div>
  );
}
