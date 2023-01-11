import SendIcon from '@mui/icons-material/Send';
import { Container, Title, Description, InputContainer, Input,Button } from './NewsLetter.style';
const NewsLetter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favorite products</Description>
        <InputContainer>
          <Input placeholder='Your email'/>
          <Button>
            <SendIcon />
          </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter