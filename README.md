# PulsePreview

A simple CSAT (Customer Satisfaction) campaign builder. Lets you configure a feedback popup's content and styling, with a live mobile preview that updates as you type — no save button, no refresh.

Built this as part of a frontend intern assignment.

## What it does

- Configure the three stages of a feedback popup: Initial screen, Feedback screen, Thank You screen
- Switch between star ratings or 1-5 numbers
- Add/remove quick-pick feedback options dynamically
- Toggle a comment box on/off
- Upload an image or GIF for the thank you screen
- Customize every color (background, title, subtitle, button, rating states)
- Control font size, font weight, border radius, button width/height
- Optional glass/blur effect on the popup
- See all of it update live in a mobile preview on the right, with star ratings and option selection you can actually click

## Tech stack

- React (Vite)
- Tailwind CSS
- Context API + useReducer for state management

## Folder structure

src/
- components/
  - content/ (Initial Feedback, Feedback Page, Thank You Page sections)
  - styling/ (Styling panel)
  - preview/ (Mobile preview + all 3 popup screens)
  - ui/ (reusable inputs - InputField, ColorField, SliderField, Toggle, SectionLabel)
  - Layout.jsx
  - TabBar.jsx
- context/
  - CSATContext.jsx (global state + reducer)
  - initialState.js
- App.jsx
- main.jsx

## Setup

```bash
git clone https://github.com/kushank-garg/PulsePreview.git
cd PulsePreview
npm install
npm run dev
```

Open `http://localhost:5173`

## Deployment

Live demo: https://pulse-preview-delta.vercel.app/