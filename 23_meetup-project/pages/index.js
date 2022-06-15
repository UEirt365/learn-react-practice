import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Meetup 1",
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    address: "Ha Noi 1",
  },
  {
    id: "m2",
    title: "Meetup 2",
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    address: "Ha Noi 2",
  },
];

const HomePage = () => {
  const [meetups, setMeetups] = useState([]);
  useEffect(() => {
    setMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={meetups} />;
};

export default HomePage;