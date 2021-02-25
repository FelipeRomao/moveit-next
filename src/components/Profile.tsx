import { useContext } from "react";

import { ChallengeContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/Profile.module.css";

export default function Profile() {
  const { level } = useContext(ChallengeContext);

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/29839394?s=460&u=1bb42d38226bd918f01b214e431fa8e8bb2e3d9a&v=4"
        alt=""
      />

      <div>
        <strong>Felipe Romao</strong>

        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
