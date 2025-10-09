<script setup lang="ts">
import { ref, onMounted } from "vue";
import emblaCarouselVue from "embla-carousel-vue";
import type { EmblaOptionsType } from "embla-carousel";

const speakers = [
  {
    name: "Buchara Rubiandra",
    image: new URL("@/assets/images/speakers/buchara-rubiandra.png", import.meta.url).href,
  },
  {
    name: "Pandu Truhandito",
    image: new URL("@/assets/images/speakers/pandu-truhandito.png", import.meta.url).href,
  },
  {
    name: "William Jakfar",
    image: new URL("@/assets/images/speakers/william-jakfar.png", import.meta.url).href,
  },
  {
    name: "Rifqi Wirawan",
    image: new URL("@/assets/images/speakers/rifqi-wirawan.png", import.meta.url).href,
  },
  {
    name: "Kevin Mahesa",
    image: new URL("@/assets/images/speakers/kevin-mahesa.png", import.meta.url).href,
  },
];

const options: EmblaOptionsType = {
  loop: false,
  align: "center",
  containScroll: "trimSnaps",
};

const [emblaRef, emblaApi] = emblaCarouselVue(options);
const selected = ref(0);

onMounted(() => {
  const onSelect = () => {
    if (emblaApi.value) selected.value = emblaApi.value.selectedScrollSnap();
  };
  if (emblaApi.value) {
    onSelect();
    emblaApi.value.on("select", onSelect);
  }
});

const prev = () => emblaApi.value?.scrollPrev();
const next = () => emblaApi.value?.scrollNext();
const scrollTo = (i: number) => emblaApi.value?.scrollTo(i);
</script>

<template>
  <div class="w-full">
    <!-- viewport -->
    <div class="flex gap-4">
      <button @click="prev" class="shrink-0 transition hover:scale-110">
        <img
          src="@/assets/images/little-next-button.png"
          alt="Prev"
          class="w-8 rotate-180 md:w-10"
        />
      </button>

      <div class="overflow-hidden" ref="emblaRef">
        <!-- track -->
        <div class="flex gap-1 md:gap-2 lg:gap-3">
          <!-- slide -->
          <div
            v-for="(s, i) in speakers"
            :key="i"
            class="min-w-0 shrink-0 basis-[80%] sm:basis-[70%] md:basis-[44%] lg:basis-[29%]"
          >
            <img
              :src="s.image"
              :alt="s.name"
              class="h-auto w-full object-contain transition-transform hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <button @click="next" class="shrink-0 transition hover:scale-110">
        <img src="@/assets/images/little-next-button.png" alt="Next" class="w-8 md:w-10" />
      </button>
    </div>

    <!-- dots -->
    <div class="mt-5 flex justify-center gap-5 md:gap-9 lg:gap-14">
      <button
        v-for="(_, i) in speakers"
        :key="i"
        @click="scrollTo(i)"
        :class="[
          'h-2 w-2 cursor-pointer rounded-full transition-colors md:h-4 md:w-4',
          selected === i ? 'bg-gray-700' : 'bg-gray-300',
          i === speakers.length - 1 || i === speakers.length - 2 ? 'lg:hidden' : '',
        ]"
        aria-label="Go to slide"
      />
    </div>
  </div>
</template>
