<template>
    <ul class="list-unstyled text-white">
        <div ref="container" class="chat-container">
            <div v-if="messages">
                <div v-for="(value, key) in messages" :key="key">
                    <SubChatBox 
                        :message="value" 
                        :myUserID="myUserID"
                        @complete-created="numberOfFileMessageRendered++"
                        @open-image-popup="sendPopUpUrl"
                    />
                </div>
                
            </div>
        </div>
        <div v-if="currentChannelUrl">
            <li class="mb-3">
                <div class="form-outline form-white">
                    <textarea @keyup.enter="sendMessageGroupChannel" class="form-control" v-model="sendMessageBoxValue" rows="4"></textarea>
                    <label class="form-label" for="textAreaExample3">Message</label>
                </div>
            </li>
            <div class="container ">
                <div class="row">
                    <div class="col-9">
                        <input @change="submitFileGroupChannel" type="file" class="form-control">
                    </div>
                    <div class="col-3">
                        <button @click="sendMessageGroupChannel" type="button" class="btn btn-light btn-lg btn-rounded float-end" style="margin-left: 3%;">Send</button>
                    </div>
                </div>
    
            </div>
        </div>
    </ul>

</template>

<script>
    import SubChatBox from '../chat/SubChatBox.vue';
    import axios from 'axios';
    export default {
        name:'ChatBox',
        components: {
            SubChatBox,
        },
        data() {
            return {
                sendMessageBoxValue:'',
                messages:null,
                selectedFile: null,
                apiToken: '59c2ddbf1add1be678005db7b96b4e175c9c1bb4',
                
                apiUrl:'https://api-58257DF8-CA2A-4766-8E4A-7BD27A009CEF.sendbird.com',
                numberOfFileMessage:0,
                numberOfFileMessageRendered:0,
                unread:0,
            }
        },
        props: {
            currentChannelUrl: String,
            myUserID: String
        },
        mounted() {
            this.listGroupChannelMessage(this.currentChannelUrl)
            // this.$nextTick(() => {
            //     const container = this.$refs.container;
            //         container.scrollTop = container.scrollHeight;
            // });
            setInterval(this.getUnread, 1000);
        },
        watch: {
            numberOfFileMessageRendered(newValue, oldValue) {
                // console.log('numberOfFileMessage:',this.numberOfFileMessage);
                // console.log('numberOfFileMessageRendered: old',oldValue);
                // console.log('numberOfFileMessageRendered: new',newValue);
                if(this.numberOfFileMessage == newValue) {
                    const container = this.$refs.container;
                    container.scrollTop = container.scrollHeight;
                }
            }
        },
        methods: {
            async getUnread() {
                if(this.currentChannelUrl == null || this.currentChannelUrl == '') return
                // console.log(this.currentChannelUrl);
                const response = await fetch(`${this.apiUrl}/v3/group_channels/${this.currentChannelUrl}/messages/unread_count?user_ids=${this.myUserID}`, {

                method: 'GET',
                    headers: {
                        'Api-Token': this.apiToken,
                    }
                });
                const jsonData = await response.json();
                // console.log(jsonData);
                // console.log(jsonData.unread[`${this.myUserID}`])
                // console.log(this.unread);
                this.unread = jsonData.unread[`${this.myUserID}`]
                // console.log( this.unread );
                if(this.unread > 0){
                    // this.clearUnread()
                    this.$emit('new-message-come', this.currentChannelUrl)
                }
            },
            sendPopUpUrl(value){
                this.$emit('open-image-popup', value);
            },
            
            // async listOpenChannelMessage(channel_url) {
            //     const response = await fetch(`${this.apiUrl}/v3/open_channels/${channel_url}/messages?message_id=1841347291`, {
            //       method: 'GET',
            //       headers: {
            //           'Api-Token': this.apiToken,
            //       }
            //     });
            //     const jsonData = await response.json();
            //     this.messages = jsonData.messages
            //     console.log(this.messages);
            //     // console.log(typeof(jsonData.messages[0].created_at));
            // },
            async listGroupChannelMessage(channel_url) {
                if(this.currentChannelUrl == null) return
                if(this.currentChannelUrl == '') return
                let timeStamp = Date.now()
                const response = await fetch(`${this.apiUrl}/v3/group_channels/${channel_url}/messages?message_ts=${timeStamp}&prev_limit=50`, {
                  method: 'GET',
                  headers: {
                      'Api-Token': this.apiToken,
                  }
                });
                const jsonData = await response.json();
                this.messages = jsonData.messages
                // console.log(this.messages);

                this.messages.forEach(e => {
                    if(e.type == 'FILE'){
                        this.numberOfFileMessage++
                    }
                })

                if( this.numberOfFileMessage == 0 ) {
                    setTimeout(() => {
                        const container = this.$refs.container;
                        container.scrollTop = container.scrollHeight;
                    }, 50);
                }
                // console.log(this.numberOfFileMessage);

                // console.log(typeof(jsonData.messages[0].created_at));
            },
            generateBoundaryString() {
                const boundaryLength = 16; // The length of the boundary string in characters
                const allowedChars = 'abcdefghijklmnopqrstuvwxyz0123456789'; // The set of characters that are allowed in the boundary string
                let boundary = '';
                for (let i = 0; i < boundaryLength; i++) {
                const randomIndex = Math.floor(Math.random() * allowedChars.length);
                boundary += allowedChars[randomIndex];
                }
                return `--------------------------${boundary}`;
            },
            async submitFileGroupChannel(event) {
                this.selectedFile = event.target.files[0];
                if(this.currentChannelUrl == null) return

                const form = new FormData();
                const boundaryString = this.generateBoundaryString()
                
                let url = `${this.apiUrl}/v3/group_channels/${this.currentChannelUrl}/messages`
                let binaryHeaders = {};
                let binaryContentType = `Content-Type`;
                binaryHeaders[binaryContentType] = `multipart/form-data; boundary=${boundaryString}`;
                let binaryHeaderApiToken = `Api-Token`;
                binaryHeaders[binaryHeaderApiToken] = this.apiToken;

                form.append('message_type', "FILE");
                form.append('user_id', this.myUserID);
                form.append('file', this.selectedFile, this.selectedFile.name);
                // form.append('require_auth', false);

                let response = await axios.post(url, form, {
                    headers: binaryHeaders
                });
                // console.log(response);
                if(response.status == 200){
                    alert('Send file complete!')
                    this.$emit('message-file-sent')
                }
                else{
                    alert('Something went wrong!')

                }

            },
            async sendMessageGroupChannel() {
                if (this.sendMessageBoxValue == '') return
                const response = await fetch(`${this.apiUrl}/v3/group_channels/${this.currentChannelUrl}/messages`, {
                method: 'POST',
                headers: {
                    'Api-Token': this.apiToken,
                },
                body: JSON.stringify({
                    "message_type":"MESG",
                    "user_id": this.myUserID,
                    "message": this.sendMessageBoxValue,
                })
                });
                const jsonData = await response.json();
                // console.log(jsonData);
                // clear message text area
                this.sendMessageBoxValue = ''
                this.$emit('message-file-sent')
            },
        }

    }
</script>

<style scoped>
    .chat-container {
    height: 450px; /* set a fixed height for the container */
    overflow-y: scroll; /* enable vertical scrolling */
}
</style>