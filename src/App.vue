<script setup lang="ts">
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Header from './components/Header.vue';
import Profile from './components/Profile.vue';
import Projects from './components/Projects.vue';
</script>

<template>
  <div id="background"></div>
  <Header></Header>
  <Profile />
  <Projects />
  <About />
  <Contact />
</template>
