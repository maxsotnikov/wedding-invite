import {MainSection} from './sections/main/MainSection.tsx';
import {SheduleSection} from './sections/shedule/SheduleSection.tsx';
import {LocationSection} from './sections/location/LocationSection.tsx';
import {TimerSection} from './sections/timer/TimerSection.tsx';
import {RegistrySection} from './sections/registry/RegistrySection.tsx';

export const Main = () => {
  return (
    <main>
      <MainSection/>
      <SheduleSection/>
      <LocationSection/>
      <TimerSection/>
      <RegistrySection/>
    </main>
  );
};