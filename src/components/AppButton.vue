<template>
  <div class="app-button">
    <div class="wrapper" @click="handleClick">
      <div class="text">{{ title }}</div>
      <div class="action">→</div>
    </div>
  </div>
</template>


<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router'
  const router = useRouter()
  const props = defineProps(['title', 'path']);
  function handleClick() { 
    router.push(props.path)
  }
</script>

<style lang="scss" scoped>
.app-button {
  width: fit-content;
  transition: all .3s;
  width: 200px;
  height: auto;
  &:hover {
    cursor: pointer;
    border-color: $color-11;
    background-color: $color-11;
    color: $color-1;
  }
  .wrapper {
    display: flex;
    padding: 20px 20px;
    border: solid 1px  $color-11;
    @include phone {
      border: solid 0.5px  $color-4;
    }
    .action {
      margin-left: auto;
    }
  }
}
</style>