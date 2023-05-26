import styles from "../styles/PianoList.module.css";
import PianoCard from "./PianoCard"

const PianoList = ({pianoList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CHOOSE AN INSTRUMENT THAT MATHES YOU!</h1>
      <p className={styles.desc}>
      Are you looking for an musical instrument that will inspire you to create beautiful music? 
      Look no further than our music store! We offer a wide range of musical instrument for sale, 
      including grand pianos, guitars, drums, violin and etc. 
      Whether you are a beginner or a seasoned musician, we have an instrument that will meet your needs.
      </p>
      <div className={styles.wrapper}>
        {pianoList.map((piano) => (
          <PianoCard key={piano._id} piano={piano}/>
        ))}
      </div>
    </div>
  );
};

export default PianoList;
