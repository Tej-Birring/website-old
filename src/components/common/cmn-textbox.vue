<template>
    <div class="has-float-label" :data-placeholder="placeholder">
    <input
           :id="id"
           type="text"
           tabindex="0"
           autocomplete="off"
           ref="inputElement"
           :placeholder="placeholder"
           :minlength="minLength"
           :maxlength="maxLength"
           :required="required"
           :pattern="pattern"
           spellcheck="false"
           v-model="value"
           formnovalidate
    />
    <label :for="id">{{placeholder}}</label>
    </div>
</template>


<script>
    export default {
        name: "cmn-textbox",
        props: {
            placeholder: {
                type: String,
                default: ""
            },
            required: {
                type: Boolean,
                default: false
            },
            minLength: {
                type: Number,
                default: 0
            },
            maxLength: {
                type: Number,
                default: 100
            },
            pattern: {
                type: String,
                default: undefined
            },
            capitalizeFirstLetter: {
                type: Boolean,
                default: false
            }
        },
        data() { return {
            value: undefined,
            isValid: undefined,
            id: undefined
        }},
        watch: {
            value() {
                if (this.capitalizeFirstLetter && this.value)
                    this.value = this.value[0].toUpperCase() + this.value.slice(1,);
                this.validate();
            }
        },
        emits: ['update:isValid', 'update:value'],
        methods: {
            validate() {
                const inputElement = this.$refs.inputElement;
                inputElement.checkValidity();
                this.isValid = inputElement.validity.valid;
                this.$emit("update:isValid", this.isValid);
                this.$emit("update:value", this.value);
                // console.log(`'${this.value}' is valid: `, this.isValid);
                // console.log(inputElement.validity)
            },
            /* problem was fixed by preventing default event handling in keyboard-navigation module */
            // onFocusIn() {
            //     console.log("focussed in...");
            //
            //     // TODO: This is a temporary measure to mitigate the "left/right arrow keyboard-navigation driven focus" problem.
            //     const inputElement = this.$refs.inputElement;
            //
            //     setTimeout(() => {
            //         const valLen = inputElement.value.length;
            //         inputElement.selectionStart = valLen;
            //         inputElement.selectionEnd = valLen;
            //         // inputElement.focus();
            //     }, 10);
            // }
        },
        mounted() {
            this.id = this._uid;
        }
    }
</script>


<style scoped lang="scss">

</style>