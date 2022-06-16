import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import HeadInfo from "../components/ui/HeadInfo";
import Head from "next/head";

const HomePage = (props) => {
  return (
    <>
      <HeadInfo
        title="Meetup Homepage"
        description="Meetup Homepage description"
      />

      {/* <Head>
        <title>Meetup Homepage</title>
        <meta name="description" content="Meetup Homepage d"></meta>
      </Head> */}
      <MeetupList meetups={props.meetups} />
    </>
  );
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
