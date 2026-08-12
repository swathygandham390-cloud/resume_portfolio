import React from "react";

const technicalSkills = [
  { name: "JavaScript", level: 60 },
  { name: "React.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "HTML5 / CSS3", level: 90 },
  { name: "MongoDB", level: 45 },
  { name: "Python", level: 60 },
  { name: "Git & GitHub", level: 95 },
];

const softSkills = [
  "Communication",
  "Teamwork",
  "Problem Solving",
  "Time Management",
  "Adaptability",
  "Leadership",
  "Critical Thinking",
];

const Skills = () => {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
      <h1 style={{ fontSize: "28px", color: "#111827", marginBottom: "30px" }}>
        Skills
      </h1>

      {/* Technical Skills */}
      <div style={{ marginBottom: "40px" }}>
        <h2
          style={{
            fontSize: "20px",
            color: "#2563eb",
            borderBottom: "2px solid #2563eb",
            paddingBottom: "8px",
            marginBottom: "20px",
          }}
        >
          Technical Skills
        </h2>

        {technicalSkills.map((skill, index) => (
          <div key={index} style={{ marginBottom: "16px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "6px",
              }}
            >
              <span style={{ fontSize: "14px", fontWeight: "600", color: "#1f2937" }}>
                {skill.name}
              </span>
              <span style={{ fontSize: "13px", color: "#6b7280" }}>
                {skill.level}%
              </span>
            </div>
            <div
              style={{
                width: "100%",
                height: "10px",
                background: "#e5e7eb",
                borderRadius: "6px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${skill.level}%`,
                  height: "100%",
                  background: "linear-gradient(90deg, #2563eb, #60a5fa)",
                  borderRadius: "6px",
                  transition: "width 0.6s ease",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Soft Skills */}
      <div>
        <h2
          style={{
            fontSize: "20px",
            color: "blue",
            borderBottom: "2px solid #059669",
            paddingBottom: "8px",
            marginBottom: "20px",
          }}
        >
          Soft Skills
        </h2>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {softSkills.map((skill, index) => (
            <span
              key={index}
              style={{
                background: "#13db7e",
                color: "black",
                border: "1px solid blue",
                padding: "8px 16px",
                borderRadius: "20px",
                fontSize: "13px",
                fontWeight: "600",
                
                
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;



