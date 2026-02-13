import style from '../Info.module.scss'
import type {InfoBlockType} from '@/shared/types/types.ts';
import {Link} from 'react-router';

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
    title: 'Проезд и проживание',
    description: [
      {
        questions: 'Как добраться и где остановиться?',
        answer: (
          <>
            С данной информацией вы можете более подробно ознакомиться {' '}
            <Link
              to={'/location'}
              className={style.link}
            >здесь</Link>
          </>
        )
      },
    ]
  },
]
