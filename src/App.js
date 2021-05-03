import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Heading from "./components/Heading";
import Carousel from "./components/Carousel";
import SubItem from "./components/SubItem";
import Loading from "./components/Loading";
import SubItemV2 from "./components/SubItemV2";
import { prevDay, nextDay } from "./utils/days";
import { getCurrentPeriodID } from "./utils/period";
import "./styles.css";
import "./theme.css";
import cheers from "./assets/cheers.svg";

export default function App() {
  const [day, setDay] = useState("mon");
  const [currentPeriodID, setCurrentPeriodID] = useState(getCurrentPeriodID());
  //console.log(currentPeriodID);
  const [loading, setLoading] = useState(true);
  const DAY = useRef("mon");
  const INTERVAL = useRef(null);
  const DATA = useRef({});
  const prev = () => setDay((d) => prevDay(d));
  const next = () => setDay((d) => nextDay(d));

  useEffect(() => {
    let date = new Date().toDateString();
    let d = date.slice(0, 4).trim().toLowerCase();
    //console.log(d);
    DAY.current = d;
    setDay(d);
    axios
      .get(
        "/1xWaNW-wf-BxTVgmxiPogJKMQaukwDTPg/10SfQph-Vf1QCIcwZNdYGb-KTBLByZZyc.json"
      )
      .then((res) => {
        // console.log(res);
        DATA.current = res.data;
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
    INTERVAL.current = setInterval(() => {
      let id = getCurrentPeriodID();
      // setCurrentPeriodID((id) => {
      //   if (id !== getCurrentPeriodID()) return newID;
      //   return id;
      // });
      if (id !== currentPeriodID) setCurrentPeriodID(id);
    }, 7000);
    return () => clearInterval(INTERVAL.current);
  }, []);

  return (
    <div className={`App ${day}-bg-img`}>
      <Heading day={day} />
      <Carousel day={day} prev={prev} next={next} />
      {loading && <Loading day={day} />}
      {(day === "sat" || day === "sun") && (
        <div className="cheers">
          <img src={cheers} alt={"Enjoying Holiday"} />
        </div>
      )}
      {!loading &&
        DATA.current[day] &&
        DATA.current[day].map((item) => (
          <SubItem
            key={item.id}
            day={day}
            id={item.id}
            isCurrentPeriod={day === DAY.current && currentPeriodID === item.id}
            subject={item.subject}
            link={item.link}
            attendance={item.attendance}
            time={item.time}
          />
        ))}
      {!loading && day !== "sat" && day !== "sun" && <SubItemV2 />}
    </div>
  );
}
