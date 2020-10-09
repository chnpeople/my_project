<template>
    <div>
        <el-button type="primary"
                   size="small"
                   @click="queryAjax">发送请求</el-button>
        <el-button type="warning"
                   size="small"
                   @click="cancel">中断ajax</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ajax: '',
        };
    },
    created() {
        this.test();
    },
    methods: {
        queryAjax() {
            this.$axios({
                methods: 'get',
                uri: '/json/newslist/news',
                successCallback: (res) => {
                    console.log(res);
                },
            });
        },
        cancel() {
            this.$router.push('/keepalive');
        },
        test() {
            this.$axios({
                methods: 'get',
                uri: 'https://www.tim007.xyz/api/',
                successCallback: (res) => {
                    console.log(res);
                },
            });
        },
    },
};
</script>

<style>
</style>