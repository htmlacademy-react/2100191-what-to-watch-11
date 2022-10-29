import MainScreen from '../../pages/home-screen/home-screen';

type MovieType = {
  name: string;
  date: number;
  genre: string;
}

type AppPropsType = {
  featuredMovie: MovieType;
}

function App({featuredMovie}: AppPropsType): JSX.Element {
  return (
    <MainScreen featuredMovie={featuredMovie}/>
  );
}

export default App;
