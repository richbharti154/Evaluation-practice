import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Calculator from './Calculator';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Calculator/>
  </StrictMode>
);
// // 1) Lucky Number
// 2) Random Quote Generator
// 3) Sign Up Page
// 4) Timer by useEffect
// 5) Nav Bar with Routing
// 6) Pixel to REM Converter
// 7) Weather
// 8) Show/Hide with Button toggling
// 9) API fetching
// 10) Setting 1 input box value on local storage and getting it on the placeholder of the 2nd input box
// 12.Using recoil, create a button in the atom, then import it in your main component and show it on UI, then after clicking on that imported button, 2 more buttons should come beneath it which would be button 1 and button 2, and when we click on button 1, it should show alert "I am button 1" and when we click on burton 2, it should show alert "I am button 2"