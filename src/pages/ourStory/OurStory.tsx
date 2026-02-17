import style from './OurStory.module.scss';
import photo1
  from '@/assets/images/ourStoryPage/olga-solodilova-OK62mLojtY4-unsplash.webp'
import photo2
  from '@/assets/images/ourStoryPage/olga-solodilova-OK62mLojtY4-unsplash23213.webp'
import photo3
  from '@/assets/images/ourStoryPage/olga-solodilova-f7ibaLlie6w-unsplash.webp'
import photo4
  from '@/assets/images/ourStoryPage/olga-solodilova-5RjqNf7a49E-unsplash.webp'
import photo5
  from '@/assets/images/ourStoryPage/f05aa32a-9f16-4f15-817d-a471d7a24e48.webp'

export const OurStory = () => {
  return (
    <section>
      <div className={style.container}>
        <h2 className={style.title}>Наша история</h2>
        <div className={style.wrapper1}>
          <img
            src={photo1}
            className={style.photo1}
            alt={'main photo'}
          />
          <div className={style.descriptionWrapper}>
            <p>Наш путь начался, как и у многих, в самый обычный день — две
              дороги пересеклись на перекрёстке жизни. Среди тысяч лиц и суеты
              города именно этот мимолётный момент стал началом нашей
              необыкновенной истории любви.</p>
            <div className={style.imgWrapper}>
              <img
                src={photo2}
                alt="photo"
              />
              <img
                src={photo3}
                alt="photo"
              />
            </div>
          </div>
          <h2 className={style.namesTitle}>Максим & Инна</h2>
        </div>
        <div className={style.wrapper2}>
          <p className={style.text}>Мы знакомы давно, но ни разу не говорили, не
            улыбались друг другу, а может, даже не смотрели в глаза. Так близко
            и в то же время так далеко мы находились друг от друга все эти годы
            — счастье было рядом, под ногами, но неизменно ускользало сквозь
            пальцы.</p>
          <img
            src={photo4}
            className={style.photo4}
            alt={'photo'}
          />
          <p className={style.text}>Вместе мы преодолевали жизненные испытания,
            находя уроки в каждом препятствии и радость — в каждой победе. Со
            временем наша любовь и близость только усиливались. Сегодня, на
            пороге новой главы, мы с волнением и счастьем продолжаем писать нашу
            историю — историю любви, приключений и сердец, навсегда связанных
            друг с другом.</p>
          <img
            src={photo5}
            className={style.photo5}
            alt={'photo'}
          />
        </div>
      </div>
    </section>
  );
};