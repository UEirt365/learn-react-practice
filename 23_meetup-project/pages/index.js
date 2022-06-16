import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

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

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://dummy_user:<password>@fosss.26ro6.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const result = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: result.map((meetup) => {
        return {
          id: meetup._id.toString(),
          image: meetup.image,
          title: meetup.title,
          address: meetup.address,
          description: meetup.description,
        };
      }),
    },
    revalidate: 1,
  };
}

export default HomePage;
