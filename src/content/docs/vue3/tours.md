---
title: 🧭 Tours
description: Vue 3 interactive tours using Driver.js
---

Create interactive tours in your Vue 3 app using the [`driver.js`](https://driverjs.com/docs) library.

## 1. 🚀 Getting Started

### 1.1 📦 Install `driver.js`

```bash
npm install driver.js
```

### 1.2 🛠️ Create `useDriverTour.js`

Inside `src/composables/`, create the `useDriverTour.js` file:

```js
// src/composables/useDriverTour.js
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

export const useDriverTour = () => {
  return driver({
    popoverClass: 'driverjs-theme',
    showProgress: true,
    allowClose: true,
  });
};
```

### 1.3 🧩 Create `useTourHelpers.js`

Inside `src/composables/`, create `useTourHelpers.js`:

```js
// src/composables/useTourHelpers.js
import { useTourStore } from '@/stores/tourStore';
import { nextTick } from 'vue';

export async function advanceTour() {
  const tour = useTourStore().Tour;
  const driver = tour?.driver;
  if (driver?.isActive()) {
    await nextTick();
    driver.moveNext();
  }
}
```

This enables interactive control of tour steps.

## 2. 🛤️ Creating a Tour

### 2.1 🏗️ Create `HomeTour.js`

Inside `src/tours/`, create `HomeTour.js`:

```js
// src/tours/HomeTour.js
import { useDriverTour } from '@/composables/useDriverTour';

export const TOUR_MODES = {
  MAIN: 'main',
};

export class HomeTour {
  static MODES = TOUR_MODES;

  constructor() {
    this.driver = useDriverTour();
    this.modeTour = null;
  }

  getMainSteps() {
    return [
      {
        id: 'id_title',
        element: '#tour-element',
        popover: {
          title: 'Step Title',
          description: 'Step Description', // Supports HTML
          side: 'center',
          align: 'center',
          popoverClass: 'max-w-30rem',
        },
      },
    ];
  }

  getSteps(mode) {
    const modeStepsMap = {
      [TOUR_MODES.MAIN]: this.getMainSteps,
    };
    return modeStepsMap[mode]?.call(this) || [];
  }

  init(mode = TOUR_MODES.MAIN) {
    this.modeTour = mode;
    const steps = this.getSteps(mode);
    this.driver.setSteps(steps);
    this.driver.drive();
  }
}
```

### 2.2 🧪 Use in a Vue Component

```vue
<script setup>
import { useTourStore } from '@/stores/tourStore';
import { HomeTour, TOUR_MODES } from '@/tours/HomeTour';

const tourStore = useTourStore();
const tour = ref(null);

onMounted(() => {
  initTour();
});

const initTour = () => {
  tour.value = new HomeTour();
  tourStore.setMenu(getTourMenuItems());
  tourStore.setTour(tour.value);
};

const getTourMenuItems = () => [
  {
    label: t('tour.modes.main'),
    icon: 'pi pi-eye',
    command: () => tour.value?.init(TOUR_MODES.MAIN),
  },
];
</script>

<template>
  <div id="tour-element">
    Tour Test Div
  </div>
</template>
```

### 2.3 🎯 Creating an Interactive Tour Step

To create a step that requires user interaction (e.g., clicking a button) to proceed, disable the "Next" button in the step definition:

```js
{
  id: 'id_title',
  element: '#tour-element',
  popover: {
    title: 'Step Title',
    description: 'Step Description',
    side: 'center',
    align: 'center',
    popoverClass: 'max-w-30rem',
    showButtons: ['previous', 'close'], // Removes 'next' button
  },
}
```

Then control progression programmatically:

```vue
<script setup>
import { advanceTour } from '@/composables/useTourHelpers';

const onClickTour = async () => {
  await advanceTour();
};
</script>

<template>
  <Button id="tour-next-step" label="Next Step" @click="onClickTour" />
</template>
```

---

This setup gives you full control over tour behavior and integrates smoothly into a Vue 3 composition API structure.
