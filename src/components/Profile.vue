<template>
    <div id="flexbox">
        <div id="profile">
            <div id="name">
                David Thomann
            </div>
            <div id="github"><img id="github-icon" src="/github.svg" alt="GitHub"><a href="https://github.com/djthomann">@djthomann</a></div>
            <div id="bio">
                Computer Science and Media Student<br>
                Focus on Mobile Development, Human Computer Interaction and Full-Stack development
            </div>
            <ul id="skills">
                <li>Java</li>
                <li>Kotlin</li>
                <li>Vue</li>
                <li>Spring</li>
            </ul>
            
        </div>
        <div id="further">
                <a href="#projects">Projects</a>
            </div>
    </div>
</template>

<style lang="css" scoped>
#flexbox {
    width: 100%;
    height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#profile {
    width: 60%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: flex-start;    
}

#github {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5vh;
    font-size: 2.5vh;
}

#github-icon {
    height: 100%;
}

#name {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 16px;

    margin-top: 5%;

    font-size: 42pt;
    font-weight: bold;

    line-height: 1.2;
    background: linear-gradient(90deg, #00a1e1, #bcdbf6);
    
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

#bio {
    margin-top: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

#skills {
    margin-top: 5%;
    width: 100%;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 20px;
    text-decoration: none;
    display: flex;
}

#skills li {
    display: block;
}

#further {
    display: flex;
    justify-content: center;
}

</style>