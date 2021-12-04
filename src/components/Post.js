import React from "react"
import { Button, Grid,Image,Text, } from "../elements";

import { history} from "../redux/configureStore";

const Post = (props)=> {
    
    
    return (
        <React.Fragment >
            <Grid>
                <Grid is_flex padding = "16px">
                    <Grid is_flex width="auto">
                        <Image shape = "circle" src = {props.src}/>
                        <Text bold>{props.user_info.user_name} </Text>
                    </Grid>
                    <Grid is_flex width ="auto"> 
                    {props.is_me && (<Button width="auto" margin="4px" padding="4px" _onClick={() => {
                        history.push(`/write/${props.id}`)}}>수정</Button>)}
                        <Text>{props.insert_dt}</Text>
                    </Grid>
                </Grid>
                    <Grid padding="16px">
                        <Text>{props.contents}</Text>
                    </Grid>
                    <Grid>
                        <Image shape = "rectangle" src ={props.image_url}/>
                    </Grid>
                    <Grid padding="16px">
                        <Text margin="0px" bold>댓글{props.comment_cnt}개</Text>
                    </Grid>
            </Grid>
        </React.Fragment>
    )
}

Post.defaultProps = {
    user_info : {
        user_name: "zhiyeon",
        user_profile: "https://i.pinimg.com/550x/f9/31/a0/f931a0de37bca9609152f20a7f2af782.jpg" 
    },
    image_url:"https://i.pinimg.com/550x/f9/31/a0/f931a0de37bca9609152f20a7f2af782.jpg",
    contents: "차냥이네요!",
    comment_cnt: 10,
    insert_dt: "2021-11-30 15:00:00",
    is_me: false,
};


export default Post;