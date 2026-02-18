import type {InfoBlockType} from '@/shared/types/infoTypes.ts';
import style from '../Location.module.scss'
import {EXTERNAL_LINKS} from '@/shared/config/externalLinks.ts';

export const LOCATION_DATE: InfoBlockType[] = [
  {
    id: 'travel',
    title: 'Как добраться',
    subTitle: 'Мы рады, что вы планируете присоединиться к нам для нашего свадебного празднования! Вот некоторые сведения, чтобы помочь вам проложить свой путь к усадьбе Марьянино',
    description: [
      {
        questions: 'На машине',
        answer: (
          <>
            До места проведения свадьбы возможно добраться на личном
            транспорте по данным {' '} <a
            href={EXTERNAL_LINKS.manorMap}
            target="_blank"
            rel="noreferrer"
            className={style.link}
          >
            координатам
          </a>
          </>
        )
      },
      {
        questions: 'Трансфер',
        answer: 'Будет организован трансфер из Минска до места проведения свадьбы, а также обратно в Минск после завершения мероприятия'
      },
    ]
  },
  {
    id: 'stay',
    title: 'Проживание',
    subTitle: 'Для гостей предусмотрено проживание в комфортных и уютных домиках, где можно расслабиться, насладиться тишиной и с теплом провести время после праздничного дня',
    description: [
      {
        questions: 'Где переночевать',
        answer: 'На территории размещаются 3 гостевых домика, где можно расслабиться, насладиться тишиной и с теплом провести время после праздничного дня. В домике размещается от 10 до 16 человек'
      },
    ]
  },
]