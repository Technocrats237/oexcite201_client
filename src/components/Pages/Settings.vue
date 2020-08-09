<template>
    <div>
        <div class="app-title">
            <div>
                <h1><i class="fa fa-wrench"></i> Settings</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="tile">
                    <h3 class="tile-title">Modify Password</h3>
                    <div class="tile-body">
                        <div>
                            <div class="form-group">
                                <label class="control-label">Current Password</label>
                                <input v-model="form.current" class="form-control" type="password"
                                       placeholder="********">
                            </div>
                            <div class="form-group">
                                <label class="control-label">New Password</label>
                                <input v-model="form.new_password" class="form-control" type="password" placeholder="">
                            </div>
                            <div class="form-group">
                                <label class="control-label">Re-enter New Password</label>
                                <input v-model="form.password_confirmation" class="form-control" type="password"
                                       placeholder="">
                            </div>
                        </div>
                    </div>
                    <div class="tile-footer">
                        <button :disabled="loading || passwords" @click.prevent="updatePassword" class="btn btn-primary" type="button">
                            <i class="fa fa-fw fa-lg fa-spinner fa-spin" v-if="loading"></i>
                            <i class="fa fa-fw fa-lg fa-shield" v-else></i>
                            {{ $t('button.secure') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Settings",
        data() {
            return {
                form: {
                    current: '',
                    new_password: '',
                    password_confirmation: ''
                },
                loading: false
            }
        },
        computed: {
            passwords () {
                return !!Object.values(this.form).filter(v => !v.length).length
            }
        },
        methods: {
            updatePassword() {
                if (this.form.new_password === this.form.password_confirmation) {
                    this.$authService.update_password({
                        current: this.form.current,
                        new_password: this.form.new_password
                    })
                        .then(() => {
                            this.$notify({
                                title: this.$t('status.success'),
                                message: this.$t('login.reset'),
                                type: 'success'
                            });
                            Object.keys(this.form).forEach((k) => {
                                this.form[k] = '';
                            });
                        })
                        .catch(() => {
                            this.$notify({
                                title: this.$t('status.unauthorised'),
                                type: 'error'
                            })
                        })
                }
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>
