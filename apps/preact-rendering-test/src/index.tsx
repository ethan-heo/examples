import { render } from "preact";

import "./style.css";
import { useEffect, useState } from "preact/hooks";

export function App() {
  const [reservations, setReservations] = useState([]);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/fullcalendar/reservation")
      .then((res) => res.json())
      .then((json) => (setReservations([]), json))
      .then(setReservations);
  }, [trigger]);

  useEffect(() => {
    setTrigger(true);
  }, []);

  return (
    <div>
      {reservations.map((reservation, idx) => (
        <Reservation key={idx} {...reservation} />
      ))}
    </div>
  );
}

function Reservation({ title, date }: { title: any; date: any }) {
  return (
    <div>
      <strong>{title}</strong>
      <div>{date}</div>
    </div>
  );
}

render(<App />, document.getElementById("app"));
