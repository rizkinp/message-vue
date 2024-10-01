<template>
    <div class="flex items-start mb-4 gap-2.5">
        <img class="w-8 h-8 rounded-full" src='../../assets/person.png' alt="User Image">
        <div class="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700"
            style="width: 250px; max-width: 155px;">
            <div class="flex items-center space-x-2 rtl:space-x-reverse">
                <span class="text-sm font-semibold text-gray-900 dark:text-white">{{ name }}</span>
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">{{ formattedTime }}</span>
            </div>
            <div class="pb-4 overflow-x-hidden"> <!-- Add overflow-x-hidden to prevent text from overflowing -->
                <p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white break-words"
                    style="overflow-wrap: break-word;">
                    {{ text }}
                </p>
            </div>
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
        </div>
    </div>
</template>

<script>


export default {
    props: {
        name: String,
        text: String,
        timestamp: {
            type: Number,
            required: true
        },
    },
    computed: {
        formattedTime() {
            const date = new Date(this.timestamp);
            return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        }
    }
}
</script>

<style>
/* Pastikan Anda memiliki pengaturan ini */
</style>
