<script setup lang="ts" >
const props = defineProps({
  title: String,
  color: String
})
</script>

<template>
    <div id="box">
        <div :style="{ '--bg-color': props.color }" id="color"></div>
        <div id="title">{{ props.title }}</div>
    </div>
</template>

<style lang="css" scoped>
#box {
    display: flex;
    align-items: center;
    gap: 5px;
}

#color {
    width: 14px;
    height: 14px;
    border-radius: 100%;
    background-color: var(--bg-color);
}

#title {
    font-size: 1vw;
}
</style>