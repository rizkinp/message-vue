<template>
    <div class="mb-6">
        <label class="block mb-2 text-sm font-medium text-white">{{ label }}</label>
        <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true,
        },
        modelValue: {  // Menambahkan modelValue untuk v-model
            type: String,
            default: '',
        },
    },
}
</script>

<style>
/* Tambahkan gaya jika diperlukan */
</style>
