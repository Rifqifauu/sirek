<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { defineProps, ref, onMounted } from 'vue';
import GuestNavbar from '@/Components/GuestNavbar.vue';
import Foot from '@/Components/Foot.vue';

const { event } = defineProps({ event: Array });
const flashMessage = ref('');

onMounted(() => {
  // Retrieve flash message from the server
  if (document.querySelector('meta[name="flash-message"]')) {
    flashMessage.value = document.querySelector('meta[name="flash-message"]').content;
  }
});
</script>

<template>
  <Head title="Event" />

  <div>
    <GuestNavbar />
    <div class="flex flex-col space-y-6">
      <div v-if="flashMessage" class="container mx-auto px-4 mt-4">
        <div class="bg-green-100 text-green-700 p-4 rounded shadow">
          {{ flashMessage }}
        </div>
      </div>
      <section>
        <header class="bg-blue-700 text-white py-12">
          <div class="container mx-auto text-center">
            <h1 class="text-5xl font-bold mb-4">Event Bahtera Karsa 2024</h1>
          </div>
        </header>

        <div v-for="item in event" :key="item.event_id" class="mt-8 space-y-8 container mx-auto px-4">
          <div class="bg-blue-100 p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <img :src="'/storage/' + item.gambar" :alt="item.nama_event + ' Image'" class="w-full md:w-40 h-auto md:h-40 object-cover">
            <div class="text-center md:text-left">
              <h2 class="text-xl font-bold text-blue-600">{{ item.nama_event }}</h2>
              <p class="text-gray-600 mt-2">{{ item.deskripsi }}</p>
              <a :href="'/pendaftar/create/' + item.event_id" class="bg-orange-400 text-white py-2 px-4 rounded mt-4 inline-block hover:bg-orange-600">Daftar Sekarang</a>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Foot />
  </div>
</template>
