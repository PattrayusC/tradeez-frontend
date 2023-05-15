<template>
  <div class="gradient-custom container">
      <div class="row">
        <div class="col-md-6 col-lg-5 col-xl-5 mb-4 mb-md-0">

          <h5 class="font-weight-bold mb-3 text-center text-white">Chat</h5>
          
          <div class="card mask-custom">
            <div class="card-body">
              <div class="list-container">
                <ul class="list-unstyled mb-0">
                  <div v-if="myChannels">
                    <div :key="listComponentKey">
                      <div v-for="(value, key) in myChannels">
                        <SubListBox 
                          @channel-clicked="channelClick"
                          @message-come="messageComeForList"
                          :channel="value"
                          :myUserID="myUserID"/>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>

        </div>

        <div class="col-md-6 col-lg-7 col-xl-7 ">
          <div :key="chatBoxComponentKey">
            <ChatBox
              :currentChannelUrl="currentChannelUrl"
              :myUserID="myUserID"
              @open-image-popup="handleOpenImagePopup"
              @message-file-sent="refreshChatBox"
              @new-message-come="newMessageCome"
            />
          </div>
        </div>

        <!-- popup image -->
        <div v-if="showImagePopup" class="popup-overlay" @click="closeImagePopup">
          <div class="popup-content">
            <img :src="popupImageUrl">
          </div>
        </div>
      </div>


  </div>

</template>

<script>
import SubListBox from '../components/chat/SubListBox.vue';
import ChatBox from '../components/chat/ChatBox.vue';
import axios from 'axios'

  export default {

    name: 'Chat',
    components: {
      SubListBox,
      ChatBox
    },
    data() {
      return {
        // MYUSER: {
        //   'user_id':'123456789',
        //   'nickname':'chana',
        //   'imagelink': 'https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg',

        // },
        // OTHER: {
        //   'user_id':'8888888',
        //   'nickname':'JIJI',
        //   'imagelink': 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
        // },
        myUserID: "9999999",
        otherUserID: "8888888",
        userObjects: {},
        myChannels: [],
        apiToken: '59c2ddbf1add1be678005db7b96b4e175c9c1bb4',
        apiUrl:'https://api-58257DF8-CA2A-4766-8E4A-7BD27A009CEF.sendbird.com',
        
        currentChannelUrl:null,
        showImagePopup: false,
        popupImageUrl: '',
        chatBoxComponentKey: 0,
        listComponentKey: 0,
      }
    },
    watch:{
      currentChannelUrl(newValue, oldValue) {
        // console.log('currentChannelUrl changed from', oldValue, 'to', newValue);
      }
    },
    mounted() {
      
      this.listMyGroupChannel()
      // setInterval(this.loopMethod, 1000);
      // console.log(555);
    },
    methods: {
      messageComeForList(){
        this.listComponentKey++
      },
      newMessageCome(channel_url){
        this.clearUnread(channel_url)
        this.listComponentKey+=1 // Change for refresh list component
        this.chatBoxComponentKey+=1 // Change for refresh chatBox component
      },
      refreshChatBox() {
        this.listComponentKey+=1 // Change for refresh list component
        this.chatBoxComponentKey+=1 // Change for refresh chatBox component
      },
      handleOpenImagePopup(imageUrl) {
        this.popupImageUrl = imageUrl;
        this.showImagePopup = true;
      },
      closeImagePopup() {
        this.showImagePopup = false;
      },
      channelClick(channel_url) {
        if( this.currentChannelUrl != channel_url ) {
          this.chatBoxComponentKey+=1 // Change for refresh component
        }
        // this.listComponentKey+=1
        this.currentChannelUrl = channel_url;

      },
      async clearUnread(channel_url) {
                const response = await fetch(`${this.apiUrl}/v3/group_channels/${channel_url}/messages/mark_as_read`, {
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

      // async listUser() {
      //   const response = await fetch(`${this.apiUrl}/v3/users`, {
      //     method: 'GET',
      //     headers: {
      //       'Api-Token': this.apiToken,
      //     }
      //   });
      //   const jsonData = await response.json();
      //   this.userObjects = jsonData
      //   // console.log(this.userObjects);
      // },
      // Use MYUSER.user_id, MYUSER.nickname, MYUSER.imagelink
      // async createUser() {
      //   const response = await fetch(`${this.apiUrl}/v3/users`, {
      //     method: 'POST',
      //     headers: {
      //       'Api-Token': this.apiToken,
      //     },
      //     body: JSON.stringify({
      //     "user_id": this.MYUSER.user_id,
      //     "nickname": this.MYUSER.nickname,
      //     "profile_url": this.MYUSER.imagelink,
      //     "issue_access_token": true
      //     })
      //   });
      //   const jsonData = await response.json();
      //   // console.log(jsonData);
      // },
      // async updateUser() {
      //   const response = await fetch(`${this.apiUrl}/v3/users/${this.MYUSER.user_id}`, {
      //     method: 'PUT',
      //     headers: {
      //       'Api-Token': this.apiToken,
      //     },
      //     body: JSON.stringify({
      //       "user_id": this.MYUSER.user_id,
      //       "nickname": this.MYUSER.nickname,
      //       "profile_url": this.MYUSER.imagelink,
      //     })
      //   });
      //   const jsonData = await response.json();
      //   // console.log(jsonData);
      // },

      // async createOpenChannel() {
      //   const response = await fetch(`${this.apiUrl}/v3/open_channels`, {
      //     method: 'POST',
      //     headers: {
      //       'Api-Token': this.apiToken,
      //     },
      //     body: JSON.stringify({
      //       "name": this.OTHER.nickname,
      //       "cover_url": this.OTHER.imagelink,
      //       "data": JSON.stringify({
      //         "user1": this.MYUSER.user_id,
      //         "user2": this.OTHER.user_id
      //       })
      //     })
      //   });
      //   const jsonData = await response.json();
      //   console.log(jsonData);
      // },
      async createGroupChannel() {
        const response = await fetch(`${this.apiUrl}/v3/group_channels`, {
          method: 'POST',
          headers: {
            'Api-Token': this.apiToken,
          },
          body: JSON.stringify({
            "user_ids": [
              this.myUserID,
              this.otherUserID,
            ],
            "is_distinct": true
          })
        });
        const jsonData = await response.json();
        console.log(jsonData);
      },
      // Use myUserID
      // Store in myChannels
      async listMyGroupChannel() {
        const response = await fetch(`${this.apiUrl}/v3/group_channels?members_include_in=${this.myUserID}&show_member=true`, {
          method: 'GET',
          headers: {
            'Api-Token': this.apiToken,
          }
        });
        const jsonData = await response.json();
        this.myChannels = jsonData.channels
        // console.log(this.myChannels);
      },

      // Use myUserID
      // Store in myChannels
      // async listMyOpenChannel() {
      //   const response = await fetch(`${this.apiUrl}/v3/open_channels`, {
      //     method: 'GET',
      //     headers: {
      //       'Api-Token': this.apiToken,
      //     }
      //   });
      //   let jsonData = await response.json();

      //   let obj = {}
      //   for(let i=0; i<jsonData.channels.length; i++){
      //     if(jsonData.channels[i].data != ''){
      //       obj = JSON.parse(jsonData.channels[i].data)
      //       jsonData.channels[i].data = obj
      //       if(obj.user1 == this.myUserID || obj.user2 == this.myUserID){
      //         this.myChannels = [...this.myChannels, jsonData.channels[i]];
      //       }
      //     }
      //   }
      // },
      async listMessage(channel_url) {
                const response = await fetch(`${this.apiUrl}/v3/open_channels/${channel_url}/messages?message_id=1841347291`, {
                  method: 'GET',
                  headers: {
                      'Api-Token': this.apiToken,
                  }
                });
                const jsonData = await response.json();
                this.messages = jsonData.messages
                console.log(this.messages);
                // console.log(typeof(jsonData.messages[0].created_at));

                // const currentTime = Date.now();
                // const elapsedTime = currentTime - jsonData.messages[0].created_at; 
                // this.timePassed = this.getTimeElapsed(elapsedTime)
      },
      // async updateChannel(channel) {
      //   const response = await fetch(`${this.apiUrl}/v3/open_channels/${channel.channel_url}`, {
      //     method: 'PUT',
      //     headers: {
      //       'Api-Token': this.apiToken,
      //     },
      //     body: JSON.stringify({
      //     "channel_url": "<string>",
      //     "name": "<string>",
      //     "cover_url": "<string>",
      //     "cover_file": "<binary>",
      //     "custom_type": "<string>",
      //     "data": "<string>",
      //     "operator_ids": [
      //       "<string>",
      //       "<string>"
      //     ],
      //     "operators": [
      //       "<string>",
      //       "<string>"
      //     ]
      //   })
      //   });
      //   const jsonData = await response.json();
      //   // console.log(jsonData);
      // },
    }
  }
</script>


<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-content {
  max-width: 80%;
  max-height: 80%;
}

.popup-content img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.list-container {
  height: 300px; /* set a fixed height for the container */
  overflow-y: auto; /* enable vertical scrolling */
}

.gradient-custom {
/* fallback for old browsers */
background: #fccb90;

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to bottom,rgb(255, 153, 0), rgb(255, 239, 219));

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to bottom,rgb(255, 153, 0), rgb(255, 239, 219))
}

.mask-custom {
background: rgba(24, 24, 16, .2);
border-radius: 2em;

backdrop-filter: blur(15px);
border: 2px solid rgba(255, 255, 255, 0.05);
background-clip: padding-box;
box-shadow: 10px 10px 10px rgba(46, 54, 68, 0.03);
}

</style>
