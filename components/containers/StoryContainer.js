import styled from "styled-components";


const StoryWrapper = styled ("div")`
    display: flex;
    overflow: auto;
`
const PicProfiles = styled ("img")`
        width: 62px;
        height: 62px;
        border-radius: 100%;

`
const StoryItem = styled ("div")`
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        padding: 12px;
        align-items: center;
        width: 120px;
        height: 120px;
        
`

const StoryContainer = () => {
    return (
        <StoryWrapper>
            <StoryItem>
                <PicProfiles src="pictures/Screenshot_1.png" />
                <div>username</div>
            </StoryItem>
            <StoryItem>
                <PicProfiles src="pictures/Screenshot_2.png" />
                <div>username</div>
            </StoryItem>
            <StoryItem>
                <PicProfiles src="pictures/Screenshot_3.png" />
                <div>username</div>
            </StoryItem>
            <StoryItem>
                <PicProfiles src="pictures/Screenshot_4.png" />
                <div>username</div>
            </StoryItem>
            <StoryItem>
                <PicProfiles src="pictures/Screenshot_5.png" />
                <div>username</div>
            </StoryItem>
        </StoryWrapper>
    );
};

export default StoryContainer;