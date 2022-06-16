import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import HeadInfo from "../../components/ui/HeadInfo";

function MeetupDetails(props) {
  return (
    <>
      <HeadInfo
        title={props.meetupData.title}
        description={props.meetupData.description}
      />
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
}

export async function getStaticPaths() {
  console.log("==========================getStaticPaths===============");
  const client = await MongoClient.connect(
    "mongodb+srv://dummy_user:<password>@fosss.26ro6.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const result = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: false,
    paths: result.map((meetupId) => ({
      params: { meetupId: meetupId._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  console.log("==========================getStaticProps===============");
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://dummy_user:<password>@fosss.26ro6.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetupData = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  client.close();

  return {
    props: {
      meetupData: {
        id: meetupData._id.toString(),
        image: meetupData.image,
        title: meetupData.title,
        address: meetupData.address,
        description: meetupData.description,
      },
    },
  };
}

export default MeetupDetails;
