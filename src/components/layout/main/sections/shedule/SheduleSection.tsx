import s from './SheduleSection.module.css'

export const SheduleSection = () => {
  return (
    <section className={s.section}>
      <h2>Here's a sneak peek of
        our special day's schedule</h2>
      <div>
        <h3>4.00PM</h3>
        <span>Ceremony</span>
      </div>
      <div>
        <h3>5.00PM</h3>
        <span>Cocktail</span>
      </div>
      <div>
        <h3>6.30PM</h3>
        <span>Dinner</span>
      </div>
      <div>
        <h3>10.00PM</h3>
        <span>Dancing & fireworks</span>
      </div>
    </section>
  );
};