<script setup lang="ts">
import { nextTick, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

let observer: IntersectionObserver | null = null;

const handleIntersect = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    const target = entry.target as HTMLElement;
    const rect = target.getBoundingClientRect();

    if (entry.isIntersecting) {
      setTimeout(() => {
        target.classList.add("fade-in");
        target.classList.remove("fade-out-up", "fade-out-down");
      }, 50);
    } else {
      target.classList.remove("fade-in");

      if (
        target.classList.contains("fade-in") ||
        entry.boundingClientRect.top < window.innerHeight
      ) {
        if (rect.y <= 0) {
          target.classList.add("fade-out-up");
        } else {
          target.classList.add("fade-out-down");
        }
      }
    }
  });
};

const initializeObserver = () => {
  // Clean up if already exists
  if (observer) observer.disconnect();

  observer = new IntersectionObserver(handleIntersect, {
    threshold: 0.2,
    rootMargin: "0px 0px 0px 0px",
  });

  // Observe all .reveal elements
  nextTick(() => {
    document.querySelectorAll(".reveal").forEach((el) => observer?.observe(el));
  });
};

const cleanupObserver = () => {
  observer?.disconnect();
  observer = null;
};

const router = useRouter();

onMounted(() => {
  initializeObserver();

  // Refresh observer when route changes (new DOM elements)
  router.afterEach(() => {
    setTimeout(() => {
      cleanupObserver();
      initializeObserver();
    }, 200); // wait for view to finish rendering
  });
});

onBeforeUnmount(() => {
  cleanupObserver();
});
</script>

<template>
  <router-view />
</template>
