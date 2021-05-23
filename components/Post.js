import styled from "styled-components";
import {IoEllipsisHorizontalSharp, IoHeartOutline, IoChatbubbleOutline, IoNavigateOutline, IoBookmarkOutline} from "react-icons/io5"

const PostHeaderWrraper = styled ("div")`
    
    display:flex;
    justify-content:space-between;
    align-items: center;
    padding: 12px;
    height: 72px;  
    
`
const PhotoProfile = styled ("img")`
    display: flex;
    justify-content:flex-start;
    border-radius:100% ;
    width: 42px;
    height: 42px;
    align-items: center;
`

const ActionProfile = styled ("button")`
    height: 32px;
    width: 32px;
    display: flex;
    justify-content: center;
    align-items: center;

`
const PostImage = styled ("img")`
    display: flex;
    justify-content: center;
    align-items: center;

`

const ActionPostWrapper = styled ("div")`
    
    display:flex;
    justify-content:space-between;
    align-items: center;
    padding: 12px;
    height: 72px;  
    
`

const ActionPost = styled ("button")`
        display: flex;
        justify-content:flex-start;
        width: 42px;
        height: 42px;
        align-items: center;

`

const PostDescription = styled("div")`
        padding: 0px 12px;
`
const PostComment = styled("div")`
        padding: 0px 12px;
`



const Post = () => {
    return (
        <div>
        <div>
        <PostHeaderWrraper>
            <div className="flex items-center gap-2 ">
                <PhotoProfile src="pictures/Screenshot_1.png" />
                <div>Nanon</div>
            </div>
            <ActionProfile>
                <IoEllipsisHorizontalSharp className="text-xl" />
            </ActionProfile>
        </PostHeaderWrraper>
        </div>
        <PostImage src="pictures/kafuuchino.jpg" />

        <ActionPostWrapper>
        <div className="flex items-center text-xl">
            <ActionPost>
                <IoHeartOutline />
            </ActionPost>
            <ActionPost>
                <IoChatbubbleOutline />
            </ActionPost>
            <ActionPost>
                <IoNavigateOutline />
            </ActionPost>
        </div>
        <div className="flex items-center text-xl">
           <IoBookmarkOutline />
        </div>
        </ActionPostWrapper>
        <PostDescription>
        <div className="text-xs">
            10000 like
        </div>
        <div className="text-sm">
            <span className="font-bold">Nanon</span> KAWAIIII !! CHINO!!
        </div>
        </PostDescription>
        <PostComment>
            <div className="text-sm">View all 55 comment</div>
            <div className="mb-2">
                <div className="flex justify-between">
                    <div>
                        <span className="font-bold">Ikuya</span> kyaaa!
                    </div>
                <button>
                    <IoHeartOutline />
                </button>
                </div>
                <div className="flex justify-between">
                    <div>
                        <span className="font-bold">Pervertman</span> i'll capture her heheh
                    </div>
                <button>
                    <IoHeartOutline />
                </button>
                </div>
                <div className="flex justify-between">
                    <div>
                        <span className="font-bold">diva</span> hey ! look very cute !!
                </div>
                <button>
                    <IoHeartOutline />
                </button>
                </div>
            </div>
            <div className="text-xs">
            15 Minute ago
            </div>
         </PostComment>
        </div>

        

    );
};

export default Post;
