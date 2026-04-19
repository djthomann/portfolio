<script setup lang="ts">
import SkillCard from './SkillCard.vue';



const props = defineProps({
  title: String,
  description: String
})

</script>

<template>
    <div class="box">
        <div id="info">
            <div id="title">{{ props.title }}</div>
            <div id="description">{{ props.description }}</div>
        </div>
        <ul id="techstack">
            <SkillCard title="Java" color="purple"></SkillCard>
            <SkillCard title="Spring" color="green"></SkillCard>
        </ul>
    </div>
</template>

<style lang="css" scoped>
.box {
    width: 12.5%;
    padding: 2.5%;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    border: 0.5px solid gray;
    border-radius: 20px;

    transition: all 200ms;
    
    background-color: black;
    z-index: 1;
}

@media (max-width: 700px) {
    .box {
        height: 50%;
        width: auto;
        aspect-ratio: 1;
    }
}

.box:hover {
    background-color: #00e0ff;
    color: black;
    -webkit-box-shadow:0px 0px 62px 11px rgba(99,193,255,0.9);
    -moz-box-shadow: 0px 0px 62px 11px rgba(99,193,255,0.9);
    box-shadow: 0px 0px 200px 4px rgba(99,193,255,0.9);
    transform: scale(1.1);
    z-index: 0;
}

#info {
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

#title {
    font-size: 2vw;
    font-weight: bold;
}

#description {
    font-size: 1.2vw;
    text-align: center;
}

#techstack {
    display: flex;
    gap: 10px;
    margin: 0;
}

#techstack li {
    font-size: 1vw;
}
</style>