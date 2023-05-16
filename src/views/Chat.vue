<template>
  <div class="gradient-custom container">
    <div class="row">
      <div class="col-md-6 col-lg-5 col-xl-5 mb-4 mb-md-0">
        <h5 class="font-weight-bold mb-3 text-center text-white">Chat</h5>

        <!-- Chat channel list box -->
        <div class="card mask-custom">
          <div class="card-body">
            <div class="list-container">
              <ul class="list-unstyled mb-0">
                <div v-if="myChannels">
                  <div :key="listComponentKey">
                    <div v-for="(value, key) in myChannels">
                      <SubListBox @channel-clicked="channelClick" @message-come="messageComeForList" :channel="value"
                        :myUserID="myUserID" />
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>

      </div>

      <!-- Chat message box -->
      <div class="col-md-6 col-lg-7 col-xl-7 ">
        <div :key="chatBoxComponentKey">
          <ChatBox :currentChannelUrl="currentChannelUrl" :myUserID="myUserID" @open-image-popup="handleOpenImagePopup"
            @message-file-sent="refreshChatBox" @new-message-come="newMessageCome" />
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
import { getAuth,onAuthStateChanged} from 'firebase/auth'
import SubListBox from '../components/chat/SubListBox.vue';
import ChatBox from '../components/chat/ChatBox.vue';
import { SENDBIRD_CONSTANTS } from '../CONSTS.js'

export default {

  name: 'Chat',
  components: {
    SubListBox,
    ChatBox
  },
  data() {
    return {
      myUserID: "",
      otherUserID: "8888888",
      userObjects: {},
      myChannels: [],
      currentChannelUrl: null,
      showImagePopup: false,
      popupImageUrl: '',
      chatBoxComponentKey: 0,
      listComponentKey: 0,
      auth: getAuth()
    }
  },
  watch: {
    currentChannelUrl(newValue, oldValue) {
      // console.log('currentChannelUrl changed from', oldValue, 'to', newValue);
    }
  },
  mounted() {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.myUserID = user.uid
        if (this.$route.params.fromblog == '1') {
          // console.log('Chat from blog');
          this.createGroupChannel()

        } else {
          // console.log('Chat from bar');
        }
        this.listMyGroupChannel()
      }
      else {
        console.log("not login")
      }
    })
  },
  methods: {
    messageComeForList() {
      this.listComponentKey++
    },
    newMessageCome(channel_url) {
      this.clearUnread(channel_url)
      this.listComponentKey += 1 // Change for refresh list component
      this.chatBoxComponentKey += 1 // Change for refresh chatBox component
    },
    refreshChatBox() {
      this.listComponentKey += 1 // Change for refresh list component
      this.chatBoxComponentKey += 1 // Change for refresh chatBox component
    },
    handleOpenImagePopup(imageUrl) {
      this.popupImageUrl = imageUrl;
      this.showImagePopup = true;
    },
    closeImagePopup() {
      this.showImagePopup = false;
    },
    channelClick(channel_url) {
      if (this.currentChannelUrl != channel_url) {
        this.chatBoxComponentKey += 1 // Change for refresh component
      }
      // this.listComponentKey+=1
      this.currentChannelUrl = channel_url;

    },
    async clearUnread(channel_url) {
      const response = await fetch(`${SENDBIRD_CONSTANTS.API_URL}/v3/group_channels/${channel_url}/messages/mark_as_read`, {
        method: 'PUT',
        headers: {
          'Api-Token': SENDBIRD_CONSTANTS.API_TOKEN,
        },
        body: JSON.stringify({
          "user_id": this.myUserID
        })
      });
      const jsonData = await response.json();
      // console.log(jsonData);
    },
    async createGroupChannel() {
      if (this.otherUserID === "") return
      const response = await fetch(`${SENDBIRD_CONSTANTS.API_URL}/v3/group_channels`, {
        method: 'POST',
        headers: {
          'Api-Token': SENDBIRD_CONSTANTS.API_TOKEN,
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
      // console.log(jsonData);
      if (response.status === 200) {
        this.currentChannelUrl = jsonData.channel_url
        console.log('currentChannelUrl ===== ', this.currentChannelUrl);
        this.chatBoxComponentKey++
      }
    },
    // Use myUserID
    // Store in myChannels
    async listMyGroupChannel() {
      const response = await fetch(`${SENDBIRD_CONSTANTS.API_URL}/v3/group_channels?members_include_in=${this.myUserID}&show_member=true`, {
        method: 'GET',
        headers: {
          'Api-Token': SENDBIRD_CONSTANTS.API_TOKEN,
        }
      });
      const jsonData = await response.json();
      this.myChannels = jsonData.channels
      // console.log(this.myChannels);
    },
    async listMessage(channel_url) {
      const response = await fetch(`${SENDBIRD_CONSTANTS.API_URL}/v3/open_channels/${channel_url}/messages?message_id=1841347291`, {
        method: 'GET',
        headers: {
          'Api-Token': SENDBIRD_CONSTANTS.API_TOKEN,
        }
      });
      const jsonData = await response.json();
      this.messages = jsonData.messages
      console.log(this.messages);
      // console.log(typeof(jsonData.messages[0].created_at));
    },
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
  height: 300px;
  /* set a fixed height for the container */
  overflow-y: auto;
  /* enable vertical scrolling */
}

.gradient-custom {
  /* fallback for old browsers */
  background: #fccb90;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to bottom, rgb(255, 153, 0), rgb(255, 239, 219));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to bottom, rgb(255, 153, 0), rgb(255, 239, 219))
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
