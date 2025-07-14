import React from "react";
import { motion } from "framer-motion";

export default function LegendSection() {
  return (
    <div style={{
      padding: "40px 20px",
      background: "#f9f9f9",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "40px",
    }}>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "25px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          maxWidth: "400px",
          flex: "1 1 300px"
        }}
      >
        <h3 style={{ marginBottom: "16px" }}>🗺️ What do the symbols mean?</h3>
        <ul style={{ paddingLeft: "20px", lineHeight: "1.6" }}>
          <li><strong>Blue dots:</strong> Sites with higher probability</li>
          <li><strong>Farm icon:</strong> Location with detected viruses</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "25px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          maxWidth: "400px",
          flex: "1 1 300px"
        }}
      >
        <h3 style={{ marginBottom: "16px" }}>📖 How does the page work?</h3>
        <p style={{ lineHeight: "1.6" }}>
          Use the menu to the left of the map to switch between visualization modes. 
          You can either view risk probability points or the spatial interaction network between localities.
        </p>
      </motion.div>
    </div>
  );
}
