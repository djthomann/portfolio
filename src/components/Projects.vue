<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';

</script>

<template>
    <section id="projects" class="sec">
        <h1 class="section-heading">Projects</h1>

        <div id="project-cards">
            <ProjectCard title="SnackMan" description="Multiplayer 3D Game" />
            <ProjectCard title="TagItEasy" description="Tangible User Interface for shared living spaces"/>
            <ProjectCard title="me@hsrm" description="Multiplatform Campus App" />
            <ProjectCard title="PizzaPal 2.0" description="Storage Management Software"/>
        </div>
    </section>
</template>

<style lang="css" scoped>

#section-heading {
    margin-top: 10%;
    height: 20%;
}

#projects {
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

#project-cards {
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

@media (max-width: 700px) {
    #project-cards {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 0.4fr);
        grid-column-gap: 0px;
        grid-row-gap: 10px; 

        justify-items: center;
        align-items: center;
    }
}

#techstack {
    display: flex;
}
</style>