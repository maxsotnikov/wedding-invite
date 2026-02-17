import {LocationSection, MainSection, RegistrySection, ScheduleSection, TimerSection,} from './sections'

export const Home = () => {
  return (
    <main>
      <MainSection />
      <ScheduleSection />
      <LocationSection />
      <TimerSection />
      <RegistrySection />
    </main>
  );
};