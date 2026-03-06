import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteStudy, toggleStudy } from "../actions/studyActions";

function StudyList() {

  const studies = useSelector((state) => state.studies);
  const dispatch = useDispatch();

  return (

    <div
      style={{
        maxWidth: "600px",
        margin: "30px auto",
        padding: "20px",
        background: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
      }}
    >

      <h2 style={{ textAlign: "center" }}>
        Study Planner
      </h2>

      {studies.length === 0 ? (

        <p style={{ textAlign: "center" }}>
          No study tasks
        </p>

      ) : (

        studies.map((study) => (

          <div
            key={study.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              marginBottom: "10px",
              background: "#f1f5f9",
              borderRadius: "6px"
            }}
          >

            <span
              onClick={() => dispatch(toggleStudy(study.id))}
              style={{
                cursor: "pointer",
                textDecoration: study.completed
                  ? "line-through"
                  : "none"
              }}
            >
              {study.text}
            </span>

            <button
              onClick={() => dispatch(deleteStudy(study.id))}
              style={{
                background: "#ef4444",
                border: "none",
                color: "white",
                padding: "6px 12px",
                borderRadius: "6px",
                cursor: "pointer"
              }}
            >
              Delete
            </button>

          </div>

        ))

      )}

    </div>

  );

}

export default StudyList;
