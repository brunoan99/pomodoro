import Home from "@/pages/home";
import { TimerProvider, ThemeProvider } from '@/context';

const HomePage = () => (
  <ThemeProvider>
    <TimerProvider>
      <Home/>
    </TimerProvider>
  </ThemeProvider>
)

export default HomePage;
