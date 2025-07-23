# SkyCast - Find My Weather

## Objective
To build a responsive single-page application using React that allows users to enter a city name and retrieve real-time weather information using the OpenWeatherMap API. This project demonstrates the use of Axios for API calls, React Router for navigation, React Hooks for state management, controlled components with validation, and basic styling with CSS.

## Tasks

### 1️⃣ Project Setup
- Initialize React app
- Install dependencies: `npm install axios react-router-dom`

### 2️⃣ Routing
- Set up `BrowserRouter` in `App.js`
- Create two routes:
  - `/` → Home page with input form
  - `/weather` → Page to display weather results

### 3️⃣ Home Page (City Input)
- Controlled input for city name
- Validate input is not empty
- On submit, navigate to `/weather` and store city name

### 4️⃣ Weather Page (API Integration)
- Use Axios to fetch data from OpenWeatherMap API
- Show temperature, humidity, wind speed, weather condition
- Convert & display temperature in Celsius and Fahrenheit using `useMemo`

### 5️⃣ React Hooks
- `useState` for city, weather data, loading state
- `useEffect` to fetch on page load
- `useCallback` to optimize submit handler
- `useMemo` for conversion logic

### 6️⃣ UI Styling (CSS)
- Responsive, clean layout
- Styled form, buttons, weather display, nav links

## Result
✅ A fully functional weather app built with React & OpenWeatherMap API.

---

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To run it locally:
```bash
npm install
npm start
