/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Movie {
  id: string;
  title: string;
  votes: number;
  synopsis: string;
  posterUrl: string;
  referenceUrl: string;
  referenceLabel: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface LeaderboardEntry {
  name: string;
  puzzlePoints: number;
  quizPoints: number;
  totalPoints: number;
  rank: string;
  isCurrentUser?: boolean;
}

export interface UserState {
  name: string;
  hunterRank: string;
  xp: number;
  votedMovieId: string | null;
  quizHighScore: number;
  puzzleSubmissionsCount: number;
}
