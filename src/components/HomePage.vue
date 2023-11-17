<template>
    <div id="homePageContainer">
        <HeaderBar class="header" />
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos inventore nobis et? Ullam odit laboriosam ea ex
            sapiente officiis, debitis dolorem dolore quaerat illo culpa, cum maxime neque architecto quis.Body scrollable
            contentLorem ipsum dolor sit amet consectetur adipisicing elit. Eos inventore nobis et? Ullam odit laboriosam ea
            ex
            sapiente officiis, debitis dolorem dolore quaerat illo culpa, cum maxime neque architecto quis.Body scrollable
            contentLorem ipsum dolor sit amet consectetur adipisicing elit. Eos inventore nobis et? Ullam odit laboriosam ea
            ex
            sapiente officiis, debitis dolorem dolore quaerat illo culpa, cum maxime neque architecto quis.Body scrollable
            contentLorem ipsum dolor sit amet consectetur adipisicing elit. Eos inventore nobis et? Ullam odit laboriosam ea
            ex
            sapiente officiis, debitis dolorem dolore quaerat illo culpa, cum maxime neque architecto quis.Body scrollable
            contentLorem ipsum dolor sit amet consectetur adipisicing elit. Eos inventore nobis et? Ullam odit laboriosam ea
            ex
            sapiente officiis, debitis dolorem dolore quaerat illo culpa, cum maxime neque architecto quis.Body scrollable
            contentLorem ipsum dolor sit amet consectetur adipisicing elit. Eos inventore nobis et? Ullam odit laboriosam ea
            ex
            sapiente officiis, debitis dolorem dolore quaerat illo culpa, cum maxime neque architecto quis.Body scrollable
            content</div>
        <FooterName />
    </div>
</template>
  
<script>
import HeaderBar from './HeaderBar.vue'
import FooterName from './FooterName.vue'

export default {
    name: 'HomePage',
    components: {
        HeaderBar,
        FooterName
    }
}
</script>

<style>
.header {
    background-color: rgb(122, 255, 255);
    position: sticky;
    top: 0;
    /* width: 100%; */
}
</style>
