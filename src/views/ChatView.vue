<template>
    <div class="flex items-center justify-center min-h-screen bg-black">
        <div class="w-2/4 flex flex-col justify-center items-center">
            <h2 class="mb-4 text-white">Feel Free</h2>
            <div ref="chatContainer" class="flex flex-col overflow-y-auto overflow-x-hidden h-96 pr-4 relative">
                <div v-for="message in messages" :key="message.id" class="mb-2">
                    <ChatBuble :name="message.name" :text="message.text" :timestamp="message.createdAt.seconds * 1000"
                        avatar="../assets/person.png" />
                </div>
                <div v-if="newMessageAvailable"
                    class="absolute bottom-0 left-0 w-full bg-red-500 text-white p-2 rounded-lg cursor-pointer"
                    @click="scrollToBottom">
                    New Message!
                </div>
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
            newMessageAvailable: false,
            lastScrollTop: 0,
        };
    },
    created() {
        const messagesCollection = collection(db, "messages");
        const messagesQuery = query(messagesCollection, orderBy("createdAt"));

        onSnapshot(messagesQuery, (snapshot) => {
            const newMessages = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            if (newMessages.length > this.messages.length) {
                this.newMessageAvailable = true;
            }
            this.messages = newMessages;
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
        scrollToBottom() {
            this.newMessageAvailable = false;
            const chatContainer = this.$refs.chatContainer;
            chatContainer.scrollTo({ top: chatContainer.scrollHeight, behavior: 'smooth' });
        },
    },
};
</script>

<style>
/* Tambahkan gaya jika diperlukan */
</style>