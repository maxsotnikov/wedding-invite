import {MainSection} from './sections/main/MainSection.tsx';
import {SheduleSection} from './sections/shedule/SheduleSection.tsx';


export const Main = () => {
  return (
    <article>
      <MainSection/>
      <SheduleSection/>
    </article>
  );
};