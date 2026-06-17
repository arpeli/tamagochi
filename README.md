# Pixel Dev Pet (Tamagochi)

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

## File Structure

- `/home/runner/work/tamagochi/tamagochi/index.html`
- `/home/runner/work/tamagochi/tamagochi/styles.css`
- `/home/runner/work/tamagochi/tamagochi/script.js`
- `/home/runner/work/tamagochi/tamagochi/README.md`

## How It Works

- The game starts with healthy default values.
- Every few seconds, bars reduce automatically.
- User actions increase one or more bars and may reduce others, creating strategy.
- If any bar reaches `0`, the pet crashes and enters **Burned Out** state.
- Use **Restart** to begin again.

## How to Run

1. Open the repository folder.
2. Open `index.html` in any modern browser.
3. Interact with the buttons to keep the pet healthy.

No frameworks, packages, or build tools are required.

## Assignment Notes

- Implemented using only vanilla web technologies.
- UI and logic are fully separated into different files as requested.
