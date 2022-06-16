import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import HeadInfo from "../../components/ui/HeadInfo";

function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(meetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();

    console.log(result);

    router.push("/");
  }

  return (
    <>
      <HeadInfo title="Create meetup" description="Create meetup description" />
      <NewMeetupForm addMeetupHandler={addMeetupHandler} />;
    </>
  );
}

export default NewMeetupPage;
