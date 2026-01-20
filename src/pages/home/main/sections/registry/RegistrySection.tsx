// import registryPhoto from '../../../../../assets/images/karolina-grabowska-yH50AWO8ZRo-unsplash.webp'
// import dressCodePhoto from '../../../../../assets/images/karolina-grabowska-p2gsaMgCsMg-unsplash.webp'
// import style from './RegistrySection.module.scss'
//
// export const RegistrySection = () => {
//   return (
//     <section>
//       <div className={style.container}>
//         <div className={style.content}>
//           <div className={style.imageWrapper}>
//             <h2 className={style.title}>Регистрация</h2>
//             <img src={registryPhoto} className={style.img}/>
//             <p>Хотя ваше присутствие на нашей свадьбе является величайшим
//               подарком, если вы хотите разделить нашу радость через подарок,
//               пожалуйста, посетите наш реестр.</p>
//             <button>Заполнить</button>
//           </div>
//           <div className={style.imageWrapper}>
//             <h2 className={style.title}>Дресс-код</h2>
//             <img src={dressCodePhoto} className={style.img}/>
//             <p>Для этого грандиозного празднования любви, мы любезно просим вас
//               принять элегантность случая, одевшись в формальный костюм.</p>
//             <button>Подробнее</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import registryPhoto from '../../../../../assets/images/karolina-grabowska-yH50AWO8ZRo-unsplash.webp'
import dressCodePhoto from '../../../../../assets/images/karolina-grabowska-p2gsaMgCsMg-unsplash.webp'
import style from './RegistrySection.module.scss'

export const RegistrySection = () => {
  return (
    <section className={style.container}>
      <div className={style.content}>

        {/* Левая колонка */}
        <div className={style.column}>
          <div className={style.imageWrapper}>
            <h2 className={style.title}>Регистрация</h2>
            <img src={registryPhoto} className={style.img} alt="Registry" />
          </div>
          <p className={style.description}>
            Хотя ваше присутствие на нашей свадьбе является величайшим
            подарком, если вы хотите разделить нашу радость через подарок,
            пожалуйста, посетите наш реестр.
          </p>
          <button className={style.button}>Регистрация</button>
        </div>

        {/* Правая колонка */}
        <div className={style.column}>
          <div className={style.imageWrapper}>
            <h2 className={style.title}>Дресс-код</h2>
            <img src={dressCodePhoto} className={style.img} alt="Dress Code" />
          </div>
          <p className={style.description}>
            Для этого грандиозного празднования любви, мы любезно просим вас
            принять элегантность случая, одевшись в формальный костюм.
          </p>
          <button className={style.button}>Вопросы</button>
        </div>

      </div>
    </section>
  );
};