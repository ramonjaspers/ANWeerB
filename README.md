# ANWeerB

ANWB assignment ReactNative weather app

## Setup

- Clone the repo
- Copy the .env.example to .env and fill in your API key
- Run `pnpm install`
- Run `pnpm android` or `pnpm ios`

## TASKS

- [x]Geef weerinformatie op dmv https://openweathermap.org/api.
- [x]Toon de huidige weersomstandigheden voor een specifieke locatie.
- [x]Toon de temperatuur, het weericoon, de windsnelheid en een korte beschrijving van het weer.
- [X]Voeg een zoekfunctie toe waarmee gebruikers de weersomstandigheden voor verschillende locaties kunnen opvragen.
- [99%]Zorg ervoor dat de app er goed uitziet op zowel iOS als Android apparaten.

Spent ~8hrs

## Color Scheme

- **Primary**: #003d86 (Deep Blue)
- **Secondary**: #0096da (Sky Blue)
- **Tertiary**: #ffcd00 (Golden Yellow)

## Tech and sources used

- **React Native** with **Expo**
- **TypeScript** for type safety
- **Zustand** for state management (search history)
- **TanStack Query** for data fetching and caching (API's)
- **Expo Location** for GPS services
- **OpenWeatherMap API** for weather data and docs
- **[CSS Gradient](https://cssgradient.io/)** for gradients
- **ANWB website** for inspiration and colors
- **Claude sonnet 4.5** used for style generation (layout: header and tab bar)

## Things to improve

- Add unit tests
- Implement nice svg's or animations for weather icons
- Improve styling, less static
- Improve device compatibility the header being a bit too big on some devices
- Implement RN accessibility features

## Issues i ran into

- iOS forces https
- iOS touchability issues with scrollview and buttons overlapping (absolute positioning)
  ...

signing off! Hope you enjoy this little app :)
