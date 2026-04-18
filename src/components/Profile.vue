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
                <li><img id="java-icon" src="/java.svg" alt="Java"></li>
                <li><img id="kotlin-icon" src="/kotlin.svg" alt="Kotlin"></li>
                <li><img id="vue-icon" src="/vue.svg" alt="Vue"></li>
                <li><img id="spring-icon" src="/spring.svg" alt="Spring"></li>
            </ul>
            
        </div>
        <div id="further">
            <a id="further" href="#projects">Projects<img id="further-icon" src="/down_arrow.svg" alt="Further"></a>
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
    width: 90%;
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
    font-size: 2vh;
}

#github-icon {
    height: 60%;
}

#java-icon {
    height: 52px;
}

#kotlin-icon {
    height: 40px;
}

#vue-icon {
    height: 40px;
}

#spring-icon {
    height: 40px;
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
    margin-top: 7.5%;
    width: 100%;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    text-decoration: none;
    display: flex;
    font-weight: bold;
}

#skills li {
    display: block;
}

#further {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    font-weight: bold;
}

#further-icon {
    height: 20px;
    animation: spin 1s ease-in-out infinite alternate;
}

@keyframes spin {
  from {
    transform: translateY(5px);
  }
  to {
    transform: translateY(15px);
  }
}

</style>