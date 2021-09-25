<template>
  <div>
      Tree
  </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    name: '广东',
                    children: [
                        {
                            name: '湛江',
                            children: [
                                {
                                    name: '霞山',
                                    children: []
                                },
                                {
                                    name: '麻章',
                                    children: []
                                },
                            ]
                        },
                        {
                            name: '深圳',
                            children: [
                                {
                                    name: '南山',
                                    children: []
                                },
                                {
                                    name: '罗湖',
                                    children: []
                                },
                            ]
                        },
                    ]
                },
                {
                    name: '江苏',
                    children: [
                        {
                            name: '南京',
                            children: [
                                {
                                    name: '江宁',
                                    children: []
                                },
                                {
                                    name: '鼓楼',
                                    children: []
                                },
                            ]
                        },
                        {
                            name: '苏州',
                            children: [
                                {
                                    name: '姑苏',
                                    children: []
                                },
                                {
                                    name: '吴中',
                                    children: []
                                },
                            ]
                        },
                    ]
                }
            ]
        }
    },
    created() {
        this.handlerData()
    },
    methods: {
        handlerData() {
            let arr = []
            let level = 0
            function flat(list, idx) {
                idx++
                list.forEach((item, index) => {
                    item.level = idx
                    arr.push(item)
                    if(item.children.length != 0) {
                        flat(item.children, idx)
                    }
                })
            }

            flat(this.list, level)
        console.log(arr);
        }
    },
}
</script>

<style>

</style>