import type {RadioGroupConfig} from '@/widgets/modalWindow/types/formTypes.ts';

export const FORM_RADIO: RadioGroupConfig[] = [
  {
    title: 'Будете ли ночевать?',
    name: 'overnight',
    options: [
      {
        labelTitle: 'Да',
        value: 'Да'
      },
      {
        labelTitle: 'Нет',
        value: 'Нет'
      }
    ]
  },
  {
    title: 'Как будете добираться до усадьбы?',
    name: 'transport',
    options: [
      {
        labelTitle: 'Личный транспорт',
        value: 'Личный транспорт'
      },
      {
        labelTitle: 'Трансфер',
        value: 'Трансфер'
      }
    ]
  },
]
