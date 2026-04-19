<script setup lang="ts">
import { ref } from 'vue';


const menuVisible = ref(false)

function toggleMenu() {
    menuVisible.value = !menuVisible.value
}

</script>

<template>
    <div id="flexbox">
        <section id="name">davidthomann.dev</section>
        <section id="links">
            <a href="#projects">Projects</a>
            <a href="#about">About me</a>
            <a href="#contact">Contact</a>
        </section>

        <section id="links-menu">
            <div v-on:click="toggleMenu">Menu</div>
        </section>

        <Transition name="slide">
            <div v-if="menuVisible" id="menu-flexbox">
                <div><a href="#projects">Projects</a></div>
                <div><a href="#about">About me</a></div>
                <div><a href="#contact">Contact</a></div>
            </div>
        </Transition>
    </div>
    
</template>

<style lang="css" scoped>
    #flexbox {
        position: relative;
        width: 100%;
        height: 5vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    #menu-flexbox {
        position: absolute;
        top: 5vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    #menu-flexbox div {
        margin-right: 3%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .slide-enter-active,
    .slide-leave-active {
        transition: all 0.25s ease;
    }

    .slide-enter-from,
    .slide-leave-to {
        transform: translateY(-10px);
        opacity: 0;
    }

    a {
        color: rgb(65, 66, 82);
    }

    #links {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-right: 3%;
    }

    #links-menu {
        margin-right: 3%;
        display: none;
        color: rgb(65, 66, 82);
    }

    @media (max-width: 1024px) {
        #links {
            display: none;
        }
        #links-menu {
            display: block
        }
        
    }

    #name {
        margin-left: 3%;
        color: rgb(65, 66, 82);
    }
</style>