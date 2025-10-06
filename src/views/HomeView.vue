```
<script setup lang="ts">
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="relative container mx-auto max-w-[2400px]">
    <picture>
      <source type="image/webp" srcset="@/assets/images/aiw-banner-home.webp" />
      <img
        alt="home banner"
        class="reveal min-h-64 w-full object-cover object-top"
        src="@/assets/images/aiw-banner-home.png"
      />
    </picture>

    <div class="absolute top-0 right-0 left-0 mx-auto max-w-7xl px-4 pt-6 md:pt-8">
      <!-- <IcMenu width="30px" height="20px" viewBox="0 0 25 17" class="absolute top-8 right-6" /> -->

      <picture>
        <!-- <source type="image/avif" srcset="@/assets/images/aiw-banner-home.avif" /> -->
        <!-- <source type="image/webp" srcset="@/assets/images/aiw-banner-home.webp" /> -->
        <img
          alt="aiw logo nav"
          src="@/assets/images/aiw-logo-nav.png"
          class="h-4 md:h-6 lg:h-8"
          loading="lazy"
        />
      </picture>
    </div>

    <div class="container mx-auto max-w-7xl">
      <div class="reveal mt-8 flex-grow px-4 text-center md:mt-12 lg:mt-16">
        <p class="text-xl font-bold md:text-2xl lg:text-3xl">
          A place to explore Artificial Intelligence for everyone—beyond technological wonders.
        </p>

        <br />

        <p class="font-medium md:text-lg lg:text-xl">
          This hybrid event (offline + livestream) runs for three weeks on this November 2025 and
          features sharing sessions, showcases, and discussions on how AI is transforming daily
          life, society, work, careers, business, and even culture.
        </p>

        <a
          href="http://goersapp.com/event/aiw2025"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-8 inline-block cursor-pointer bg-gradient-to-r from-indigo-700 via-blue-700 to-sky-600 px-12 py-4 font-bold tracking-wide text-white uppercase transition-transform duration-300 [clip-path:polygon(8%_0%,92%_0%,100%_25%,100%_75%,92%_100%,8%_100%,0%_75%,0%_25%)] hover:scale-105 md:text-lg lg:mt-12 lg:text-xl"
        >
          Get Ticket Now
        </a>
      </div>

      <!-- end content  -->
    </div>

    <Footer />
  </div>
</template>
