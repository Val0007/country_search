<template>
    <div class="loader">
        <img src="https://img.icons8.com/officel/80/000000/spinner-frame-2.png"/>
    </div>
</template>




<style lang="scss">
 @keyframes rotate{
     from{
         transform: rotateZ(0deg) scale(1);

     }
     to{
         transform: rotateZ(360deg) scale(1.5);
     }
 }
    .loader{
        height: 500px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        
    }
    .loader img{
        display: inline-block;
        animation: rotate 1s infinite linear;
    }
</style>