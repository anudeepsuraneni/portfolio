import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import CardIcons from './CardIcons';

const CardItem = (props) => {
    return (
        <Card sx={{ width: 380, height: 450, m: 2, backgroundColor: '#F6F6F6', boxShadow: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardMedia
                component="div"
                role="img"
                aria-label={props.item.title}
                sx={{
                    backgroundImage: `url(${props.item.image || require('../../assets/projects/cyclistic/logo.png')})`,
                    height: 220, // Increased height for the media
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}
            />
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="div" textAlign="center">
                        <strong>{props.item.title}</strong>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" textAlign="center" sx={{ mt: 1 }}>
                        {props.item.description}
                    </Typography>
                </Box>
                <Box sx={{ borderTop: 1, borderColor: 'divider', my: 1 }} />
                <CardIcons item={props.item} sx={{ py: 0.3 }} />
            </CardContent>
        </Card>
    );
}

export default CardItem;
