import { useContext } from "react";

import { ChallengeContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/ExperienceBar.module.css";

export default function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengeContext
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 px</span>

      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience} px
        </span>
      </div>

      <span>{experienceToNextLevel} px</span>
    </header>
  );
}
