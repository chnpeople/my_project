<template>
  <div>
      <div style="width: 220px;">
        <el-input v-model="col" placeholder="请输入列数啊"></el-input>
        <br>
        <br>
         <el-input v-model="row" placeholder="请输入行数啊"></el-input>
         <br>
         <br>
         <el-button @click="makeTable">生成表格</el-button>
         <br><br><br>

        <div ref="myTbale" class="my-table">

        </div>

      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            col: '', //列
            row: '',  //行
            mytable: false
        }
    },
    methods: {
        makeTable() {
            let myTbale = this.$refs.myTbale;
            if(this.mytable) {
                console.log(myTbale);
                myTbale.innerHTML = '';
            }

            let col = Number(this.col);
            let row = Number(this.row);
            console.log(myTbale);

            let table = document.createElement('table');
            this.mytable = true;

            console.log(table);

            let tr =document.createElement('tr');

            for(let i = 1; i <= col; i ++ ) {
                let th = document.createElement('th');
                th.innerHTML = i;
                tr.appendChild(th);
            }

            table.appendChild(tr);

            for(let j = 1; j <= row; j ++ ) {
                let tr =document.createElement('tr');
                for(let k = 1; k <= col; k++) {
                    let td = document.createElement('td');
                    td.innerHTML = j * k;
                    tr.appendChild(td);
                }              
                table.appendChild(tr);
            }



            myTbale.appendChild(table);


        }
    },
}
</script>

<style>
.my-table {
    width: 1500px;
    height: 800px;
    /* border: 1px solid red; */
}

.my-table table {
    width: 100%;
    height: 100%;
    border: 1px solid blue;
}
.my-table th {
    width: 20px;
    border: 1px solid red;
    text-align: center;
}
.my-table td {
    width: 20px;
    border: 1px solid red;
    text-align: center;
}
</style>