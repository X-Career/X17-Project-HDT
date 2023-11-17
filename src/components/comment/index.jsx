import React, { useEffect, useState } from "react";
import styles from "../../pages/vacation-detail/vacationDetail.module.scss";
import { dataEx } from "../../utils";
import Image from "next/image";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { getComments } from "../../../redux/reducer/comment/getComment";
import { createComments } from "../../../redux/reducer/comment/createComment";
import { useDispatch, useSelector } from "react-redux";
import { deleteComments } from "../../../redux/reducer/comment/deleteComment";
import { clean } from "../../../redux/reducer/comment/deleteComment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const Comment = ({ vacationId }) => {
  const toastOptions = {
    position: "bottom-right",
    autoClose: 1000,
    pauseOnHover: true,
    draggable: true,
  };
  const commentData = useSelector((state) => state.commentSlice.data);
  const commentStt = useSelector((state) => state.createCommentSLice.data);
  const userData = useSelector((state) => state.getInfo.data);
  const deleteStt = useSelector((state) => state.deleteCommentSLice.data);
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  useEffect(() => {
    if (deleteStt) {
      if (deleteStt.message === "Comment has been deleted!") dispatch(clean());
      toast.success("Comment has been deleted!", toastOptions);
      dispatch(
        getComments({
          payload: {
            query: {
              params: vacationId,
            },
          },
        })
      );
    }
  }, [deleteStt]);
  useEffect(() => {
    dispatch(
      getComments({
        payload: {
          query: {
            params: vacationId,
          },
        },
      })
    );
  }, [vacationId, dispatch]);
  const handleDeleteComment = (id) => {
    dispatch(
      deleteComments({
        payload: {
          query: {
            params: id,
          },
        },
      })
    );
  };

  const handleOnchange = (event) => {
    setComment(event.target.value);
  };
  useEffect(() => {
    if (commentStt?.message === "create comment completed!!") {
      dispatch(
        getComments({
          payload: {
            query: {
              params: vacationId,
            },
          },
        })
      );
    }
  }, [commentStt]);
  const handleCreateCmt = () => {
    dispatch(
      createComments({
        payload: {
          query: {
            params: vacationId,
          },
          body: {
            content: comment,
          },
        },
      })
    );
    setComment("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCreateCmt();
    }
  };

  return (
    <>
      <div className={styles["form-comment"]} style={{ marginTop: "5rem" }}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Write comment..."
          value={comment}
          onKeyDown={handleKeyDown}
          onChange={handleOnchange}
        />
        <button>
          <PiPaperPlaneRightFill onClick={handleCreateCmt} />
        </button>
      </div>
      {commentData?.data?.length > 0 ? (
        commentData?.data?.map((comment, index) => (
          <div
            className={styles["commentItem"]}
            key={comment?._id}
            style={{ marginBottom: "1rem" }}
          >
            {comment?.user?.avatarUrl === "" ? (
              <Image
                src={dataEx.host.avatarUrl}
                alt=""
                width={40}
                height={40}
              />
            ) : (
              <Link href={`/users/${comment?.user?._id}`}>
                <Image
                  src={comment?.user?.avatarUrl}
                  alt=""
                  width={40}
                  height={40}
                />
              </Link>
            )}
            <div className={styles["comment-info"]}>
              <span>{comment?.user?.username}</span>
              <span>{comment?.content}</span>
            </div>
            {comment?.user?._id === userData?.data?._id && (
              <button
                onClick={() => handleDeleteComment(comment._id)}
                style={{
                  maxHeight: "fit-content",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  height: "fit-content",
                  alignSelf: "center",
                  cursor: "pointer",
                }}
              >
                Xóa
              </button>
            )}
            <ToastContainer
              style={{
                width: "fit-content",
              }}
            />
          </div>
        ))
      ) : (
        <div>No Comment</div>
      )}
    </>
  );
};

export default Comment;
