<template>
  <input type="file" @change="getFile($event)">
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        getFile(e) {
            console.log(e.target.files[0]);
            let blob = new Blob([e.target.files[0]]);
            let url = URL.createObjectURL(blob);
            console.log(url);
            const a = document.createElement('a');
            a.download = '测试.xlsx';
            a.href = url;
            a.click();
        }
    },
}
</script>

<style>

</style>