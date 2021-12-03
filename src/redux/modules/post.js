import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore } from "../../shared/firebase";
import { doc } from "@firebase/firestore";
import moment from "moment";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

const initialState = {
  list: [],
};

const initialPost = {
  // id: 0,
  // user_info: {
  //   user_name: "zhiyeon",
  //   user_profile:
  //     "https://i.pinimg.com/550x/f9/31/a0/f931a0de37bca9609152f20a7f2af782.jpg",
  // },
  image_url:
    "https://i.pinimg.com/550x/f9/31/a0/f931a0de37bca9609152f20a7f2af782.jpg",
  contents: "",
  comment_cnt: 0,
  insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
  // insert_dt: "2021-11-30 15:00:00",
};

const addPostFB = (contents="") => {
  return function (dispatch, getState, {history}){
    const postDB = firestore.collection("post");
    const _user = getState().user.user;

    const user_info= {
      user_name: _user.user_name,
      user_id: _user.uid,
      user_profile: _user.user_profile
    };

    const _post = {
      ...initialPost,
      contents: contents,
      insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
    };


    postDB.add({...user_info,..._post}).then((doc)=> {
      let post = {user_info, ..._post, id: doc.id};
        dispatch(addPost(post));
        history.replace("/");
    }).catch((err)=> {
      console.log("post 작성에 실패했습니다!", err);
    });
  }
}

const getPostFB = () => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection("post");

    postDB.get().then((docs) => {
      let post_list = [];
      docs.forEach((doc) => {
        let _post = doc.data();

        //['comment_cnt', 'contents', ..]
        let post = Object.keys(_post).reduce(
          (acc, cur) => {
            if (cur.indexOf("user_") !== -1) {
              return {
                ...acc,
                user_info: { ...acc.user_info, [cur]: _post[cur] },
              };
            }
            return { ...acc, [cur]: _post[cur] };
          },
          { id: doc.id, user_info: {} }
        );

        post_list.push(post);
      });

      console.log(post_list);

      dispatch(setPost(post_list));
    });
  };
};

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),

    [ADD_POST]: (state, action) => produce(state, (draft) => {
      draft.list.unshift(action.payload.post);
    }),
  },
  initialState
);

const actionCreators = {
  setPost,
  addPost,
  getPostFB,
  addPostFB,
};

export { actionCreators };
