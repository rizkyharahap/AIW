```
<script setup lang="ts">
import IcLinkedIn from "@/assets/icons/ic-linkedin.svg";
import IcInstagram from "@/assets/icons/ic-instagram.svg";
import IcMail from "@/assets/icons/ic-mail.svg";
import IcWhatsapp from "@/assets/icons/ic-whatsapp.svg";
</script>

<template>
  <footer
    class="mt-32 bg-[linear-gradient(180deg,#FFF_0%,#9BD0ED_55.29%,#5C9FCF_100%)] sm:mt-40 md:mt-44 lg:mt-52 xl:mt-60"
  >
    <div class="container mx-auto max-w-7xl ps-8 pe-5 pt-12 pb-10">
      <img
        alt="aiw logo footer"
        class="mx-1 h-11 sm:h-14 md:h-20 lg:h-24 xl:h-28"
        loading="lazy"
        src="@/assets/images/aiw-logo-footer.png"
      />

      <div class="mt-5 md:mt-6 lg:mt-8">
        <strong class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
          >PT. Sobat Karya Membara</strong
        >
        <address class="text-xs not-italic sm:text-sm md:text-base lg:text-lg xl:text-xl">
          Belleza Shopping Arcade Lt. 3 unit 371,<br />
          Jl. Arteri Permata Hijau No.34, RT.4/RW.2, Grogol Utara,<br />
          Kec. Kby. Lama, Kota Jakarta Selatan,<br />
          Daerah Khusus Ibukota Jakarta 12210
        </address>
      </div>

      <div class="mt-4 md:mt-6 lg:mt-10">
        <strong class="text-sm md:text-base lg:text-xl xl:text-2xl">Contact Us</strong>

        <div class="flex items-center justify-between gap-4">
          <div class="flex items-end">
            <a
              href="https://www.linkedin.com/company/aiw-indonesia/about/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IcLinkedIn class="md:h-full md:w-10 lg:w-14" />
            </a>
            <a
              href="https://www.instagram.com/aideaweeks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IcInstagram class="md:h-full md:w-10 lg:w-14" />
            </a>
            <a href="mailto:aideaweeks@gmail.com" target="_blank" rel="noopener noreferrer">
              <IcMail class="md:h-full md:w-10 lg:w-14" />
            </a>
          </div>

          <a
            href="https://api.whatsapp.com/send?phone=6281316413803&text=Hai%20AiW2025%20%F0%9F%91%8B%0ASaya%20mau%20bertanya%20lebih%20lanjut%20terkait%20Acara%20dan%20informasi%20lainnya."
            target="_blank"
            rel="noopener noreferrer"
          >
            <IcWhatsapp class="h-full w-11 sm:w-14 md:w-16 lg:w-20 xl:w-24" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
