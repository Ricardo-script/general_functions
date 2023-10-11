import { View, Text } from "react-native";
import st from './styles';

interface ChatBubbleProps {
  message: string;
  isSentByUser: boolean;
}

function ChatBubble({ message, isSentByUser }: ChatBubbleProps) {
  return (
    <View style={[st.bubble, isSentByUser ? st.userBubble : st.otherBubble]}>
      <View style={isSentByUser ? st.userArrow : st.otherArrow} />
      <Text style={st.message}>{message}</Text>
    </View>
  );
}

export { ChatBubble }



import { StyleSheet } from "react-native";
import { colors } from "../../../assets/styles/colors";

export default StyleSheet.create({
  bubble: {
    position: 'relative',
    maxWidth: '80%',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: colors.neutrals.blue_30,
  },
  otherBubble: {
    alignSelf: 'flex-start',
    backgroundColor: colors.primary.blue_20,
  },
  userArrow: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: -10,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderTopWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderLeftWidth: 0,
    borderTopColor: 'transparent',
    borderRightColor: colors.neutrals.blue_30,
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  otherArrow: {
    position: 'absolute',
    bottom: 0,
    right: -10,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderTopWidth: 10,
    borderRightWidth: 0,
    borderBottomWidth: 10,
    borderLeftWidth: 10,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: colors.primary.blue_20,
  },
  message: {
    color: '#fff',
  },
})

//uso:

import { Container } from "../../../components/atoms/container";
import { ContentListMessageProps } from "../../../components/molecules/content-messages";
import { useRoute } from "@react-navigation/native";
import { ChatBubble } from "../../../components/atoms/chat-bubble";

type DataParamProps = {
    data: ContentListMessageProps
}

function Chat() {

    const { data } = useRoute().params as DataParamProps

    console.log('reg', data)

    return (
        <Container>
            <ChatBubble message="Olá" isSentByUser />
            <ChatBubble message="Tranquilo" isSentByUser={false} />
        </Container>
    );
}

export { Chat }