<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Welcome from '@/Components/Welcome.vue';
</script>

<template>
    <AppLayout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
              Selamat Datang di Dashboard,  {{ $page.props.auth.user.name }}!
            </h2>
        </template>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-10 lg:px-10">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <Welcome />
                </div>
            </div>
        </div>
    </AppLayout>
</template>
