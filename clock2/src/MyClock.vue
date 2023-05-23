<template>
    <div>
       {{ time }} 
    </div>
</template>
<script>
import moment from "moment";

export default {
    name: "MyClock",
    data(){
        return {time: null};
    },
    mounted() {
        let callback = () => this.time = moment().format("HH:mm:ss");
        callback();
        setInterval(callback, 1000);
    },
}
</script>
<style>
    
</style>