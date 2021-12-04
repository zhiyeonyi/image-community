//PostList.js
import React from "react";
import Post from "../components/Post";
import { useSelector, useDispatch} from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const PostList = (props) => {
    const post_list = useSelector((state)=> state.post.list);
    const dispatch = useDispatch();
    const user_info = useSelector((state)=> state.user.user);
    const is_loading = useSelector((state)=> state.post.is_loading);
    const paging = useSelector((state) => state.post.paging);

    console.log(post_list);

    React.useEffect(() =>{

        if(post_list.length === 0 ){
            dispatch(postActions.getPostFB());
        }
        dispatch(postActions.getPostFB());
    }, []);

    return (
        <React.Fragment>
            {/* <Post/>     */}
            {post_list.map((p, idx) => {
                if(p.user_info.user_id === user_info?.uid){
                    return <Post key={p.id} {...p} is_me/>
                } else {
                    return <Post key={p.id} {...p}/>;
                } 
            })}
            <button onClick={() =>{
                    dispatch(postActions.getPostFB(paging.next));
                }}>추가로드</button>
        </React.Fragment>

    )
}



export default PostList;