<template>
    <div class="form">
        <slot name="SlotFormGroup">
            <label for="name">Nombre</label>
            <input type="text" id="name" class="color-white">
        </slot>
    </div>
</template>
<style lang="stylus" scoped>
    label 
        display block
</style>


