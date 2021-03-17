import { Request, Response } from "express";
import qaTechTest from "./qa-tech";
import qaTheoryTest from "./qa-theory";
import { IQuestion } from "../helpers/typescript-helpers/interfaces";

export const loadTechTest = (req: Request, res: Response) => {
  let filteredTest: IQuestion[] = [];
  const test = qaTechTest.map((item) => ({
    question: item.question,
    questionId: item.questionId,
    answers: item.answers,
  }));
  while (filteredTest.length < 12) {
    const randomIndex = Math.floor(Math.random() * 26);
    if (filteredTest.includes(test[randomIndex])) {
      continue;
    }
    filteredTest.push(test[randomIndex]);
  }
  res.status(200).send(filteredTest);
};

export const loadTheoryTest = (req: Request, res: Response) => {
  let filteredTest: IQuestion[] = [];
  const test = qaTheoryTest.map((item) => ({
    question: item.question,
    questionId: item.questionId,
    answers: item.answers,
  }));
  while (filteredTest.length < 12) {
    const randomIndex = Math.floor(Math.random() * 26);
    if (filteredTest.includes(test[randomIndex])) {
      continue;
    }
    filteredTest.push(test[randomIndex]);
  }
  res.status(200).send(filteredTest);
};
