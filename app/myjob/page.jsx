"use client";
import React from "react";
import jobs from "./jobs-Front.js";
import jobsBack from "./jobs-Backend.json";
import Modal from "react-modal";
import "./styles/myjob.css";
import { useState } from "react";
import Image from 'next/image';

Modal.setAppElement('main');

function MyJob() {
  const [currentJob, setCurrentJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const openModal = (job) => {
    setCurrentJob(job);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentJob(null);
    setIsModalOpen(false);
  };

  const openImageModal = (image) => {
    setSelectedImage(image);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setIsImageModalOpen(false);
  };

  return (
    <div className="main">
      <div className="jobs">
        {jobs.map((job, index) => (
          <div className="job-item" key={index}>
            <div>
              <p className="project-type">{job.project}</p>
              <h3>{job.title}</h3>
              <p className="job-desc">{job.description}</p>
            </div>
            <Image  className="images_job" src={job.main_image} alt="" />
            <button className="btn-detail" onClick={() => openModal(job)}>
              Подробнее
            </button>
          </div>
        ))}
        {jobsBack.map((Back, index) => (
          <div className="job-item" key={index}>
            <div>
            <p className="project-type">{Back.project}</p>
            <h3>{Back.title}</h3>
            <p className="job-desc">{Back.description}</p>
            </div>
            <button
              className="btn-detail"
              onClick={() => (window.location.href = "")}
            >
              Ссылка
            </button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Детали проекта"
        className="modal_job__content"
        overlayClassName="modal_job__overlay"
      >
        {currentJob && (
          <>
            <div className="close" onClick={closeModal}>
              <span className="cross-icon"></span>
            </div>
            <h2>{currentJob.title}</h2>
            <p className="job-desc">{currentJob.description}</p>
            <a className="btn-detail" href={currentJob.url}>
              Ссылка
            </a>
            <div className="additional-images">
              {currentJob.additional_images?.map((image, idx) => (
                <Image
                  className="images_job"
                  key={idx}
                  src={image}
                  alt={`Дополнительное изображение ${idx + 1}`}
                  onClick={(event) => {
                    if (window.innerWidth >= 500) {
                      openImageModal(image);
                    } else {
                      event.preventDefault();
                    }
                  }}
                />
              ))}
            </div>
          </>
        )}
      </Modal>
      
      <Modal
        isOpen={isImageModalOpen}
        onRequestClose={closeImageModal}
        contentLabel="Просмотр изображения"
        className="modal_image__content"
        overlayClassName="modal_image__overlay"
      >
        {selectedImage && (
          <>
            <div className="close" onClick={closeImageModal}>
              <span className="cross-icon"></span>
            </div>
            <Image
              className="enlarge-image"
              src={selectedImage}
              alt="Расширенное изображение"
            />
          </>
        )}
      </Modal>
    </div>
  );
}

export default MyJob;
