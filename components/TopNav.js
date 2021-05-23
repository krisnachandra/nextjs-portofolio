import styled from "styled-components";
import { IoCameraOutline, IoChatbubbleEllipsesOutline } from "react-icons/io5";


const TopNavWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 12px;
  border-bottom: solid 2px #eaeaea;
  position: fixed;
  left: 0;
  right: 0;
  background: #fff;
`


const IconButton = styled("button")`
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;

`
const TopNav = () => {
  return (

    <TopNavWrapper>
      <IconButton>
        <IoCameraOutline />
      </IconButton>

      <IconButton>
        <h3 className="text-2xl" >Imoutogram</h3>
      </IconButton>

      <IconButton>
        <IoChatbubbleEllipsesOutline />
      </IconButton>
    </TopNavWrapper>

  );
};

export default TopNav;
