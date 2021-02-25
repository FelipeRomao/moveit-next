import { createContext, useState, ReactNode } from "react";

import challenges from "../../challenges.json";

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  experienceToNextLevel: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengeContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  return (
    <ChallengeContext.Provider
      value={{
        levelUp,
        startNewChallenge,
        resetChallenge,
        level,
        activeChallenge,
        currentExperience,
        challengesCompleted,
        experienceToNextLevel,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
}
