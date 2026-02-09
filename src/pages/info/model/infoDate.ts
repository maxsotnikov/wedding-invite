import type {InfoBlockType} from '@/shared/types/types.ts';

export const INFO_DATE: InfoBlockType[] = [
  {
    id: 'children',
    title: 'Дети',
    description: [
      {
        questions: 'Можно ли с детьми?',
        answer: 'Мы будем рады разделить с вами этот особенный день в атмосфере спокойствия и романтики, поэтому наша свадьба пройдет в формате только для взрослых, без присутствия детей.'
      },
    ]
  },
  {
    id: 'accommodation',
    title: 'Проживание',
    description: [
      {
        questions: 'Где остановиться?',
        answer: 'На территории размещаются 3 гостевых домика'
      },
      {
        questions: 'Как добраться обратно?',
        answer: 'Мы организуем трансфер .'
      },
    ]
  },
]
