import repeatAsset from "@/assets/game-repeat.jpg.asset.json";
import guessAsset from "@/assets/game-guess.jpg.asset.json";
import memoryAsset from "@/assets/game-memory.png.asset.json";
import doTheSameAsset from "@/assets/game-dothesame.png.asset.json";
import fruitsAsset from "@/assets/game-fruits.jpg.asset.json";
import cortexAsset from "@/assets/game-cortex.jpg.asset.json";

export type Game = {
  title: string;
  /** Путь к изображению игры. Пустая строка — изображение ещё не загружено. */
  image: string;
  url: string;
};

export const games: Game[] = [
  {
    title: "Повтори это",
    image: repeatAsset.url,
    url: "https://tatyanagtv.github.io/tryToRepeat/",
  },
  {
    title: "Угадай, кто это",
    image: guessAsset.url,
    url: "https://tatyanagtv.github.io/GuessWhiIsIt/",
  },
  {
    title: "Мемори",
    image: memoryAsset.url,
    url: "https://tatyanagtv.github.io/MemoryGame/",
  },
  {
    title: "Сделай так же",
    image: doTheSameAsset.url,
    url: "https://tatyanagtv.github.io/DoTheSame/",
  },
  {
    title: "Фрукты",
    image: fruitsAsset.url,
    url: "https://tatyanagtv.github.io/Fuits5/",
  },
  {
    title: "Кортекс",
    image: cortexAsset.url,
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
