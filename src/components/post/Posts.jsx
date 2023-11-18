import React, { useCallback, useEffect } from "react";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import styles from "./post.module.scss";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { AiOutlineClose } from "react-icons/ai";
import { Spin } from "antd";
import { Modal, Popconfirm } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getMilestonePosts } from "../../../redux/reducer/post/getPostSlice";
import { set } from "date-fns";
import { padding } from "@mui/system";
import {
  cleanPost,
  createPost,
} from "../../../redux/reducer/post/createPostSlice";
import { deletePost } from "../../../redux/reducer/post/deletePostSlice";
import toastOptions from "@/utils/index.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updatePost } from "../../../redux/reducer/post/updatePostSlice";

const Posts = ({ milestoneId }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [newImage, setNewImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [fileImgUpload, setFileImgUpload] = useState("");
  const dataRes = useSelector((state) => state.milestonePosts?.milestonePosts);
  const createLoading = useSelector((state) => state.createPostSlice);
  const createPostStt = useSelector((state) => state.createPostSlice.data);
  const deletePostStt = useSelector((state) => state.deletePostSlice.data);
  const updatePostStt = useSelector((state) => state.updatePostSlice.data);
  const [selectedMilestoneId, setSelectedMilestoneId] = useState("");
  const [editModalContent, setEditModalContent] = useState("");
  const [editModalImage, setEditModalImage] = useState("");
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editPostId, setEditPostId] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewImage(file);
  };

  const handleEditClick = (content, image, postId) => {
    setEditModalContent(content);
    setEditModalImage(image);
    setEditPostId(postId);
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
  const handleCloseImg = () => {
    setPreviewImage(null);
  };
  const handleDelete = (id) => {
    dispatch(
      deletePost({
        payload: {
          query: {
            params: id,
          },
        },
      })
    );
  };
  const textArenaChange = (e) => {
    setContent(e.target.value);
  };
  const showModal = (milestoneId) => {
    setIsModalOpen(true);
    setSelectedMilestoneId(milestoneId);
  };

  const handleOk = () => {
    const formData = new FormData();
    formData.append("data", fileImgUpload);
    formData.append("content", content);
    dispatch(
      createPost({
        payload: {
          query: {
            params: selectedMilestoneId,
          },
          body: formData,
        },
      })
    );
  };
  const handleEditOk = (postId) => {
    const formData = new FormData();
    if (newImage) {
      formData.append("data", newImage);
    }
    formData.append("content", editModalContent);
    dispatch(
      updatePost({
        payload: {
          query: {
            params: postId,
          },
          body: formData,
        },
      })
    );
  };

  useEffect(() => {
    if (deletePostStt) {
      if (deletePostStt.message === "Post has been deleted!") {
        dispatch(
          getMilestonePosts({
            payload: {
              query: {
                params: milestoneId,
              },
            },
          })
        );
        toast.success(deletePostStt.message, toastOptions);
      }
    }
  }, [deletePostStt]);
  useEffect(() => {
    if (updatePostStt) {
      if (updatePostStt.message === "Success!") {
        setIsEditModalVisible(false);
        dispatch(
          getMilestonePosts({
            payload: {
              query: {
                params: milestoneId,
              },
            },
          })
        );
        toast.success("Update post success", toastOptions);
      }
    }
  }, [updatePostStt]);

  useEffect(() => {
    if (createPostStt) {
      if (createPostStt.message === "Post has been created!") {
        dispatch(cleanPost());
        setIsModalOpen(false);
        dispatch(
          getMilestonePosts({
            payload: {
              query: {
                params: milestoneId,
              },
            },
          })
        );
        toast.success(createPostStt.message, toastOptions);
      }
    }
  }, [createPostStt]);
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

  const handleCancel = () => {
    setIsModalOpen(false);
    setPreviewImage(null);
  };

  const onDrop = useCallback((acceptedFiles) => {
    const imageUrl = URL.createObjectURL(acceptedFiles[0]);
    setPreviewImage(imageUrl);
    setFileImgUpload(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });
  const handleDeleteConfirmation = (postId) => {
    return () => {
      handleDelete(postId);
    };
  };
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
          >
            <div className={styles["postContent"]}>
              <span>{post.content}</span>
              <div className={styles["postIcon"]}>
                <Popconfirm
                  title="Delete the post"
                  description="Are you sure to delete this post?"
                  onConfirm={handleDeleteConfirmation(post._id)}
                  okText="Yes"
                  cancelText="No"
                >
                  <MdDelete />
                </Popconfirm>

                <MdModeEditOutline
                  onClick={() =>
                    handleEditClick(post.content, post.images, post._id)
                  }
                />
                <button
                  onClick={() =>
                    handleEditClick(post.content, post.images, post._id)
                  }
                >
                  Details
                </button>
              </div>
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

      <button
        className={styles["addBtn"]}
        onClick={() => showModal(milestoneId)}
      >
        Add Post
      </button>
      <Modal
        title="Create New Post"
        open={isModalOpen}
        onOk={handleOk}
        okText={"Post"}
        onCancel={handleCancel}
        className={styles["modalPostCreate"]}
        milestoneId={selectedMilestoneId}
      >
        {createLoading.loading ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Spin indicator={antIcon} />
          </div>
        ) : (
          <div className={styles["modalPostCreateContent"]}>
            <textarea
              name=""
              id=""
              placeholder="Content Post..."
              onChange={textArenaChange}
              value={content}
              style={{ padding: "5px", fontSize: "14px" }}
            ></textarea>
            {previewImage ? (
              <div style={{ position: "relative" }}>
                <img
                  src={previewImage}
                  alt="Ảnh trước"
                  style={{
                    width: "100%",
                    border: "2px dashed #ccc",
                    padding: "5px",
                  }}
                />
                <AiOutlineClose
                  style={{
                    background: "#ccc",
                    borderRadius: "50%",
                    fontSize: "14px",
                    width: "25px",
                    height: "25px",
                    padding: "5px",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    cursor: "pointer",
                  }}
                  onClick={handleCloseImg}
                />
              </div>
            ) : (
              <div {...getRootProps()} className={styles["dropzone"]}>
                <input {...getInputProps()} />
                <p>Thả ảnh vào đây hoặc nhấn để chọn ảnh.</p>
              </div>
            )}
          </div>
        )}
      </Modal>
      <Modal
        title="Edit Post"
        open={isEditModalVisible}
        onCancel={() => setIsEditModalVisible(false)}
        onOk={() => handleEditOk(editPostId)}
        okText="Update"
      >
        <div className={styles["modalPostCreateContent"]}>
          <textarea
            value={editModalContent}
            onChange={(e) => setEditModalContent(e.target.value)}
          ></textarea>
          {editModalImage && (
            <div className={styles["change"]}>
              <img src={editModalImage} alt="Post Image" />
              <input type="file" onChange={handleImageChange} />
            </div>
          )}
        </div>
      </Modal>

      <ToastContainer
        style={{
          width: "fit-content",
          zIndex: 1000,
        }}
      />
    </div>
  );
};

export default Posts;
