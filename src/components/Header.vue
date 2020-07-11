<template>
    <div class="header">
        <div class="header__heading">
            <h3>Where in the world?</h3>
        </div>
        <div class="header__mode">
            <img src="../design/moon-regular.svg" alt="">
            <h5>Dark mode</h5>
        </div>
    </div>
</template>






<style lang="scss">
    .header{
        height: 80px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        border-bottom: 0.8px solid rgba(0,0,0,0.1);

        &__heading{
            font-size: 22px;
            font-weight: 600;
            

        }
        &__mode{
            font-size: 24px;
            font-weight: 600;
            display: flex;
            align-items: center;

        }
        &__mode img{
            height: 15px;
            width:15px;
            margin-right: 5px;
            
        }
    }
</style>