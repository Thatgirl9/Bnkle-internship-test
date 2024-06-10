import { cardTitles } from "../redux/counterSlice";

interface Card {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  thumbnail: {
    large: string;
    small: string;
  };
}

// Fetch Data test

it("Should set cards and dispatch cardTitle when data is fetched successfully", async () => {
  const mockData = [
    {
      id: "1",
      title: "Test Title",
      content: "Testing 1 2 3",
      author: {
        name: "Author Name",
        avatar: "avatar.png",
        role: "Author Role",
      },
      thumbnail: {
        large: "large.png",
        small: "small.png",
      },
    },
  ];

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
    })
  ) as jest.Mock;

  const dispatch = jest.fn();
  const setCards = jest.fn();
  const setLoading = jest.fn();
  const setErrorMessage = jest.fn();

  await fetch(
    "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setCards(data);
      setLoading(false);
      const cardTitle = data.map((card: Card) => ({
        id: card.id,
        title: card.title,
      }));
      dispatch(cardTitles(cardTitle));
    })
    .catch((error) => {
      setErrorMessage(error.message);
      setLoading(false);
      console.log(error);
    });

  expect(setCards).toHaveBeenCalledWith(mockData);
  expect(setLoading).toHaveBeenCalledWith(false);
  expect(dispatch).toHaveBeenCalledWith(
    cardTitles([{ id: "1", title: "Test Title" }])
  );
});

// Loading State Test
it("Should set loading to false after data is fetched", async () => {
  const mockData = [
    {
      id: "1",
      title: "Test Title",
      content: "Testing 1 2 3",
      author: {
        name: "Author Name",
        avatar: "avatar.png",
        role: "Author Role",
      },
      thumbnail: {
        large: "large.png",
        small: "small.png",
      },
    },
  ];

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
    })
  ) as jest.Mock;

  const dispatch = jest.fn();
  const setCards = jest.fn();
  const setLoading = jest.fn();
  const setErrorMessage = jest.fn();

  await fetch(
    "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setCards(data);
      setLoading(false);
      const cardTitle = data.map((card: Card) => ({
        id: card.id,
        title: card.title,
      }));
      dispatch(cardTitles(cardTitle));
    })
    .catch((error) => {
      setErrorMessage(error.message);
      setLoading(false);
      console.log(error);
    });

  expect(setLoading).toHaveBeenCalledWith(false);
});
