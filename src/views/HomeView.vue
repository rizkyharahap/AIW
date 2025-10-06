```
<script setup lang="ts">
import IcLinkedIn from "@/assets/icons/ic-linkedin.svg";
import IcInstagram from "@/assets/icons/ic-instagram.svg";
import IcMail from "@/assets/icons/ic-mail.svg";
import IcWhatsapp from "@/assets/icons/ic-whatsapp.svg";
import { onBeforeUnmount, onMounted, onUnmounted, nextTick } from "vue";

let observer: IntersectionObserver | null = null;

const handleIntersect = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    const target = entry.target as HTMLElement;
    const boundingClientRect = target.getBoundingClientRect();

    if (entry.isIntersecting) {
      setTimeout(() => {
        target.classList.add("fade-in");
        target.classList.remove("fade-out-up");
        target.classList.remove("fade-out-down");
      }, 50);
    } else {
      target.classList.remove("fade-in");

      if (
        target.classList.contains("fade-in") ||
        entry.boundingClientRect.top < window.innerHeight
      ) {
        if (boundingClientRect.y <= 0) {
          target.classList.add("fade-out-up");
        } else {
          target.classList.add("fade-out-down");
        }
      }
    }
  });
};

const initializeObserver = () => {
  // Clean up existing observer
  if (observer) {
    observer.disconnect();
    observer = null;
  }

  // Create new observer
  observer = new IntersectionObserver(handleIntersect, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  // Wait for next tick to ensure DOM is updated
  nextTick(() => {
    document.querySelectorAll(".reveal").forEach((element) => {
      observer?.observe(element);
    });
  });
};

const cleanupObserver = () => {
  if (observer) {
    observer.disconnect();
    observer = null;
  }
};

onMounted(() => {
  initializeObserver();
});

onBeforeUnmount(() => {
  cleanupObserver();
});

onUnmounted(() => {
  cleanupObserver();
});
</script>

<template>
  <div class="relative container mx-auto max-w-[2400px]">
      <picture>
        <!-- <source type="image/avif" srcset="@/assets/images/aiw-home-banner.avif" /> -->
        <!-- <source type="image/webp" srcset="@/assets/images/aiw-home-banner.webp" /> -->
        <img
        alt="home banner"
        class="w-full object-cover object-top min-h-64"
        src="@/assets/images/aiw-banner-home.png"
        />
      </picture>

    <div class="absolute top-0 right-0 left-0 mx-auto max-w-7xl px-4 pt-6 md:pt-8">
      <!-- <IcMenu width="30px" height="20px" viewBox="0 0 25 17" class="absolute top-8 right-6" /> -->

      <picture>
        <!-- <source type="image/avif" srcset="@/assets/images/aiw-home-banner.avif" /> -->
        <!-- <source type="image/webp" srcset="@/assets/images/aiw-home-banner.webp" /> -->
        <img alt="aiw logo nav" src="@/assets/images/aiw-logo-nav.png" class="h-4 md:h-6 lg:h-8" />
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

    <footer class="mt-16 bg-[linear-gradient(180deg,#FFF_0%,#9BD0ED_55.29%,#5C9FCF_100%)] lg:mt-20">
      <div class="container mx-auto max-w-7xl ps-8 pe-5 pt-12 pb-10">
        <picture>
          <!-- <source type="image/avif" srcset="@/assets/images/aiw-home-banner.avif" /> -->
          <!-- <source type="image/webp" srcset="@/assets/images/aiw-home-banner.webp" /> -->
          <img
            alt="aiw logo footer"
            width="142px"
            height="44px"
            class="reveal mx-1"
            src="@/assets/images/aiw-logo-footer.png"
          />
        </picture>

        <div class="reveal mt-5">
          <strong class="text-sm md:text-base">PT. Sobat Karya Membara</strong>
          <address class="text-xs not-italic md:text-sm">
            Belleza Shopping Arcade Lt. 3 unit 371,<br />
            Jl. Arteri Permata Hijau No.34, RT.4/RW.2, Grogol Utara,<br />
            Kec. Kby. Lama, Kota Jakarta Selatan,<br />
            Daerah Khusus Ibukota Jakarta 12210
          </address>
        </div>

        <div class="reveal mt-4">
          <strong class="text-sm md:text-base">Contact Us</strong>

          <div class="flex items-center justify-between gap-4">
            <div class="flex items-end">
              <a
                href="https://www.linkedin.com/company/aiw-indonesia/about/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IcLinkedIn class="md:h-full md:w-9 lg:w-10" />
              </a>
              <a
                href="https://www.instagram.com/aideaweeks"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IcInstagram class="md:h-full md:w-9 lg:w-10" />
              </a>
              <a href="mailto:aideaweeks@gmail.com" target="_blank" rel="noopener noreferrer">
                <IcMail class="md:h-full md:w-9 lg:w-10" />
              </a>
            </div>

            <a
              href="https://api.whatsapp.com/send?phone=6281316413803&text=Hai%20AiW2025%20%F0%9F%91%8B%0ASaya%20mau%20bertanya%20lebih%20lanjut%20terkait%20Acara%20dan%20informasi%20lainnya."
              target="_blank"
              rel="noopener noreferrer"
            >
              <IcWhatsapp class="md:h-full md:w-16 lg:w-20" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
