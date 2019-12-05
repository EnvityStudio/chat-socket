<template>
    <div class="component-conversation">
        <div v-for="(mess, index) in listMessage"
             :key="index"
             class="div-content-message"
             :class="[mess.user === 'user 0' ? 'div-content-message-right' : '']">
            <img src="../../assets/icon_user.png"
                 alt="icon-user-conversation"
                 class="navbar-toggler-icon img-icon-user-conversation"
                 :class="[mess.user === 'user 0' ? 'img-icon-user-conversation-right' : '']" />
            <span class="span-content-message"
                  :class="[mess.user === 'user 0' ? 'span-content-message-right' : '']"
            >{{ mess.content }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Conservation",
        data() {
            return {
                listMessage: []
            };
        },
        methods: {
            updateConversation(newPost) {
                this.listMessage.push({
                    id: '',
                    content: newPost.content,
                    date: newPost.date,
                    user: newPost.user
                });
                if (parseInt(newPost.content)) {
                    for (let index = 0; index < parseInt(newPost.content); index++) {
                        if (index > 5) {
                            break;
                        } else {
                            this.listMessage.push({
                                id: '',
                                content: Math.random(),
                                date: '',
                                user: 'user 1'
                            });
                        }
                    }
                }
                return true;
            }
        }
    };
</script>

<style scoped lang="scss">
    .img-icon-user-conversation {
        margin-right: 5px;
        margin-top: 0px;
    }

    .div-content-message {
        margin-top: 17.5px;
        margin-bottom: 17.5px;
        width: 100%;
        clear: both;
    }

    .span-content-message {
        border: 1px solid #cccccc;
        border-radius: 0px 20px 20px 0px;
        border-left: none;
        padding: 10px;
        text-align: center;
        background: #f1f1f1;
    }

    .img-icon-user-conversation-right {
        float: right;
    }

    .span-content-message-right {
        float: right;
        border-radius: 20px 0px 0px 20px;
        border-right: none;
        background: #fffce1;
    }

    .div-content-message-right {
    }
</style>
