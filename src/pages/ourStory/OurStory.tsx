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
  from '@/assets/images/ourStoryPage/olga-solodilova--Dc0PI6XWAc-unsplash.webp'

export const OurStory = () => {
  return (
    <section>
      <div className={style.container}>
        <div className={style.content}>
          <h2 className={style.title}>Наша история</h2>
          <div className={style.wrapper}>
            <img
              src={photo1}
              className={style.photo1}
            />
            <div className={style.rightWrapper}>
              <p>Our journey began like any other day, two paths converging at
                the crossroads of life. In a city filled with countless faces,
                it was a seemingly ordinary moment that ignited our
                extraordinary love story.</p>
              <div className={style.imgWrapper}>
                <img
                  src={photo2}
                  alt=""
                />
                <img
                  src={photo3}
                  alt=""
                />
              </div>
            </div>
            <h2 className={style.namesTitle}>Максим & Инна</h2>

          </div>
          <div className={style.wrapper2}>
            <p className={style.text}>Our love story wouldn't be complete
              without mentioning our two
              loyal Dalmatian dogs, Max and Bella. They've been with us through
              thick and thin, bringing joy and laughter to our lives with their
              spots and wagging tails.</p>
            <img
              src={photo4}
              className={style.photo4}
            />
            <p className={style.text}>Together, we faced life's challenges
              head-on, learning from each obstacle and celebrating each triumph.
              Our love and bond only grew stronger with time.

              Today, as we stand on the precipice of our new chapter, we are
              excited to write the rest of our story together. Our love has
              deepened, our adventures have multiplied, and our hearts are
              forever entwined.</p>
            <img
              src={photo5}
              className={style.photo5}
            />
          </div>
        </div>
      </div>
    </section>
  );
};