import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Heading from "./components/Heading";
import Carousel from "./components/Carousel";
import SubItem from "./components/SubItem";
import Loading from "./components/Loading";
import { prevDay, nextDay } from "./utils/days";
import SubItemV2 from "./components/SubItemV2";
import cheers from "./assets/cheers.svg";
import "./styles.css";
import "./theme.css";

export default function App() {
  const [day, setDay] = useState("mon");
  const [loading, setLoading] = useState(true);
  const _data = useRef({});

  const prev = () => setDay((d) => prevDay(d));
  const next = () => setDay((d) => nextDay(d));

  useEffect(() => {
    let date = new Date().toDateString();
    let d = date.slice(0, 4).trim().toLowerCase();
    //console.log(d);
    setDay(d);
    axios
      .get(
        "/1xWaNW-wf-BxTVgmxiPogJKMQaukwDTPg/10SfQph-Vf1QCIcwZNdYGb-KTBLByZZyc.json"
      )
      .then((res) => {
        // console.log(res);
        _data.current = res.data;
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
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
        _data.current[day] &&
        _data.current[day].map((item) => (
          <SubItem
            key={item.id}
            day={day}
            id={item.id}
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
