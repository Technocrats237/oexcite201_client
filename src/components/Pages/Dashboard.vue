<template>
    <div>
        <div class="app-title">
            <div>
                <h1><i class="fa fa-dashboard"></i> Dashboard</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="tile text-center">
                    <h3 class="tile-title">Select Color</h3>
                    <div class="tile-body">
                        <div class="block">
                            <span class="demonstration"></span>
                            <el-color-picker v-model="color"></el-color-picker>
                        </div>
                    </div>
                    <div class="tile-footer">
                        <button class="btn btn-primary" @click.prevent="implement">Send</button>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="tile text-center">
                    <h3 class="tile-title">Color Gradient</h3>
                    <div class="tile-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="block">
                                    <span class="demonstration">Start </span>
                                    <el-color-picker v-model="gradient.start"></el-color-picker>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="block">
                                    <span class="demonstration">End </span>
                                    <el-color-picker v-model="gradient.end"></el-color-picker>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tile-footer">
                        <button class="btn btn-primary" @click.prevent="implement">Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Dashboard',
        data () {
            return {
                gradient: {
                    start: '',
                    end: ''
                },
                color: ''
            }
        },
        methods: {
            implement () {
                this.$notify({type: "success", message: "We are still implementing this feature", title: "Stay tuned"})
            }
        }
    }
</script>
