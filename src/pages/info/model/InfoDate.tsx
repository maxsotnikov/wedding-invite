import style from '../Info.module.scss'
import type {InfoBlockType} from '@/pages/info/types/infoTypes.ts';
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
  {
    id: 'gifts',
    title: 'Подарки',
    subTitle: 'Ваше присутствие — бесценный подарок для нас. А если вы захотите поздравить нас ещё и знаком внимания, мы с любовью собрали несколько вариантов, которые могут быть вам близки',
    description: [
      {
        questions: 'Цветочная подписка',
        answer: (
          <>
            Самые красивые цветы — те, что дарят радость не на один день. Если вы захотите порадовать нас цветами, вы можете внести любую сумму в нашу цветочную {' '}
            <a
              href={'https://koshikshop.by/?utm_source=businesscard&utm_medium=topmapsbiz&utm_campaign=website'}
              target="_blank"
              className={style.link}
            >подписку</a>
          </>
        )
      },
    ]
  },
]
