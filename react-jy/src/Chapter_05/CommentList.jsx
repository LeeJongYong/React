import React from "react";
import Comment from "./Comment";


function CommentList(props){
    return(
        <div>
        {comments.map((comment) => {
            return(
                <Comment name={comment.name} comment={comment.comment}/>
                )
            })}
        </div>
    )
}

const comments = [
    {
        name: "이종용"
        , comment: "안녕하세요 Gomlee입니다."
    },
    {
        name: "우투리"
        , comment: "나는 우투리라고 해. 반가워!"
    },
    {
        name: "홍길동"
        , comment: "요기 뿅!\n 저기 뿅!"
    }
];

export default CommentList;