<template>
    <div class="key disable-select" :class="classes">
        <span>
            <i v-if="icon" :class="icon"></i>
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "cmn-key",
        props: {
            special: {
                type: Boolean
            },
            icon: {
                type: String
            }
        },
        computed: {
            classes() {
                let classes = {};

                if (this.special)
                    classes.special = true;

                if (this.icon)
                    classes.icon = true;

                return classes;
            }
        }
    }
</script>

<style scoped lang="scss">
    /* begin: keys */
    $key-width: 2.2rem;
    $key-height: 2rem;

    div.key
    {
        display: inline-block;
        width: $key-width;
        height: $key-height;
        padding: 1px;
        margin: .25rem;
    }
    div.key > span
    {
        position: absolute;
        background-color: $theme-color-1;
        display: block;
        width: $key-width;
        height: $key-width;
        border: 1px solid #a9a9a9;
        border-radius: 2px 2px 2px 2px;
        -moz-border-radius: 2px 2px 2px 2px;
        -webkit-border-radius: 2px 2px 2px 2px;
        font-size: $key-height/2;
        -moz-box-sizing: border-box !important;
        -webkit-box-sizing: border-box !important;
        box-sizing: border-box !important;
        text-align: center;
        color: #7c7c7c;
        -webkit-box-shadow: 0px 3px 0px -2px rgba(255,255,255,1), 0px 2px 0px 0px rgba(169,169,169,1);
        -moz-box-shadow: 0px 3px 0px -2px rgba(255,255,255,1), 0px 2px 0px 0px rgba(169,169,169,1);
        box-shadow: 0px 3px 0px -2px rgba(255,255,255,1), 0px 2px 0px 0px rgba(169,169,169,1);
        cursor: default;//pointer;
        line-height: 2.2rem;
    }

    //div.key > span:hover
    //{
    //  background-color: #75b4fb;
    //  border: 1px solid #5a88c5;
    //  color: #fff;
    //  text-shadow: 1px 1px 1px rgba(0,0,0,0.2);
    //  -webkit-box-shadow: 0px 3px 0px -2px rgba(117,180,251,1), 0px 2px 0px 0px rgba(90,136,197,1);
    //  -moz-box-shadow: 0px 3px 0px -2px rgba(117,180,251,1), 0px 2px 0px 0px rgba(90,136,197,1);
    //  box-shadow: 0px 3px 0px -2px rgba(117,180,251,1), 0px 2px 0px 0px rgba(90,136,197,1);
    //  cursor: pointer;
    //}
    //
    //div.key > span:active
    //{
    //  margin-top: 2px;
    //  box-shadow: none;
    //  -moz-box-shadow: none;
    //  -webkit-box-shadow: none;
    //}

    div.key.special > span
    {
        padding-top: 0.26rem;
        font-size: $key-height/2 - 0.2rem;
    }

    div.key.icon > span
    {
        padding-top: 0.1rem;
        font-size: $key-height/1.6;
    }
    /* end: keys*/
</style>