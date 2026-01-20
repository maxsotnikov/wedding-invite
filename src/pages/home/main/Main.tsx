import {MainSection} from './sections/main/MainSection.tsx';
import {ScheduleSection} from '@/pages/home/main/sections/schedule/ScheduleSection.tsx';
import {LocationSection} from './sections/location/LocationSection.tsx';
import {TimerSection} from './sections/timer/TimerSection.tsx';
import {RegistrySection} from './sections/registry/RegistrySection.tsx';

export const Main = () => {
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