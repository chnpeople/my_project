<template>
  <div class="wrap">
    <myTree
      ref="tree"
      :data="data"
      show-checkbox
      check-strictly
      :node-key="'id'"
      :expand-on-click-node="false"
      @check-change="handleCheckChange"
      :props="defaultProps"
    >
		
    </myTree>
  </div>
</template>

<script>
import myTree from './treeVirualNode/tree.vue';
export default {
  components: {
    myTree,
  },
  data() {
    return {
      data: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [],
            },
          ],
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1',
            },
            {
              id: 6,
              label: '二级 2-2',
            },
          ],
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1',
            },
            {
              id: 8,
              label: '二级 3-2',
            },
          ],
        },
      ],
      defaultProps: {
        children: 'children',
        label: 'label',
      },
    };
  },
  created() {
    this.addData();
  },
  methods: {
    addData() {
      for (let index = 0; index < 10000; index++) {
        this.data[0].children[0].children.push({
          id: `${index + 4}`,
          label: `三级 1-1-${index + 1}`,
        });
      }
    },
    handleCheckChange(data, checked, indeterminate) {
      if (checked) {
        this.$refs.tree.setCheckedKeys([data.id]);
      }
    },
  },
};
</script>

<style>
.wrap {
  width: 500px;
  height: 1000px;
  border: 1px solid green;
}
</style>
