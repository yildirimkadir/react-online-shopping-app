import {Container, Left, Center, Right, SocialContainer, SocialIcon, Description, Logo, Title, ListItem, List} from "./Footer.style"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';



const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>WebDev</Logo>
            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint esse saepe optio quis reprehenderit eum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, quod?</Description>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <FacebookIcon />
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <TwitterIcon />
                </SocialIcon>
                <SocialIcon color="E60023">
                    <PinterestIcon />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Usefull Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right></Right>
    </Container>
  )
}

export default Footer