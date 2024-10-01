<template>
    <div class="flex items-start gap-2.5">
        <img class="w-8 h-8 rounded-full" src='../../assets/person.png' alt="User Image">
        <div class="flex flex-col w-full max-w-[320px] min-w-[200px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700"
            style="max-height: 100px;"> <!-- Set a fixed max height -->
            <div class="flex items-center space-x-2 rtl:space-x-reverse">
                <span class="text-sm font-semibold text-gray-900 dark:text-white">{{ name }}</span>
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">{{ formattedTime }}</span>
            </div>
            <p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white break-words"
                style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;">
                {{ text }}
            </p>
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
