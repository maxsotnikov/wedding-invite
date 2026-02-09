import type {ReactNode} from 'react';

type InfoDetails = {
  questions: string;
  answer: string | ReactNode;
}

export type InfoBlockType = {
  id: string;
  title: string;
  subTitle?: string;
  description: InfoDetails[];
}