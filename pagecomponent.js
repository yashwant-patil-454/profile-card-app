import { skills } from "./skills";

function Avatar() {
  return <img className="avatar" src="dev.jpg" alt="Yashwant Patil" />;
}

function Intro() {
  return (
    <div>
      <h1>Yashwant Patil</h1>
      <p>
        Full-stack web developer working with Java, Spring Boot, React, and
        MySQL, building scalable backend services and modern frontend
        applications. When I'm not coding or learning new technologies, I enjoy
        exploring system design concepts, improving my development skills, and
        keeping up with new trends in software engineering.
      </p>
    </div>
  );
}

export { Avatar, Intro, SkillList };

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} level={skill.level} color={skill.color} />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "intermediate" && <span>✌️</span>}
        {level === "beginner" && <span>🙂</span>}
        {level === "advanced" && <span>😎</span>}
      </span>
    </div>
  );
}
