```
<script setup lang="ts">
import IcLinkedIn from "@/assets/icons/ic-linkedin.svg";
import IcInstagram from "@/assets/icons/ic-instagram.svg";
import IcMail from "@/assets/icons/ic-mail.svg";
import IcWhatsapp from "@/assets/icons/ic-whatsapp.svg";
</script>

<template>
  <footer class="mt-16 bg-[linear-gradient(180deg,#FFF_0%,#9BD0ED_55.29%,#5C9FCF_100%)] lg:mt-20">
    <div class="container mx-auto max-w-7xl ps-8 pe-5 pt-12 pb-10">
      <picture>
        <!-- <source type="image/avif" srcset="@/assets/images/aiw-banner-home.avif" /> -->
        <!-- <source type="image/webp" srcset="@/assets/images/aiw-banner-home.webp" /> -->
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
</template>
