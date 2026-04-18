<template>
    <div id="flexbox">
        <section id="name">davidthomann.dev</section>
        <section id="links">
            <a href="#projects">Projects</a>
            <a href="#about">About me</a>
            <a href="#contact">Contact</a>
        </section>
    </div>
</template>

<style lang="css" scoped>
    #flexbox {
        width: 100%;
        height: 5vh;
        display: flex;
        align-items: center;
        justify-content: space-between;

        
    }

    a {
        color: rgb(112, 115, 145);
    }

    #links {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-right: 10%;
    }

    #name {
        margin-left: 10%;
        color: rgb(112, 115, 145);
    }
</style>