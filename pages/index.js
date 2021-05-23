import StoryContainer from "components/containers/StoryContainer";
import TopNav from "components/TopNav";
import PostContainer from "components/containers/PostContainer";
import BottomNav from "components/BottomNav";



const Home = () => {
  return (

    <>
    <TopNav />
    <div style={{ paddingTop: "64px", paddingBottom: "64px" }}>
      <StoryContainer />
      <PostContainer />
    </div>
    <BottomNav />
    
    </>

  );
};

export default Home;
