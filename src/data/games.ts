export type Game = {
  title: string;
  /** Путь к изображению игры. Пустая строка — изображение ещё не загружено. */
  image: string;
  url: string;
};

export const games: Game[] = [
  {
    title: "Повтори это",
    image: "",
    url: "https://tatyanagtv.github.io/tryToRepeat/",
  },
  {
    title: "Угадай, кто это",
    image: "",
    url: "https://tatyanagtv.github.io/GuessWhiIsIt/",
  },
  {
    title: "Мемори",
    image: "",
    url: "https://tatyanagtv.github.io/MemoryGame/",
  },
  {
    title: "Сделай так же",
    image: "",
    url: "https://tatyanagtv.github.io/DoTheSame/",
  },
  {
    title: "Фрукты",
    image: "",
    url: "https://tatyanagtv.github.io/Fuits5/",
  },
  {
    title: "Кортекс",
    image: "",
    url: "https://tatyanagtv.github.io/Cortex/",
  },
];

export const supervisions = [
  {
    title: "Написание заключения по итогам диагностики",
    description:
      "Помощь в подготовке профессионального нейропсихологического заключения по результатам проведённой диагностики.",
  },
  {
    title: "Составление коррекционного маршрута",
    description:
      "Совместное определение основных направлений нейропсихологической коррекции и последовательности дальнейшей работы.",
  },
  {
    title: "Разбор кейса",
    description:
      "Разбор конкретного профессионального случая, анализ диагностических данных и обсуждение возможных направлений дальнейшей работы.",
  },
];
