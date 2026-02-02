import {MainSection} from './sections/main/MainSection.tsx';
import {ScheduleSection} from './sections/schedule/ScheduleSection.tsx';
import {LocationSection} from './sections/location/LocationSection.tsx';
import {TimerSection} from './sections/timer/TimerSection.tsx';
import {RegistrySection} from './sections/registry/RegistrySection.tsx';

export const Home = () => {
  return (
    <main>
      <MainSection/>
      <ScheduleSection/>
      <LocationSection/>
      <TimerSection/>
      <RegistrySection/>
    </main>
  );
};