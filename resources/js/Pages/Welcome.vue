<script setup>
import { Head, Link } from '@inertiajs/vue3';
import GuestNavbar from '@/Components/GuestNavbar.vue';
import Foot from '@/Components/Foot.vue';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
});
</script>

<template>
    <Head title="Welcome" />
    
    <!-- Guest Navbar -->
    <GuestNavbar :canLogin="canLogin" :canRegister="canRegister" />

    <!-- Login/Logout Links -->
    <div v-if="canLogin" class="hidden sm:block sm:absolute sm:top-0 sm:end-0 p-6 text-end z-10">
        <Link v-if="$page.props.auth?.user" :href="route('dashboard')"
              class="font-semibold text-white hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
            Dashboard
        </Link>

        <div v-else class="flex-shrink-0">
            <a href="/login" class="bg-white text-blue-700 py-2 px-4 rounded-full shadow hover:bg-gray-100">Masuk</a>
        </div>
    </div>

    <!-- Konten Utama -->
     <!-- Header Section -->
     <header class="bg-blue-700 text-white py-12">
            <div class="container mx-auto text-center">
                <h1 class="text-5xl font-bold mb-4">BEM UNSOED 2024</h1>
            </div>
        </header>
    <div class="relative sm:flex sm:justify-center bg-gray-100 selection:bg-red-500 selection:text-white">
        <div class="relative bg-gray-100 selection:bg-red-500 selection:text-white">
        <div class="text-center p-6 sm:p-12">
            <!-- Hero Section -->
            <div class="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-9 flex flex-col sm:flex-row items-center">
                <img src="storage/assets/nobg1.png" alt="Gambar Logo" class="w-40 h-40 mr-0 sm:mr-6 mb-4 sm:mb-0">
                <div>
                    <h1 class="text-4xl text-left font-bold text-gray-800">Kabinet Bahtera Karsa</h1>
                    <p class="mt-4 text-left text-gray-600">
                        BEM Unsoed 2024 mengusung nama kabinet “Bahtera Karsa” dengan arti kapal/wadah yang besar di dalamnya terdapat orang-orang yang memiliki karsa/tekad yang sama. Bersama nama dan logo ini terdapat doa serta harapan yang mengiringi setiap perjalanan BEM Unsoed di tahun 2024. Dengan ini, perjalanan BEM Unsoed 2024 kita awali bersama. Sudah saatnya kita untuk saling berkolaborasi bersama untuk terus menciptakan ragam karya untuk Unsoed dan Negeri kita tercinta. Ciptakan bahtera, Satukan karsa, Melangkah bersama!
                    </p>
                </div>
            </div>
        </div>
        </div>
    </div>

    <!-- Section: 1 -->
    <section class="bg-white py-12">
        <div class="container mx-auto p-6">
        <h1 class="text-3xl font-bold text-center mb-6">Filosofi Logo</h1>
        <div class="space-y-6">
            <div class="bg-blue-100 p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-center">
                <img src="storage/assets/f1.png" alt="Api" class="w-16 h-16 mb-4 sm:mb-0 sm:mr-4">
                <div>
                    <h2 class="text-xl font-bold">Api</h2>
                    <p>Melambangkan kekuatan tekad juang, yang senantiasa memberikan kehangatan serta cahaya dalam setiap langkah perjuangan, dan menjadi sumber inspirasi sekitarnya</p>
                </div>
            </div>
            
            <div class="bg-blue-100 p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-center">
                <img src="storage/assets/f2.png" alt="Bahtera" class="w-16 h-16 mb-4 sm:mb0 sm:mr-4">
                <div>
                    <h2 class="text-xl font-bold">Bahtera</h2>
                    <p>Sebagai kapal besar yang akan melakukan perjalanan luas, diciptakan untuk mempersatukan dan mengokohkan rasa, membangun fondasi yang kuat untuk berlabuh bersama</p>
                </div>
            </div>
            
            <div class="bg-blue-100 p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-center">
                <img src="storage/assets/f3.png" alt="Tiga Percikan Air" class="w-16 h-16 mb-4 sm:mb0 sm:mr-4">
                <div>
                    <h2 class="text-xl font-bold">Tiga Percikan Air</h2>
                    <p>Melambangkan tri dharma perguruan tinggi sebagai landasan</p>
                </div>
            </div>
            
            <div class="bg-blue-100 p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-center">
                <img src="storage/assets/f4.png" alt="Tangan yang mengadah" class="w-16 h-16 mb-4 sm:mb0 sm:mr-4">
                <div>
                    <h2 class="text-xl font-bold">Tangan yang mengadah</h2>
                    <p>Melambangkan keterbukaan dan semangat yang mendorong bahtera karsa</p>
                </div>
            </div>
            
            <div class="bg-blue-100 p-6 rounded-lg shadow-lg flex flex-col sm:flex-row items-center">
                <img src="storage/assets/f5.png" alt="Gelombang" class="w-16 h-16 mb-4 sm:mb0 sm:mr-4">
                <div>
                    <h2 class="text-xl font-bold">Gelombang</h2>
                    <p>Menggambarkan pergerakan yang dinamis serta keberanian yang tulus dalam menghadapi beragam tantangan, terus melangkah bersama karsa guna mencapai tujuan bersama</p>
                </div>
            </div>
        </div>
    </div>
    </section>
    
    <!-- Section: 2-->
    <section class="bg-white">
            <div class="container mx-auto text-center">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">BOOKLET</h2>
                <p class="text-gray-600 mb-8">Buku Pengantar Pendaftaran Event BEM Unsoed 2024</p>
                <div class="flex flex-wrap justify-center">
                    <div class="w-full md:w-1/4 p-4">
                        <a href="https://drive.google.com/file/d/11OSa3Gbb8Yj-y0VKRJ6o_WvOsR50fNVJ/view" class="block bg-blue-500 p-6 rounded-lg shadow-lg text-white">
                            <img src="storage/assets/descit.png" alt="Desa Cita" class="mb-4 rounded">
                            <h3 class="text-xl font-bold mb-2">Desa Cita</h3>
                        </a>
                    </div>
                    <div class="w-full md:w-1/4 p-4">
                        <a href="https://drive.google.com/file/d/13LqWk_eJjhUKOyNq-qiX6LJWFdFPEHVD/view" class="block bg-blue-500 p-6 rounded-lg shadow-lg text-white">
                            <img src="storage/assets/panggih.png" alt="Perhotelan" class="mb-4 rounded">
                            <h3 class="text-xl font-bold mb-2">Panggih Sedulur</h3>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    <Foot/>
</template>
