import React, { useCallback, useEffect } from "react";
import styles from "../post/post.module.scss";
import { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Modal, Popconfirm } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getMilestonePosts } from "../../../redux/reducer/post/getPostSlice";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";

const Post = ({ milestoneId }) => {
  const dispatch = useDispatch();
  const dataRes = useSelector((state) => state.milestonePosts?.milestonePosts);
  const createLoading = useSelector((state) => state.createPostSlice);
  const [editModalContent, setEditModalContent] = useState("");
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editModalImage, setEditModalImage] = useState("");
  const handleEditClick = (content, image, postId) => {
    setEditModalContent(content);
    setEditModalImage(image);
    setIsEditModalVisible(true);
  };
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  useEffect(() => {
    dispatch(
      getMilestonePosts({
        payload: {
          query: {
            params: milestoneId,
          },
        },
      })
    );
  }, [milestoneId]);

  return (
    <div className={styles["postContainer"]}>
      {dataRes[milestoneId]?.data.length === 0 ? (
        <div className={styles["no-posts-message"]}>
          <p style={{ color: "red" }}>Không có bài viết nào được tìm thấy.</p>
        </div>
      ) : (
        dataRes[milestoneId]?.data.map((post, index) => (
          <div
            key={post._id}
            className={
              index % 2 === 0 ? styles["post"] : styles["post-reverse"]
            }
            style={{ cursor: "pointer" }}
            onClick={() => handleEditClick(post.content, post.images, post._id)}
          >
            <div className={styles["postContent"]}>
              <span>{post.content}</span>
            </div>
            <img
              src={post.images}
              alt={`Post ${index + 1}`}
              width={200}
              height={200}
            />
          </div>
        ))
      )}
      <Modal
        title="Detail Post"
        open={isEditModalVisible}
        onCancel={() => setIsEditModalVisible(false)}
        okText="Ok"
        width={600}
      >
        <div className={styles["modalPostCreateContent"]}>
          <textarea
            value={editModalContent}
            style={{ border: "none", fontSize: "16px", outline: "none" }}
          ></textarea>

          <Image
            src={editModalImage}
            width={1920}
            height={1080}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default Post;
