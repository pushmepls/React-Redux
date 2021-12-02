import { Facebook, Instagram, MailOutlineOutlined, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import '../style/Footer.css'
export default function Footer() {
    
    
    return (
        <Box className='footer'>
            <Box >
                <Box >Ecommerce Clone</Box>
                <Box >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.
                </Box>
                <Box >
                    <Facebook />
                    <Instagram  />
                    <Twitter />
                    <Pinterest />
                </Box>
            </Box>
            <Box >
                <h1 >Useful Link</h1>
                <Box  className='Link'>
                    <Link  to='/electronics'>ELECTRONICS</Link>
                    <Link  to='/jewelery'>JEWELERY</Link>
                    <Link  to="/men'sclothing">MEN'S CLOTHING</Link>
                    <Link  to="/women'sclothing">WOMEN'S CLOTHING</Link>
                </Box>
            </Box>
            <Box >
                <h1 >Contact</h1>
                <Box >
                    <Room />
                    622 Dixie Path , South Tobinchester 98336
                </Box>
                <Box >
                    <Phone />
                    +1 234 56 78
                </Box>
                <Box >
                    <MailOutlineOutlined />
                    Tranquanghuy8110@gamil.com
                </Box>
                <img alt="img" src="https://i.ibb.co/Qfvn4z6/payment.png"/>          
            </Box>
        </Box>
    )
}