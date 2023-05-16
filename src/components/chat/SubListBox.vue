<template>
    <li class="p-2 border-bottom" style="border-bottom: 1px solid rgba(255,255,255,.3) !important;">
        <!-- <a href="#!" class="d-flex justify-content-between link-light"> -->
        <a @click="channelClick" class="d-flex justify-content-between link-light">
        <div class="d-flex flex-row">
            <img :src="otherUser.profile_url" alt="avatar"
            class="rounded-circle d-flex align-self-center me-3 shadow-1-strong" width="60">
            <div class="pt-1">
            <p class="fw-bold mb-0">{{ otherUser.nickname }}</p>
            </div>
        </div>
        <div class="pt-1">
            <p class="small text-white mb-1">{{ timePassed }}</p>
            <div v-if="unread != 0">
                <span class="badge bg-danger float-end">{{ unread }}</span>
            </div>
        </div>
        <!-- <button @click="getOtherUser()">button</button> -->
        </a>
    </li>
</template>

<script>
    export default {
        name: 'SubListBox',
        props:{
            channel: Object,
            myUserID: String
        },
        data(){
            return {
                apiToken: '59c2ddbf1add1be678005db7b96b4e175c9c1bb4',
                apiUrl:'https://api-58257DF8-CA2A-4766-8E4A-7BD27A009CEF.sendbird.com',
                messages:'',
                timePassed:'',
                otherUser:'',
                myUser:'',
                unread:0
            }
        },computed: {
            truncatedMessage() {
            if (this.messages.length > 25) {
                return this.messages.substring(0, 25) + '...';
            } else {
                return this.messages;
            }
            },
        },
        mounted() {
            
            this.getOtherUser()
            this.listGroupMessage()
            setInterval(this.getUnread, 1000);
        },
        methods: {
            channelClick() {
                this.clearUnread()
                this.unread = 0
                this.$emit('channel-clicked', this.channel.channel_url)
            },
            async clearUnread() {
                const response = await fetch(`${this.apiUrl}/v3/group_channels/${this.channel.channel_url}/messages/mark_as_read`, {
                method: 'PUT',
                headers: {
                    'Api-Token': this.apiToken,
                },
                body: JSON.stringify({
                    "user_id": this.myUserID
                })
                });
                const jsonData = await response.json();
                // console.log(jsonData);
            },
            getTimeElapsed(time) {
                const minutes = Math.floor(time / 60000);
                if (minutes < 60) {
                    return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
                }
                const hours = Math.floor(minutes / 60);
                if (hours < 24) {
                    return `${hours} hour${hours === 1 ? '' : 's'} ago`;
                }
                const days = Math.floor(hours / 24);
                return `${days} day${days === 1 ? '' : 's'} ago`;
            },
            // async listOpenMessage() {
            //     const response = await fetch(`${this.apiUrl}/v3/open_channels/${this.channel.channel_url}/messages?message_id=1841347291&message_type=MESG&reverse=true`, {
            //     method: 'GET',
            //     headers: {
            //         'Api-Token': this.apiToken,
            //     }
                
            //     });
            //     const jsonData = await response.json();
            //     this.messages = jsonData.messages[0].message
            //     // console.log(this.messages);
            //     // console.log(typeof(jsonData.messages[0].created_at));
            //     const currentTime = Date.now();
            //     const elapsedTime = currentTime - jsonData.messages[0].created_at; 
            //     this.timePassed = this.getTimeElapsed(elapsedTime)
            // },
            async listGroupMessage() {
                let timeStamp = Date.now()
                const response = await fetch(`${this.apiUrl}/v3/group_channels/${this.channel.channel_url}/messages?message_ts=${timeStamp}&prev_limit=50&message_type=MESG&sender_id=${this.otherUser.user_id}&reverse=true`, {

                method: 'GET',
                    headers: {
                        'Api-Token': this.apiToken,
                    }
                });
                const jsonData = await response.json();
                // console.log(jsonData);
                if(jsonData.messages.length != 0){
                    this.messages = jsonData.messages[0].message
                    const currentTime = Date.now();
                    const elapsedTime = currentTime - jsonData.messages[0].created_at; 
                    this.timePassed = this.getTimeElapsed(elapsedTime)
                }
                // console.log(this.messages);
                // // console.log(typeof(jsonData.messages[0].created_at));
            },
            async getUnread() {
                const response = await fetch(`${this.apiUrl}/v3/group_channels/${this.channel.channel_url}/messages/unread_count?user_ids=${this.myUserID}`, {

                method: 'GET',
                    headers: {
                        'Api-Token': this.apiToken,
                    }
                });
                const jsonData = await response.json();
                // console.log(jsonData);
                // console.log('new',this.unread, 'old', jsonData.unread[`${this.myUserID}`]);
                // console.log('unread=====',this.unread);
                if (jsonData.unread[`${this.myUserID}`] > this.unread) {
                    this.unread = jsonData.unread[`${this.myUserID}`]
                    // this.$emit('message-come')
                }
                // console.log(this.unread);
            },
            async getOtherUser() {
                // console.log(this.channel.members[1]);
                if (this.channel.members[0].user_id == this.myUserID) {
                    this.myUser = this.channel.members[0]
                    this.otherUser = this.channel.members[1]
                } else {
                    this.myUser = this.channel.members[1]
                    this.otherUser = this.channel.members[0]
                }
                // console.log(this.myUser);
            },
        }
    }
</script>

<style scoped>

.mask-custom {
background: rgba(24, 24, 16, .2);
border-radius: 2em;

backdrop-filter: blur(15px);
border: 2px solid rgba(255, 255, 255, 0.05);
background-clip: padding-box;
box-shadow: 10px 10px 10px rgba(46, 54, 68, 0.03);
}
</style>