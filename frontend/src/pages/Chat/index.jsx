import {
  MultiChatWindow,
  MultiChatSocket,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    'bd5eeea3-6d36-44bb-87ec-71336bb2142f', 
    props.user.username, 
    props.user.secret);
    return  (
    <div style={{height:'100vh'}}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{height:"100%"}}/>
    </div>
    )
  };
  export default ChatsPage;