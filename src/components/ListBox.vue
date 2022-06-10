<template>
    <div class="list-container">
        <div class="points" v-if="this.point">
            {{this.point}}
        </div>
        <div class="list-wrap">
            <div class="list-content">
                <slot name="content"></slot>
            </div>
            <div class="list-footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['propsdata'],
    computed: {
        point() {
            return this.propsdata.points;
        }
    }
}
</script>

<style scoped>
.list-container {
    margin: 10px 25px;
    border: 1px solid #000;
    border-radius: 5px;
    box-shadow: 1px 1px 1px;
    display: flex;
    align-items: center;
}
.points {
    text-align: center;
    padding: 0 0 0 12px;
    font-weight: 600;
    color: #42b883;
}
.list-wrap {
    padding: 15px;
}
.list-content {
    margin-bottom: 12px;
    font-weight: 700;   
}
</style>