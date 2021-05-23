import styled from "styled-components";
import {IoHomeOutline, 
    IoSearchOutline,
    IoAddCircleOutline,
    IoHeartOutline,
    IoPersonCircleOutline} from "react-icons/io5"

const BottomNavWrapper = styled ("div")`
        display: flex;
        justify-content: space-between;
        background: #fff;
        height: 64px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        padding: 0px 12px;
        position: fixed;
        align-items: center;
`
const BottomNavIcon = styled ("button")`
        display: flex;
        width: 42px;
        height: 42px;
        align-items: center;
        justify-content: center;
        font-size:30px ;

`

const BottomNav = () => {
    return(
        <BottomNavWrapper>
            <BottomNavIcon>
                <IoHomeOutline />
            </BottomNavIcon>
            <BottomNavIcon>
                <IoSearchOutline />
            </BottomNavIcon>
            <BottomNavIcon>
                <IoAddCircleOutline />
            </BottomNavIcon>
            <BottomNavIcon>
                <IoHeartOutline />
            </BottomNavIcon>
            <BottomNavIcon>
                <IoPersonCircleOutline />
            </BottomNavIcon>
        </BottomNavWrapper>
    );
};

export default BottomNav;