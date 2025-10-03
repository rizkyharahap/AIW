<script setup lang="ts">
import IcLinkedIn from "@/assets/icons/ic-linkedin.svg";
import IcInstagram from "@/assets/icons/ic-instagram.svg";
import IcMail from "@/assets/icons/ic-mail.svg";
import IcWhatsapp from "@/assets/icons/ic-whatsapp.svg";
import { onBeforeUnmount, onMounted } from "vue";

let observer: IntersectionObserver | null = null;

const handleIntersect = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    const target = entry.target as HTMLElement;
    const boundingClientRect = target.getBoundingClientRect();

    if (entry.isIntersecting) {
      // Ensure element is visible when it comes into view
      setTimeout(() => {
        target.classList.add("fade-in"); // Add fade-in class when visible
        target.classList.remove("fade-out-up"); // Remove fade-out-up class
        target.classList.remove("fade-out-down"); // Remove fade-out-down class
      }, 200);
    } else {
      target.classList.remove("fade-in"); // Remove fade-in class when not visible
      // Only add fade-out classes if element was previously visible
      if (
        target.classList.contains("fade-in") ||
        entry.boundingClientRect.top < window.innerHeight
      ) {
        if (boundingClientRect.y <= 0) {
          target.classList.add("fade-out-up"); // Add fade-out-up class
        } else {
          target.classList.add("fade-out-down"); // Add fade-out-down class
        }
      }
    }
  });
};

onMounted(() => {
  // Create the IntersectionObserver
  observer = new IntersectionObserver(handleIntersect, {
    threshold: 0.1, // Trigger when 10% of the element is visible (more sensitive)
    rootMargin: "0px 0px -50px 0px", // Trigger slightly before element comes into view
  });

  // Small delay to ensure DOM is fully rendered
  setTimeout(() => {
    document.querySelectorAll(".reveal").forEach((element) => {
      observer?.observe(element);
    });
  }, 200);
});

onBeforeUnmount(() => {
  // Clean up the observer when the component is unmounted
  document.querySelectorAll(".reveal").forEach((element) => {
    observer?.unobserve(element);
  });
});
</script>

<template>
  <div class="section relative container mx-auto flex min-h-screen max-w-7xl flex-col">
    <!-- <IcMenu width="30px" height="20px" viewBox="0 0 25 17" class="absolute top-8 right-6" /> -->

    <!-- content -->
    <picture>
      <!-- <source type="image/avif" srcset="@/assets/images/aiw-home-banner.avif" /> -->
      <!-- <source type="image/webp" srcset="@/assets/images/aiw-home-banner.webp" /> -->
      <img
        alt="home banner"
        class="reveal h-auto max-h-[750px] w-full object-cover"
        src="@/assets/images/aiw-banner-home.jpg"
      />
    </picture>

    <picture>
      <!-- <source type="image/avif" srcset="@/assets/images/aiw-home-banner.avif" /> -->
      <!-- <source type="image/webp" srcset="@/assets/images/aiw-home-banner.webp" /> -->
      <img
        alt="aiw logo nav"
        width="80px"
        height="20px"
        class="reveal absolute top-8 left-6"
        src="@/assets/images/aiw-logo-nav.png"
      />
    </picture>

    <div class="reveal mt-8 flex-grow px-4 text-center md:mt-12 lg:mt-16">
      <p class="text-xl font-bold md:text-2xl lg:text-3xl">
        A place to explore Artificial Intelligence for everyone—beyond technological wonders.
      </p>

      <br />

      <p class="font-medium md:text-lg lg:text-xl">
        This hybrid event (offline + livestream) runs for three weeks on this November 2025 and
        features sharing sessions, showcases, and discussions on how AI is transforming daily life,
        society, work, careers, business, and even culture.
      </p>

      <button
        class="mt-8 cursor-pointer bg-gradient-to-r from-indigo-700 via-blue-700 to-sky-600 px-12 py-4 font-bold tracking-wide text-white uppercase transition-transform duration-300 [clip-path:polygon(8%_0%,92%_0%,100%_25%,100%_75%,92%_100%,8%_100%,0%_75%,0%_25%)] hover:scale-105 md:text-lg lg:mt-12 lg:text-xl"
      >
        Get Ticket Now
      </button>
    </div>

    <!-- end content  -->

    <footer
      class="mt-16 bg-[linear-gradient(180deg,#FFF_0%,#9BD0ED_55.29%,#5C9FCF_100%)] ps-8 pe-5 pt-12 pb-10 lg:mt-20"
    >
      <picture>
        <!-- <source type="image/avif" srcset="@/assets/images/aiw-home-banner.avif" /> -->
        <!-- <source type="image/webp" srcset="@/assets/images/aiw-home-banner.webp" /> -->
        <img
          alt="aiw logo footer"
          width="142px"
          height="44px"
          class="reveal mx-1"
          loading="lazy"
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
            <a href="#" target="_blank" rel="noopener noreferrer">
              <IcLinkedIn class="md:h-full md:w-9 lg:w-10" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <IcInstagram class="md:h-full md:w-9 lg:w-10" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <IcMail class="md:h-full md:w-9 lg:w-10" />
            </a>
          </div>

          <a href="#" target="_blank" rel="noopener noreferrer">
            <IcWhatsapp class="md:h-full md:w-16 lg:w-20" />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>
