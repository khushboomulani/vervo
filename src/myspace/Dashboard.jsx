import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";




export default function DashboardIcons() {
  const navigate = useNavigate();
  const backgroundImageUrl = "src/assets/images/bg.jpg";

  return (
    <div
      className="py-5"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container py-5">
        <div className="row g-4 justify-content-center">
          {modules.map((mod, i) => (
            <div key={i} className="col-6 col-sm-4 col-md-3 col-lg-2">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="text-center border rounded-4 p-4 shadow-sm bg-white bg-opacity-75 h-100 d-flex flex-column align-items-center justify-content-center"
                style={{ cursor: mod.path ? "pointer" : "default", transition: "all 0.3s ease" }}
                onClick={() => mod.path && navigate(mod.path)}
              >
                <div className="fs-1 text-primary mb-2">{mod.icon}</div>
                <p className="mb-0 fw-medium text-dark small">{mod.title}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
