# Scissor homepage comparison

Route: `/`. Source: https://scissor.framer.website/. Viewports: desktop 1280×1800 and phone 390×844. Scroll container: document/window.

Source section positions, text, assets and open-menu DOM are in desktop-observations.json and phone-observations.json. Additional dropdown and FAQ states are in controls.json and final-states.json. Source screenshots are referenced in those files under /tmp/browser/scissor-source. Preview screenshots are stored alongside this ledger.

## Primary controls
| Control | Source result | Preview result | Status |
| --- | --- | --- | --- |
| Desktop navigation | About /about, Studio /#studio, Services /services, Stylists /stylists, Contact /contact | Same paths on preview origin | Destination checked; linked pages not imported |
| Phone menu | Full-height dark menu with five links and Book a chair; Close menu | Same links visible; Escape closes and restores trigger | Passed; phone-menu.png |
| Hero Book a chair | /contact | /contact on preview origin | Destination checked; page not imported |
| Hero Explore services | /#services | /#services | Destination checked |
| FAQ | Six questions reveal source answers | All six toggled; first closes, others open | Passed desktop/phone; control-results.txt, FAQ screenshots |
| Service details | Four expandable groups | Four groups toggle on desktop/phone | Passed interaction; expanded layout simplified |
| Appointment service dropdown | Six choices | Skin fade selected and read back | Passed desktop/phone; form screenshots |
| Appointment stylist dropdown | Five choices | Marcus Reid selected and read back | Passed desktop/phone; form screenshots |
| Before/after comparison | Drag comparison | Accessible range control added | Not replayed; unverified |
| Transformation tabs | Three result choices | Captured buttons have no selection handlers | Failed desktop/phone |
| Studio photo selector | Three photo controls | Captured controls have no selection handlers | Failed desktop/phone |
| Review selector | Four client controls | Captured controls have no selection handlers | Failed desktop/phone |
| Booking submission | Source form not submitted | Submission prevented; no delivery service configured | Blocked; intentionally not connected |

## Sections and motion
All eleven section wrappers and downloaded assets retained. Each section was reached by wheel input on desktop/phone and captured in section screenshots. Build succeeded; homepage routing test passed; no page errors observed.

Visit steps are visible in normal flow, replacing pinned reveal motion. Lookbook photos are visible in a normal-flow grid, replacing curved scroll-flip motion. Expanded service details use source text with simplified layout. Hero and ticker motion were not reproduced or fully verified. No video elements were found in source review.

## Partial import
Remaining gaps: transformation tabs, studio photo selector, review selector; original scroll motion and expanded-service visual fidelity; booking delivery; linked pages beyond the homepage. No additional pages were requested or imported.