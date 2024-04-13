import { Box } from '@chakra-ui/layout';
import './styles.css';
import SingleChat from './SingleChat';
import { ChatState } from '../Context/ChatProvider';
import { useBreakpointValue } from '@chakra-ui/react';

const ChatBox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();
  const display = useBreakpointValue({
    base: selectedChat ? 'flex' : 'none',
    md: 'flex',
  });

  return (
    <Box
      display={display}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: '100%', md: '68%' }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default ChatBox;
