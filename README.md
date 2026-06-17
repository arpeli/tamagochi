# Pixel Dev Pet (Tamagotchi)

A polished browser-based digital pet simulator built with **pure HTML, CSS, and JavaScript** for an Internet Programming assignment.

## Student Information

- **Name:** Ariel Boutcher
- **Registration Number:** BSCCS/2025/40350

## Overview

This project simulates a pixel-style coding pet with three core status bars:

1. **Hunger / Coffee**
2. **Sleep / Energy**
3. **Code Quality**

All bars deplete over time, and the user must keep the pet alive by choosing the right actions.

The game loop is intentionally simple so the code is easy to study:

- **Render** current values into progress bars and status text
- **React** to user actions from the control buttons
- **Decay** values automatically every few seconds
- **End or continue** depending on whether any bar reaches zero

## Features

- Clean separation of concerns:
  - `index.html` for structure
  - `styles.css` for design and layout
  - `script.js` for behavior and game logic
- Pixel-inspired pet character and modern card-based UI
- Live status bars with percentages
- Action buttons:
  - Give Snack/Coffee
  - Let Pet Sleep
  - Practice Coding
  - Restart
- Dynamic mood system:
  - Motivated, Stable, Tired, Critical, Burned Out
- Automatic timed depletion loop to create gameplay pressure

## Architecture Explained

The project uses a clear single-page structure:

- `index.html` defines semantic sections for the header, pet display, bars, and controls.
- `styles.css` contains all visual presentation (layout, colors, button states, animations).
- `script.js` handles state management, gameplay rules, and DOM updates.

This separation keeps responsibilities focused and makes maintenance easier.

## File Structure

- `./index.html`
- `./styles.css`
- `./script.js`
- `./README.md`

## How It Works

- The game starts with healthy default values.
- Every few seconds, bars reduce automatically.
- User actions increase one or more bars and may reduce others, creating strategy.
- If any bar reaches `0`, the pet crashes and enters **Burned Out** state.
- Use **Restart** to begin again.

### Core Functions in `script.js`

- `clamp(value)`: keeps all status values between `0` and `100`.
- `averageStatus()`: computes mood from the average of all three bars.
- `updateUI()`: updates bars, percentages, mood text, and button availability.
- `applyAction(action)`: applies the effect of each user action.
- `decay()`: runs every 2.5 seconds to lower stats and detect game over.
- `restart()`: restores the initial state.

### Mood Logic

Mood text is based on the average status:

- `>= 75`: Motivated
- `>= 50`: Stable
- `>= 25`: Tired
- `< 25`: Critical
- Not running: Burned Out

## How to Run

1. Open the repository folder.
2. Open `index.html` in any modern browser.
3. Interact with the buttons to keep the pet healthy.

No frameworks, packages, or build tools are required.

## Assignment Notes

- Implemented using only vanilla web technologies.
- UI and logic are fully separated into different files as requested.
- No package manager, framework, or build pipeline is required for execution.
