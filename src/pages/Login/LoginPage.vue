<template>
  <div class="container bg-red">
    <div class="bg-mainColor h-[312px] w-full mb-3"></div>
    <div class="p-[20px]">
      <h1 class="font-bold text-xl">Welcome!</h1>
      <form class="mb-3" @submit.prevent="handleSubmitForm">
        <div class="mb-3 block">
          <a-input
            v-model:value="user.emailAddress"
            placeholder="Email Address"
            name="emailAddress"
          />
        </div>

        <div class="mb-3 block">
          <a-input
            v-model:value="user.password"
            placeholder="Password"
            class="block"
            name="emailAddress"
          />
        </div>

        <div class="block text-start">
          <p class="text-primary text-[13px] font-bold cursor-pointer">
            Forgot Password?
          </p>
        </div>

        <div class="w-full">
          <a-button type="primary" class="w-full" @click="handleSubmitForm"
            >Login</a-button
          >
        </div>
      </form>
      <div class="w-full text-center">
        <p class="text-colorTextSecond">
          Not a member? <span class="text-primary font-bold">Register Now</span>
        </p>
      </div>
      <a-divider />

      <div class="w-full text-center">
        <p class="text-colorTextSecond">Or continue with?</p>
      </div>

      <div class="w-full flex justify-center items-center gap-3">
        <div
          class="rounded-full w-10 h-10 bg-[#ED3241] flex justify-center items-center"
        >
          <img :src="icons.google" alt="google" width="12" height="12" />
        </div>
        <div
          class="rounded-full w-10 h-10 bg-[#1F2024] flex justify-center items-center"
        >
          <img :src="icons.apple" alt="google" width="12" height="12" />
        </div>
        <div
          class="rounded-full w-10 h-10 bg-[#006FFD] flex justify-center items-center"
        >
          <img :src="icons.facebook" alt="google" width="12" height="12" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import apple from "@/assets/images/apple.svg";
import facebook from "@/assets/images/facebook.svg";
import Google from "@/assets/images/google.svg";
import { ref } from "vue";

const icons = {
  google: Google,
  apple: apple,
  facebook: facebook,
};

const user = ref({
  emailAddress: "",
  password: "",
});

function handleSubmitForm() {
  console.log("Submit form", user.value);
}
</script>
<style lang=""></style>
