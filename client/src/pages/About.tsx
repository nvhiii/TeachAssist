import React from "react";
import Home from "./Home.tsx";

export default function About() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Our Mission</h1>
      <div className="pb-3">
        <p>
          In the whirlwind of lesson planning, grading, and endless paperwork,
          many educators yearn to simply focus on what they do best: inspiring
          young minds. TeachAssist is here to revolutionize the teaching
          experience by becoming your personal, intelligent assistant.
        </p>
      </div>
      <div className="pb-3">
        <p>
          Imagine a future where AI personalizes lesson plans, crafting engaging
          experiences tailored to your curriculum, student data, and unique
          teaching style. TeachAssist empowers you to ditch the drudgery of
          repetitive grading. Our AI efficiently assesses assignments, providing
          insightful feedback that frees you to guide and support your students.
          This isn't just about saving time; it's about fostering deeper
          connections and maximizing the impact you have on every learner.
        </p>
      </div>
      <div className="pb-3">
        <p>
          TeachAssist goes beyond grading. It's a centralized hub for
          streamlining administrative tasks, managing student information, and
          accessing valuable classroom resources. Let TeachAssist handle the
          mundane, so you can unleash your passion and ignite a love of learning
          in your students. Join us in shaping the future of education, where
          educators are empowered to make a difference, every single day.
        </p>
      </div>
    </div>
  );
}
