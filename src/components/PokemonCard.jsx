import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';

const PokemonCard = ({ name }) => {
    return (
        <Card
            title={name}
            cover={<img alt="Ditto" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" />}
            extra={<StarOutlined />}
        >
            <Meta title={name} description="Fire, Magic" />
        </Card>
    );
}

export default PokemonCard;