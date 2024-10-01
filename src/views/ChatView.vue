<template>
    <div class="flex items-center justify-center min-h-screen bg-black">
        <div class="w-2/4 flex flex-col justify-center items-center">
            <h2 class="mb-4 text-white">Chat Room</h2>
            <div v-for="message in messages" :key="message.id" class="mb-2">
                <ChatBuble :name="message.name" :text="message.text" :timestamp="message.createdAt.seconds * 1000"
                    avatar="../assets/person.png" />
            </div>
            <InputSmall label="Your Name Here.." v-model="name" />
            <InputSmall label="Your Message Here.." v-model="newMessage" />
            <button @click="sendMessage"
                class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span
                    class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Send Message
                </span>
            </button>
        </div>
    </div>
</template>

<script>
import InputSmall from "@/components/Input/InputSmall.vue";
import ChatBuble from "@/components/ChatBuble/ChatBuble.vue";
import { db } from "@/firebase";
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from "firebase/firestore";

export default {
    components: {
        InputSmall,
        ChatBuble,
    },
    data() {
        return {
            messages: [],
            newMessage: "",
            name: "",
        };
    },
    created() {
        console.log('ChatView created');
        const messagesCollection = collection(db, "messages");
        const messagesQuery = query(messagesCollection, orderBy("createdAt"));

        onSnapshot(messagesQuery, (snapshot) => {
            this.messages = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
        });
    },
    methods: {
        async sendMessage() {
            if (this.newMessage.trim() && this.name.trim()) {
                await addDoc(collection(db, "messages"), {
                    name: this.name,
                    text: this.newMessage,
                    createdAt: serverTimestamp(),
                });
                this.newMessage = "";
            }
        },
    },
};
</script>

<style>
/* Tambahkan gaya jika diperlukan */
</style>
