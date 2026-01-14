import {MainSection} from './sections/main/MainSection.tsx';
import {SсheduleSection} from './sections/shedule/SсheduleSection.tsx';
import {LocationSection} from './sections/location/LocationSection.tsx';
import {TimerSection} from './sections/timer/TimerSection.tsx';
import {RegistrySection} from './sections/registry/RegistrySection.tsx';

export const Main = () => {
  return (
    <main>
      <MainSection/>
      <SсheduleSection/>
      <LocationSection/>
      <TimerSection/>
      <RegistrySection/>
    </main>
  );
};