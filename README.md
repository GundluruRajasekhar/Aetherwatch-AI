# AetherWatch AI — Design Time Your Way

**Category:** AI + Wearables + HealthTech + Personalisation
**Author:** Gundluru Rajasekhar
**Challenge:** Titan Watch Face Design Challenge 2026 (Open Innovation)
**One-line pitch:** AetherWatch AI is an AI-powered personalised smartwatch experience that adapts time, wellness, productivity and design into a luxury wearable interface.

## 1. Problem statement
Most watch faces are static and generic. They look the same at 7 am and 11 pm, ignore the weather, and leave health data buried in other apps. People with sugar or blood pressure concerns get numbers but no daily guidance.

## 2. Solution
AetherWatch AI is a watch face that reads the time of day, weather and your body, then changes its look, its widgets and its advice. It keeps a luxury look: pure-black AMOLED, gold accents, a glass stats pill and a steps arc around the bezel.

## 3. Design goals
- **Simplicity:** one clear time, three key numbers
- **Accessibility:** text 21 px or larger, icons 25 px or larger, touch targets 44 px or larger, high contrast
- **Luxury:** gold on black, tick marks every 30°, restrained motion
- **Personalisation:** time-of-day themes, fonts, layout, colour
- **Wellness:** health score, insights, diet and activity coach

## 4. User personas
| Persona | Need | How AetherWatch AI helps |
|---|---|---|
| Professional | Glance at time and schedule fast | Large time, auto theme, low distraction |
| Student | Stay focused and sleep well | Sleep-time dim mode, recovery insight |
| Fitness enthusiast | Track activity | Steps arc, activity rings, heart rate |
| Senior citizen | Safety and clear text | One-tap SOS, big type, sugar and BP coach |

## 5. UX principles
- **Glanceability:** the time and steps arc read in under a second
- **Low cognitive load:** one idea per screen
- **Fast interaction:** swipe or arrow keys between 10 screens
- **High accessibility:** contrast, large targets, reduced-motion support

## 6. Innovation
- **AI adaptive layout:** morning gold, afternoon cyan, evening ember, sleep dim
- **Dynamic background:** tinted by weather (sunny, cloudy, rain) and time
- **Smart health hub:** heart rate, SpO2, BP, stress, sleep, temperature
- **Health score:** weighted from sleep (30%), heart rate (20%), stress (20%), SpO2 (15%), steps (15%)
- **Wellness insights:** for example "You slept 7.5 hours. Excellent recovery."
- **Diet & activity coach:** Indian meal and walking guidance for sugar and BP
- **Ambient mode:** outline digits, no colour, 1 fps
- **Customisation studio:** font, layout, colour and five themes

## 7. Screens (prototype and Figma map)
| # | Figma screen | Prototype screen |
|---|---|---|
| 1 | Welcome | Welcome |
| 2 | Main watch face | Main face |
| 3 | Health dashboard | Health hub |
| 4 | AI insights | AI insights |
| 5 | Personalisation center | Personalise |
| 6 | Fitness tracking | Activity |
| 7 | Ambient mode | Ambient |
| 8 | SOS | SOS |
| 9 | Theme gallery | Theme gallery |
| 10 | Future vision | Diet & activity coach (preventive health) |

## 8. Files
| File | Purpose |
|---|---|
| index.html | Page structure and control panel |
| style.css | AMOLED, gold, glass design system |
| script.js | Clock, simulated health data, AI personalisation, tour |
| README.md | This design document |

## 9. Run it
Open `index.html` in a modern browser. No build step. Press **START TOUR** for a guided walkthrough and **STOP TOUR** to end it. The preview date is fixed at 11/11/2026.

## 10. Judging strategy
- **Innovation (25%):** AI adaptation, weather and time context, health score, coach
- **Visual design (25%):** one consistent system: black, gold, glass, 30° ticks
- **User experience (25%):** swipe navigation, large targets, clear hierarchy
- **Feasibility (25%):** see below

## 11. Feasibility
- **Wear OS:** the face maps to Watch Face Format layers (time, complications, ambient layer); health values come from Health Services
- **Battery:** ambient mode uses a black background and outlines; screen refresh drops to 1 fps; sensors slow below 25% battery
- **Privacy:** all insights can run on the watch or phone with no cloud account

## 12. Health coach note
The sugar and BP coach gives general lifestyle tips (high-fibre, low-salt, walking, water). It is not medical advice and does not replace a doctor.

## 13. Future vision
Glucose and BP sensor integration, weekly health reports, medication reminders, meeting and task widgets, voice assistant, and cross-device sync with phone and car.

## 14. Submission checklist
- [ ] Recreate screens in Figma at 466 × 466 and share the link
- [ ] Export preview PNGs (active and ambient)
- [ ] Concept note of 200 words or fewer
- [ ] No brand logos; 100% original work
- [ ] File name `Gundluru_Rajasekhar_WatchFace`; deadline 6 December 2026, 11:59 PM IST
