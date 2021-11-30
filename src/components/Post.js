import React from "react"
// import Grid from "../elements/Grid";
// import Image from "../elements/Image";
// import Text from "../elements/Ttext";
import { Grid,Image,Text } from "../elements";


const Post = (props)=> {
    
    
    return (
        <React.Fragment>
            <Grid>
                <Grid is_flex>
                    <Image shape = "circle" src = {props.src}/>
                    <Text bold>{props.user_info.user_name} </Text>
                    <Text>{props.insert_dt}</Text>
                </Grid> 
                <Grid padding="16px">
                    <Text>{props.contents}</Text>
                </Grid>
                <Grid>
                    <Image shape = "rectangle" src ={props.src}/>
                </Grid>
                <Grid padding="16px">
                    <Text bold>댓글{props.comment_cnt}개</Text>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

//기본적으로 필요한 props를 넘겨놓음 
Post.defaultProps = {
    user_info : {
        user_name: "zhiyeon",
        user_profile: "https://i.pinimg.com/550x/f9/31/a0/f931a0de37bca9609152f20a7f2af782.jpg" 
    },
    image_url:"https://i.pinimg.com/550x/f9/31/a0/f931a0de37bca9609152f20a7f2af782.jpg",
    contents: "차냥이네요!",
    comment_cnt: 10,
    insert_dt: "2021-11-30 15:00:00",
};


export default Post;