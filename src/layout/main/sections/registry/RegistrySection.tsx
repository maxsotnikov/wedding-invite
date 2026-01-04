import registryPhoto from '../../../../assets/images/karolina-grabowska-yH50AWO8ZRo-unsplash.webp'
import dressCodePhoto from '../../../../assets/images/karolina-grabowska-p2gsaMgCsMg-unsplash.webp'

export const RegistrySection = () => {
  return (
    <section>
      <div>
        <h2>Регистрация</h2>
        <img src={registryPhoto}/>
        <p>Хотя ваше присутствие на нашей свадьбе является величайшим подарком, если вы хотите разделить нашу радость через подарок, пожалуйста, посетите наш реестр.</p>
        <button>Заполнить</button>
      </div>
      <div>
        <h2>Дресс-код</h2>
        <img src={dressCodePhoto}/>
        <p>Для этого грандиозного празднования любви, мы любезно просим вас принять элегантность случая, одевшись в формальный костюм.</p>
        <button>Подробнее</button>
      </div>
    </section>
  );
};