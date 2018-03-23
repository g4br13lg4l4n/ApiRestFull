<template>
    <div class="header-main">
        <slot name="MainTitle">
            <h2>Titulo Panel</h2>
        </slot>
        <slot name="MainSearch">
            <form class="form-control">
                <label for="search">Buscar</label>
                <input type="text" id="search">
            </form>
        </slot>
    </div>
</template>
