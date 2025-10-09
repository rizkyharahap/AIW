```
<script setup lang="ts">
import Footer from "@/components/Footer.vue";
import SpeakerCarousel from "@/components/SpeakerCarousel.vue";
</script>

<template>
  <div class="relative container mx-auto max-w-[2400px]">
    <picture>
      <source type="image/webp" srcset="@/assets/images/aiw-banner-home.webp" />
      <img
        alt="home banner"
        class="min-h-60 w-full object-cover object-top"
        src="@/assets/images/aiw-banner-home.png"
      />
    </picture>

    <div class="absolute top-0 right-0 left-0 mx-auto max-w-7xl px-4 pt-6 md:pt-8">
      <!-- <IcMenu width="30px" height="20px" viewBox="0 0 25 17" class="absolute top-8 right-6" /> -->

      <img
        alt="aiw logo nav"
        src="@/assets/images/aiw-logo-nav.png"
        class="h-4 md:h-6 lg:h-8"
        loading="lazy"
      />
    </div>

    <div class="container mx-auto max-w-7xl">
      <div
        class="mt-8 flex-grow px-8 text-center sm:mt-16 sm:px-12 md:mt-24 md:px-16 lg:mt-32 xl:mt-48"
      >
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

      <div
        class="mx-auto mt-20 flex max-w-5xl flex-col items-center px-8 sm:mt-32 sm:px-12 md:mt-44 md:px-16 lg:mt-52 xl:mt-60"
      >
        <iframe
          src="https://www.youtube.com/embed/GfCcUGlDYow"
          class="aspect-[20/9] h-full w-full"
          title=""
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />

        <div
          class="mt-5 grid grid-cols-12 gap-4 sm:mt-8 sm:gap-8 md:mt-12 md:gap-12 lg:mt-20 lg:gap-20 xl:mt-24"
        >
          <div class="col-span-3">
            <img
              alt="aiw logo vertical"
              src="@/assets/images/aiw-logo-vertical.png"
              loading="lazy"
              class="w-full"
            />
          </div>

          <div class="col-span-9 flex flex-col items-start justify-between">
            <div>
              <strong class="xs:text-lg sm:text-xl md:text-2xl"
                >Embracing The New Age of AI
              </strong>
              <p class="xs:text-sm mt-3 text-xs sm:mt-5 sm:text-base md:text-lg xl:text-2xl">
                Brings AI out of tech jargon and into real-life use-case & impacts. AiW is the first
                cultural stage where ideas, brands, and leaders define how Indonesia lives with AI.
              </p>
            </div>

            <a
              href="http://goersapp.com/event/aiw2025"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-4 inline-block cursor-pointer bg-gradient-to-r from-indigo-700 via-blue-700 to-sky-600 px-12 py-4 text-xs font-bold tracking-wide whitespace-nowrap text-white uppercase transition-transform duration-300 [clip-path:polygon(8%_0%,92%_0%,100%_25%,100%_75%,92%_100%,8%_100%,0%_75%,0%_25%)] hover:scale-105 md:text-sm lg:mt-12 lg:text-base"
            >
              Discover AIW
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      class="mt-28 grid grid-cols-12 items-center text-center sm:mt-32 md:mt-36 lg:mt-44 xl:mt-52"
    >
      <div class="col-span-3 h-1 w-full bg-gradient-to-r from-[#2e3cff] to-[#9b2fff]"></div>

      <strong class="col-span-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem]"
        >Sessions</strong
      >
      <div class="col-span-3 h-1 w-full bg-gradient-to-r from-[#00cfff] to-[#0066ff]"></div>
    </div>

    <div
      class="mx-auto mt-14 grid max-w-7xl grid-cols-1 justify-center gap-4 px-12 sm:mt-20 md:mt-24 md:grid-cols-2 lg:mt-32 lg:grid-cols-3 xl:mt-40"
    >
      <img alt="aiw session thumbnail 1" src="@/assets/images/session-thumb-1.jpg" loading="lazy" />
      <img alt="aiw session thumbnail 2" src="@/assets/images/session-thumb-2.jpg" loading="lazy" />
      <img
        alt="aiw session thumbnail 3"
        src="@/assets/images/session-thumb-3.jpg"
        loading="lazy"
        class="md:col-span-2 md:mx-auto md:w-1/2 lg:col-span-1 lg:mx-0 lg:w-full"
      />
    </div>

    <a
      href="http://goersapp.com/event/aiw2025"
      target="_blank"
      rel="noopener noreferrer"
      class="mx-auto mt-14 flex w-fit cursor-pointer bg-gradient-to-r from-indigo-700 via-blue-700 to-sky-600 px-12 py-4 text-center font-bold tracking-wide text-white uppercase transition-transform duration-300 [clip-path:polygon(8%_0%,92%_0%,100%_25%,100%_75%,92%_100%,8%_100%,0%_75%,0%_25%)] hover:scale-105 sm:mt-18 md:mt-24 md:text-lg lg:mt-28 lg:text-xl xl:mt-32"
    >
      Explore More
    </a>

    <div
      class="mt-20 grid grid-cols-12 items-center text-center sm:mt-24 md:mt-32 lg:mt-40 xl:mt-52"
    >
      <div class="col-span-3 h-1 w-full bg-gradient-to-r from-[#2e3cff] to-[#9b2fff]"></div>

      <strong class="col-span-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem]"
        >Speakers</strong
      >
      <div class="col-span-3 h-1 w-full bg-gradient-to-r from-[#00cfff] to-[#0066ff]"></div>
    </div>

    <div
      class="mx-auto mt-8 flex max-w-7xl items-center gap-1 px-4 sm:mt-14 sm:px-8 md:mt-24 lg:mt-36 xl:mt-44"
    >
      <SpeakerCarousel />
    </div>

    <a
      href="http://goersapp.com/event/aiw2025"
      target="_blank"
      rel="noopener noreferrer"
      class="mx-auto mt-14 flex w-fit cursor-pointer bg-gradient-to-r from-indigo-700 via-blue-700 to-sky-600 px-12 py-4 text-center font-bold tracking-wide text-white uppercase transition-transform duration-300 [clip-path:polygon(8%_0%,92%_0%,100%_25%,100%_75%,92%_100%,8%_100%,0%_75%,0%_25%)] hover:scale-105 sm:mt-16 md:mt-20 md:text-lg lg:mt-24 lg:text-xl xl:mt-28"
    >
      View All
    </a>

    <div class="mt-28 grid grid-cols-12 items-center text-center">
      <div class="col-span-3 h-1 w-full bg-gradient-to-r from-[#2e3cff] to-[#9b2fff]"></div>

      <strong class="col-span-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem]"
        >News and Updates</strong
      >
      <div class="col-span-3 h-1 w-full bg-gradient-to-r from-[#00cfff] to-[#0066ff]"></div>
    </div>

    <div class="mt-28 grid grid-cols-12 items-center text-center">
      <div class="col-span-3 h-1 w-full bg-gradient-to-r from-[#2e3cff] to-[#9b2fff]"></div>

      <strong class="col-span-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem]"
        >Our Sponsors</strong
      >
      <div class="col-span-3 h-1 w-full bg-gradient-to-r from-[#00cfff] to-[#0066ff]"></div>
    </div>

    <div class="mt-28 grid grid-cols-12 items-center text-center">
      <div class="col-span-3 h-1 w-full bg-gradient-to-r from-[#2e3cff] to-[#9b2fff]"></div>

      <strong class="col-span-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem]"
        >Our Partners</strong
      >
      <div class="col-span-3 h-1 w-full bg-gradient-to-r from-[#00cfff] to-[#0066ff]"></div>
    </div>

    <div class="mt-6 px-10 sm:mt-8 md:mt-14 lg:mt-20 xl:mt-32">
      <div class="flex flex-col items-center">
        <span class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
          >Official Media Partner</span
        >
      </div>

      <div class="mt-6 flex items-center justify-around gap-10 sm:mt-10 md:mt-14 lg:mt-20 xl:mt-28">
        <img
          alt="Medcom id"
          src="@/assets/images/sponsors/medcom.id.png"
          loading="lazy"
          class="h-6 sm:h-10 lg:h-14 xl:h-20"
        />
        <img
          alt="Metro TV"
          src="@/assets/images/sponsors/metro-tv.png"
          loading="lazy"
          class="h-8 sm:h-12 lg:h-20 xl:h-24"
        />
      </div>

      <div
        class="mt-9 grid grid-cols-2 items-start justify-items-center gap-x-1 gap-y-10 sm:mt-14 sm:grid-cols-2 sm:gap-y-14 md:mt-18 md:gap-y-18 lg:mt-24 lg:gap-y-24 xl:mt-28 xl:gap-y-28"
      >
        <!-- Official Venue Partner -->
        <div class="flex flex-col items-center text-center">
          <span class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
            >Official Venue Partner</span
          >
          <img
            alt="TEMU"
            src="@/assets/images/sponsors/temu.png"
            loading="lazy"
            class="mt-4 h-5 object-contain sm:h-7 lg:h-9 xl:h-11"
          />
        </div>

        <!-- AI Lab Partner -->
        <div class="flex flex-col items-center text-center">
          <span class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">AI Lab Partner</span>
          <img
            alt="Dots"
            src="@/assets/images/sponsors/dots.png"
            loading="lazy"
            class="mt-4 h-5 object-contain sm:h-7 lg:h-9 xl:h-11"
          />
        </div>

        <!-- Technical Partner -->
        <div class="flex flex-col items-center text-center">
          <span class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
            >Technical Partner</span
          >
          <img
            alt="Artifisial"
            src="@/assets/images/sponsors/artifisial.png"
            loading="lazy"
            class="mt-4 h-6 object-contain sm:h-8 lg:h-10 xl:h-12"
          />
        </div>

        <!-- Ticketing Partner -->
        <div class="flex flex-col items-center text-center">
          <span class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
            >Ticketing Partner</span
          >
          <img
            alt="Goers"
            src="@/assets/images/sponsors/goers.png"
            loading="lazy"
            class="mt-4 h-6 object-contain sm:h-8 lg:h-10 xl:h-12"
          />
        </div>
      </div>

      <div class="mt-10 flex flex-col items-center sm:mt-16 md:mt-24 lg:mt-32 xl:mt-40">
        <span class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          In Collaboration With
        </span>
      </div>

      <div
        class="mt-7 grid grid-cols-4 items-center justify-center justify-items-center gap-x-3 gap-y-6 sm:mt-10 sm:gap-y-8 md:mt-14 md:gap-y-10 lg:mt-20 lg:gap-y-12 xl:mt-24 xl:gap-y-14"
      >
        <div></div>
        <img
          alt="Pranala social"
          src="@/assets/images/sponsors/pranala-social.png"
          loading="lazy"
          class="h-8 object-contain sm:h-10 lg:h-12 xl:h-14"
        />
        <img
          alt="Hoop"
          src="@/assets/images/sponsors/hoop.png"
          loading="lazy"
          class="h-8 object-contain sm:h-10 lg:h-12 xl:h-14"
        />
        <div></div>
        <div></div>
        <img
          alt="Madya"
          src="@/assets/images/sponsors/madya.png"
          loading="lazy"
          class="h-8 object-contain sm:h-10 lg:h-12 xl:h-14"
        />
        <img
          alt="Svaka Studio"
          src="@/assets/images/sponsors/svaka-studio.png"
          loading="lazy"
          class="h-8 object-contain sm:h-10 lg:h-12 xl:h-14"
        />
        <div></div>
        <div></div>
        <img
          alt="Svaka Media"
          src="@/assets/images/sponsors/svaka-media.png"
          loading="lazy"
          class="h-8 object-contain sm:h-10 lg:h-12 xl:h-14"
        />
        <img
          alt="Kelas Humas Muda"
          src="@/assets/images/sponsors/kelas-humas-muda.png"
          loading="lazy"
          class="h-10 object-contain sm:h-12 lg:h-14 xl:h-16"
        />
        <div></div>
      </div>
    </div>

    <Footer />
  </div>
</template>
