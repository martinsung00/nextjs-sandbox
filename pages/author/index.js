import styles from "../../styles/Home.module.css";

const Author = () => (
  <div className={styles.container}>
    <h1>About me</h1>
    <br />
    <p>
      {
        "Nice to meet you, I'm Martin! I am a full-stack engineer traveling from Criminal Justice. And as a newcomer, I'm eager to explore the wide variety of frameworks and languages out there!"
      }
    </p>
  </div>
);

export default Author;
